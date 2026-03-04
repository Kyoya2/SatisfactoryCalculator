import re
import json
from fractions import Fraction
from dataclasses import dataclass
from os import path
from typing import NamedTuple, Any, TypeAlias, Iterable

# TODO: "mForm": "(?!RF_LIQUID|RF_SOLID|RF_GAS|RF_INVALID)
# TODO: Look at "mAlternativeMaterialRecipes" in the JSON


# Corresponds to the "ClassName" element in the JSON file.
# For example: "Desc_SpaceElevatorPart_1_C".
GameObjectId: TypeAlias = str

# Corresponds to the "NativeClass" element in the JSON.
# For example: "FGItemDescriptor".
GameObjectCategoryName: TypeAlias = str

# Corresponds to an entry inside the "Classes" member of each top-level entry in the JSON.
# For example:
# {
#   "ClassName": "Desc_AluminumIngot_C",
#   "mDisplayName": "Aluminum Ingot",
#   ...
# }
GameObject: TypeAlias = dict[str, Any]


class CountedItem(NamedTuple):
    item_name: GameObjectId
    amount: Fraction

    def __repr__(self):
        return f"{self.item_name} [{self.amount}]"


class Recipe(NamedTuple):
    name: str
    ingredients: list[CountedItem]
    duration: Fraction
    is_alternate: bool


class CraftingObject(NamedTuple):
    id: str
    name: str
    recipes: list[Recipe]
    # Type: 'solid' | 'liquid' | 'gas'


# Either a belt or a pipeline
class Transporter(NamedTuple):
    name: str
    speed: Fraction


@dataclass
class ItemDescriptor:
    item_name: GameObjectId
    production_duration: float
    total_required_amount: float
    total_machines_required: float


def jsonify(obj):
    if isinstance(obj, Fraction):
        return {'n': obj.numerator, 'd': obj.denominator}

    if isinstance(obj, (int, float, str, bool)):
        return obj

    if isinstance(obj, dict):
        return {
            k: jsonify(v)
            for k, v
            in obj.items()
        }

    if isinstance(obj, (list, tuple, set)):
        if isinstance(obj, tuple) and hasattr(obj, '_fields'):
            return jsonify(obj._asdict())
        else:
            return [jsonify(item) for item in obj]

    raise TypeError(f'Unknown type: {type(obj)}')


_COMMON_OBJECT_CATEGORY_NAME_PREFIX = r"/Script/CoreUObject.Class'/Script/FactoryGame."
_RECIPE_OBJECT_REGEX = re.compile(r"""\(ItemClass="[/\w.']+\.(\w+)'",Amount=(\d+)\)""")
_OBJECT_NAME_REGEX = re.compile(r"^([a-zA-Z\d]+)_(.+)_C$")
_CAMEL_CASE_REGEX = re.compile(r"([a-z])([A-Z])")
_ICON_STRING_REGEX = re.compile(r"Texture2D /Game/FactoryGame/(.*(\w+))\.\2")


def _get_object_display_name(game_object: GameObject) -> str:
    if display_name := game_object.get('mDisplayName', ''):
        return display_name

    # TODO: this yields duplicate names. Need to de-duplicate them by re-adding
    # the prefix on such scenarios

    display_name = game_object['id']
    display_name = _OBJECT_NAME_REGEX.match(display_name)
    suffix, display_name = display_name.groups()
    display_name = display_name.replace('_', ' ')
    display_name = _CAMEL_CASE_REGEX.sub(r'\1 \2', display_name)

    return display_name


def main(doc_file_path=r"C:\Program Files (x86)\Steam\steamapps\common\Satisfactory\CommunityResources\Docs\en-US.json"):
    with open(doc_file_path, 'rb') as f:
        game_object_categories = json.load(f)

    all_objects: dict[GameObjectId, GameObject]= {}
    categorized_objects: dict[GameObjectCategoryName, dict[GameObjectId, GameObject]] = {}

    for game_object_category in game_object_categories:
        assert game_object_category['NativeClass'].startswith(_COMMON_OBJECT_CATEGORY_NAME_PREFIX)
        category_name = game_object_category['NativeClass'][len(_COMMON_OBJECT_CATEGORY_NAME_PREFIX):].rstrip("'")

        current_category_objects = {}
        for game_object in game_object_category['Classes']:
            #if ('mSmallIcon' in game_object) and ('None' != game_object['mSmallIcon']):
            #    match = self._ICON_STRING_REGEX.match(game_object['mSmallIcon'])
            #    game_object['iconPath'] = f"./game_assets/{match[1]}.png"

            game_object['id'] = game_object['ClassName']
            game_object['name'] = _get_object_display_name(game_object)

            assert game_object['id'] not in all_objects
            all_objects[game_object['id']] = game_object
            current_category_objects[game_object['id']] = game_object

        categorized_objects[category_name] = current_category_objects

    crafting_ingredients: set[GameObjectId] = set()
    crafting_products: set[GameObjectId] = set()

    for recipe_id, recipe in categorized_objects['FGRecipe'].items():
        parsed_ingredients = _RECIPE_OBJECT_REGEX.findall(recipe['mIngredients'])
        full_duration = Fraction(float(recipe['mManufactoringDuration']))
        is_alternate = recipe['mDisplayName'].startswith('Alternate: ')

        crafting_ingredients |= {ingredient_name for ingredient_name, amount in parsed_ingredients}

        for product_name, product_amount in _RECIPE_OBJECT_REGEX.findall(recipe['mProduct']):
            crafting_products.add(product_name)
            product_amount = Fraction(int(product_amount))

            ingredients = [CountedItem(item_name, int(amount) / product_amount) for item_name, amount in parsed_ingredients]
            duration = full_duration / product_amount

            product_obj = all_objects[product_name]
            recipes = product_obj.get('recipes')
            if recipes is None:
                recipes = []
                product_obj['recipes'] = recipes

            recipe_data = Recipe(
                recipe['name'],
                ingredients,
                duration,
                is_alternate
            )

            # Insert the recipe such that non-alternate recipes always come before the
            # alternate recipes
            if is_alternate:
                recipes.append(recipe_data)
            else:
                recipes.insert(0, recipe_data)

    crafting_objects: dict[GameObjectId, CraftingObject] = {}
    for crafting_obj_id in crafting_ingredients | crafting_products:
        obj = all_objects[crafting_obj_id]
        if 'recipes' not in obj:
            obj['recipes'] = []

        crafting_objects[crafting_obj_id] = CraftingObject(
            obj['id'],
            obj['name'],
            obj['recipes']
        )

    conveyor_belts = []
    for conveyor_belt in categorized_objects['FGBuildableConveyorBelt'].values():
        # For some reason, the "mSpeed" value is twice as large as the actual items/minute speed.
        speed = float(conveyor_belt['mSpeed']) / 2
        assert speed.is_integer()

        # The number of seconds it takes to move 1 item
        speed = Fraction(60, int(speed))

        conveyor_belts.append(Transporter(conveyor_belt['name'], speed))

    conveyor_belts.sort(key=lambda b: b.speed, reverse=True)

    pipelines = []
    for pipeline in categorized_objects['FGBuildablePipeline'].values():
        # Filter-out the pipelines that don't have indicators, since they're essentially duplicates for our purposes
        if '_NoIndicator_' in pipeline['id']:
            continue

        flow_limit = float(pipeline['mFlowLimit'])
        assert flow_limit.is_integer()

        # The number of seconds it takes to move 1 cubic meter of liquid
        # TODO: It might not work like this, need to check
        speed = Fraction(1, int(flow_limit))

        pipelines.append(Transporter(pipeline['name'], speed))

    pipelines.sort(key=lambda p: p.speed, reverse=True)

    def sort_by_display_name(object_ids: Iterable[GameObjectId]) -> list[GameObjectId]:
        return list(sorted(object_ids, key=lambda name: crafting_objects[name].name))

    data = jsonify({
        'crafting_objects': crafting_objects,
        'crafting_products': sort_by_display_name(crafting_products),
        'crafting_ingredients': sort_by_display_name(crafting_ingredients),
        'transporters': {
            'conveyor_belts': conveyor_belts,
            'pipelines': pipelines,
        }
    })
    return \
f"""
// @ts-check

/* This file is auto-generated! */

/** @import {{Fraction}} from "mathjs" */

/**
 * @typedef {{string}} GameObjectId
 * @typedef {{{{item_name: GameObjectId, amount: Fraction}}}} CountedItem
 * @typedef {{{{
 *      name: GameObjectId,
 *      ingredients: CountedItem[],
 *      duration: Fraction,
 *      is_alternate: boolean
 * }}}} Recipe
 *
 * @typedef {{{{
 *      name: string,
 *      speed: Fraction
 * }}}} Transporter
 *
 * @typedef {{{{
 *      id: string,
 *      name: string,
 *      recipes: Recipe[]
 * }}}} CraftingObject
 */

/**
 * @type {{{{
 *      crafting_objects: Object.<GameObjectId, CraftingObject>,
 *      crafting_products: GameObjectId[],
 *      crafting_ingredients: GameObjectId[],
 *      transporters: {{
 *          conveyor_belts: Transporter[],
 *          pipelines: Transporter[]
 *      }},
 *  }}}}
 */
const game_data = {json.dumps(data, indent=4, sort_keys=True)};
export default game_data;
"""


if __name__ == '__main__':
    with open(path.join(path.dirname(__file__), '..', 'website', 'scripts', 'game_data.auto.mjs'), 'w') as f:
        f.write(main())
