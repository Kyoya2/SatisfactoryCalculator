import re
import json
import shutil
from os import path
from types import NoneType
from functools import reduce
from fractions import Fraction
from typing import NamedTuple, Any, TypeAlias, Iterable

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

CountedItems: TypeAlias = dict[GameObjectId, Fraction]


class Recipe(NamedTuple):
    name: str
    products: CountedItems
    ingredients: CountedItems
    duration: Fraction
    is_alternate: bool
    produced_in: set[str]


class CraftingObject(NamedTuple):
    id: str
    name: str
    recipes: list[GameObjectId]
    form: str


def jsonify(obj):
    """Prepares the given object for serialization using JSON"""
    if isinstance(obj, Fraction):
        return {'n': obj.numerator, 'd': obj.denominator}

    if isinstance(obj, (int, float, str, bool, NoneType)):
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
_CRAFTING_OBJ_LIST_REGEX = re.compile(r"""\(ItemClass="[/\w.']+\.(\w+)'",Amount=(\d+)\)""")
_OBJECT_NAME_REGEX = re.compile(r"^([a-zA-Z\d]+)_(.+)_C$")
_CAMEL_CASE_REGEX = re.compile(r"([a-z])([A-Z])")
_ICON_STRING_REGEX = re.compile(r"Texture2D /Game/(.*(\w+))\.\2")
_PRODUCED_IN_REGEX = re.compile(r'\"[^,]+\.(\w+)\"')
_ALTERNATE_RECIPE_NAME_PREFIX = "Alternate: "


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


def _parse_crafting_obj_list(all_objects, item_list: str) -> CountedItems:
    items = _CRAFTING_OBJ_LIST_REGEX.findall(item_list)
    result = {}
    for item_id, amount in items:
        assert item_id not in result, "Duplicate item appears in list"

        amount = Fraction(amount)

        # For some reason, liquid amounts are multiplied by 1000 in the game data
        if 'RF_LIQUID' == all_objects[item_id]['mForm']:
            amount /= 1000

        result[item_id] = amount

    return result


# To extract the icons:
# - Follow the guide in "https://docs.ficsit.app/satisfactory-modding/latest/Development/ExtractGameFiles.html" up to
#   (and including) the "Specify Custom Version and Mapping" section.
# - In the "Archives" tab, open "FactoryGame-windows.utoc"
# - Ctrl+Shift+F > search for the string "/UI/"
# - Ctrl+A > Right Click > "Save Texture"
# - This will save most of the textures, but not all of them.
# - To find the other missing textures, uncomment the lines in the script which print the "mSmallIcon" member
#   of each object if it doesn't contain the string "/UI/".
# - Manually extract these one by one (there should be around 5 files in total).
# Note: Alternatively, it's possible to extract all the textures in teh game, but it will take a lot of time
#       and a lot of disk space.
# - Run this function with "fmodel_output_dir_path" set to FModel's "Output" directory (which is automatically created
#   next to "FModel.exe"
def main(
    doc_file_path=r"C:\Program Files (x86)\Steam\steamapps\common\Satisfactory\CommunityResources\Docs\en-US.json",
    fmodel_output_dir_path=None
):
    with open(doc_file_path, 'rb') as f:
        game_object_categories = json.load(f)

    #
    # Base processing for all objects
    #
    all_objects: dict[GameObjectId, GameObject]= {}
    categorized_objects: dict[GameObjectCategoryName, dict[GameObjectId, GameObject]] = {}
    for game_object_category in game_object_categories:
        assert game_object_category['NativeClass'].startswith(_COMMON_OBJECT_CATEGORY_NAME_PREFIX)
        category_name = game_object_category['NativeClass'][len(_COMMON_OBJECT_CATEGORY_NAME_PREFIX):].rstrip("'")

        current_category_objects = {}
        for game_object in game_object_category['Classes']:
            game_object['id'] = game_object['ClassName']
            game_object['name'] = _get_object_display_name(game_object)

            assert game_object['id'] not in all_objects
            all_objects[game_object['id']] = game_object
            current_category_objects[game_object['id']] = game_object

        categorized_objects[category_name] = current_category_objects

    #
    # Process recipes
    #
    recipes: dict[GameObjectId, Recipe] = {}
    crafting_ingredients: set[GameObjectId] = set()
    crafting_products: set[GameObjectId] = set()
    for recipe_id, recipe in categorized_objects['FGRecipe'].items():
        products = _parse_crafting_obj_list(all_objects, recipe['mProduct'])
        ingredients = _parse_crafting_obj_list(all_objects, recipe['mIngredients'])

        crafting_ingredients |= set(ingredients.keys())
        crafting_products |= set(products.keys())

        if "Recipe_Cable_C" == recipe_id:
            a = 1

        duration = Fraction(recipe['mManufactoringDuration'])
        is_alternate = recipe['mDisplayName'].startswith('Alternate: ')
        produced_in = set(_PRODUCED_IN_REGEX.findall(recipe['mProducedIn']))
        recipe_name = recipe['name']

        # Force build converted recipes to be alternate, and update the recipe name accordingly
        if "Build_Converter_C" in produced_in:
            is_alternate = True
            recipe_name = f"Build converter: {recipe_name}"

        # Force "unpackage" recipes to be alternate
        if "Build_Packager_C" in produced_in and "Unpackage" in recipe['id']:
            is_alternate = True

        # Strip common prefix for alternate recipes
        if recipe_name.startswith(_ALTERNATE_RECIPE_NAME_PREFIX):
            recipe_name = recipe_name[len(_ALTERNATE_RECIPE_NAME_PREFIX):]

        recipes[recipe_id] = Recipe(
            recipe_name,
            products,
            ingredients,
            duration,
            is_alternate,
            produced_in
        )

        # Note: this relies on the fact that Python dir iteration yields items in the order they were inserted.
        # In this case, the insertion order is also the order in which the items appear in the products list.
        for i, (product_id, amount) in enumerate(products.items()):
            product_obj = all_objects[product_id]
            product_recipes = product_obj.get('recipes')
            if product_recipes is None:
                product_recipes = []
                product_obj['recipes'] = product_recipes

            # If the recipe is not an alternate, but this product isn't the first in the list, force it to be alternate.
            is_alt = True if 0 != i else is_alternate

            # Insert the recipe such that non-alternate recipes always come before the
            # alternate recipes
            if is_alt:
                product_recipes.append(recipe_id)
            else:
                product_recipes.insert(0, recipe_id)

    #
    # Process crafting objects
    #
    crafting_objects: dict[GameObjectId, CraftingObject] = {}
    for crafting_obj_id in crafting_ingredients | crafting_products:
        obj = all_objects[crafting_obj_id]
        if 'recipes' not in obj:
            obj['recipes'] = []

        # If there's a recipe whose name is just the name of the product, consider it the "main" recipe, even if it
        # is currently marked as an alternate recipe
        for i, recipe_id in enumerate(obj['recipes'][1:], 1):
            recipe = recipes[recipe_id]
            if recipe.name == obj['name']:
                recipe_dict = recipe._asdict()
                recipe_dict['is_alternate'] = False
                recipes[recipe_id] = Recipe(**recipe_dict)
                del obj['recipes'][i]
                obj['recipes'].insert(0, recipe_id)
                break

        produced_in = reduce(lambda value, recipe_id: value | recipes[recipe_id].produced_in, obj['recipes'], set())

        # Exclude things whose production can't be automated
        if (obj["mForm"] == "RF_INVALID") or (len(produced_in) > 0 and produced_in <= {'BP_BuildGun_C', 'FGBuildGun', 'BP_WorkshopComponent_C'}):
            crafting_ingredients.discard(crafting_obj_id)
            crafting_products.discard(crafting_obj_id)
            continue

        #if '/UI/' not in obj['mSmallIcon']:
        #    print(obj['mSmallIcon'])

        assert obj["mForm"] in ("RF_LIQUID", "RF_SOLID", "RF_GAS")
        form = obj["mForm"][len('RF_'):]

        crafting_objects[crafting_obj_id] = CraftingObject(
            obj['id'],
            obj['name'],
            obj['recipes'],
            form
        )

    #
    # Process extracted assets
    #
    if fmodel_output_dir_path is not None:
        asserts_base_path = path.join(fmodel_output_dir_path, 'Exports', 'FactoryGame', 'Content')
        target_base_path = path.join(path.dirname(__file__), '..', 'website', 'images', 'game_icons')
        for crafting_obj_id in crafting_objects:
            obj = all_objects[crafting_obj_id]

            match = _ICON_STRING_REGEX.match(obj['mSmallIcon'])
            shutil.copyfile(
                path.join(asserts_base_path, f'{match[1]}.png'),
                path.join(target_base_path, f'{crafting_obj_id}.png')
            )

    def sort_by_display_name(object_ids: Iterable[GameObjectId]) -> list[GameObjectId]:
        return list(sorted(object_ids, key=lambda name: crafting_objects[name].name))

    data = jsonify({
        'crafting_objects': crafting_objects,
        'crafting_products': sort_by_display_name(crafting_products),
        'crafting_ingredients': sort_by_display_name(crafting_ingredients),
        'recipes': recipes,
    })
    return \
f"""/* This file is auto-generated! */

/** @import {{Fraction}} from "mathjs" */

/**
 * @typedef {{string}} GameObjectId
 * @typedef {{Object.<string, Fraction>}} CountedItems
 * @typedef {{{{
 *      name: GameObjectId,
 *      products: CountedItems,
 *      ingredients: CountedItems,
 *      duration: Fraction,
 *      is_alternate: boolean,
 *      produced_in: string[]
 * }}}} Recipe
 *
 * @typedef {{{{
 *      id: string,
 *      name: string,
 *      recipes: GameObjectId[],
 *      form: "SOLID" | "LIQUID" | "GAS"
 * }}}} CraftingObject
 */

/**
 * @type {{{{
 *      crafting_objects: Object.<string, CraftingObject>,
 *      crafting_products: GameObjectId[],
 *      crafting_ingredients: GameObjectId[],
 *      recipes: Object.<string, Recipe>
 *  }}}}
 */
const game_data = {json.dumps(data, indent=4, sort_keys=True)};
export default game_data;
"""


if __name__ == '__main__':
    data = main()
    with open(path.join(path.dirname(__file__), '..', 'website', 'scripts', 'GameData.auto.mjs'), 'w') as f:
        f.write(data)
