import os
import re
import sys
import json
import shutil
from binascii import unhexlify

import requests
import zstandard
from os import path
from fractions import Fraction
from typing import NamedTuple, Any, TypeAlias, Iterable, Callable, TypeVar

from object_manager import ObjectManager
from game_object_lookup import GameObjectLookup, GameObjectId
import game_data_structs_pb2 as game_structs

# TODO: parse from "https://static.satisfactory-calculator.com/data/json/gameData/en-Stable.json"???

WEBSITE_ROOT = path.dirname(path.dirname(__file__))

FORM_MAP = {
    "RF_GAS": game_structs.Form.Gas,
    "RF_LIQUID": game_structs.Form.Liquid,
    "RF_SOLID": game_structs.Form.Solid
}


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

T = TypeVar('T')


class Recipe(NamedTuple):
    name: str
    products: CountedItems
    ingredients: CountedItems
    duration: Fraction
    is_alternate: bool
    produced_in: GameObjectId


class CraftingObject(NamedTuple):
    id: GameObjectId
    name: str
    recipes: list[GameObjectId]
    form: str


class Building(NamedTuple):
    id: GameObjectId
    name: str
    generates_power: bool
    power_consumption: Fraction            # Base power consumption (MW)
    speed_power_exponent: Fraction         # Power consumption exponent of under/overclocking
    production_power_exponent: Fraction    # Power consumption exponent of overslooping
    num_sloop_slots: int                # Max number of sloops that can be installed in the machine


class SatisfactoryParser:
    _COMMON_OBJECT_CATEGORY_NAME_PREFIX = r"/Script/CoreUObject.Class'/Script/FactoryGame."
    _CRAFTING_OBJ_LIST_REGEX = re.compile(r"""\(ItemClass=\".+?\.([^']+)'\",Amount=(\d+)\)""")
    _OBJECT_NAME_REGEX = re.compile(r"^([a-zA-Z\d]+)_(.+)_C$")
    _CAMEL_CASE_REGEX = re.compile(r"([a-z])([A-Z])")
    _ICON_STRING_REGEX = re.compile(r"Texture2D /Game/(.*(\w+))\.\2")
    _PRODUCED_IN_REGEX = re.compile(r'\"[^,]+\.(\w+)\"')
    _ALTERNATE_RECIPE_NAME_PREFIX = "Alternate: "
    _MANUAL_CRAFTING_BUILDINGS = {'BP_BuildGun_C', 'FGBuildGun', 'BP_WorkshopComponent_C', 'BP_WorkBenchComponent_C', 'FGBuildableAutomatedWorkBench', 'Build_AutomatedWorkBench_C'}

    # Some recipes can't really be automated, because they use resources whose collection/production can't be automated.
    # For example, the power shard recipes that use power slugs, or the fabric recipe that uses Mycelia.
    # For this reason, I promote the alternate recipes that CAN be automated to be the main recipes for these items.
    _FORCED_MAIN_RECIPES = {
        "Desc_CrystalShard_C": "Recipe_SyntheticPowerShard_C",
        "Desc_Fabric_C": "Recipe_Alternate_PolyesterFabric_C"
    }

    def __init__(self, game_data: bytes, obj_manager: ObjectManager):
        self._obj_manager = obj_manager
        self._all_objects, self._categorized_objects = self._preprocess_game_data(game_data)
        self._recipes = self._process_recipes()

        self._crafting_ingredients = set()
        self._crafting_products = set()
        for recipe in self._recipes.values():
            self._crafting_ingredients |= set(recipe.ingredients.keys())
            self._crafting_products |= set(recipe.products.keys())

        self._crafting_objects = self._process_crafting_objects()
        self._buildings = self._process_buildings()
        self._trivial_ingredients = self._calculate_trivial_ingredients()

        self._obj_manager.finalize()

    def serialize(self) -> bytes:
        def create_object_list(objs_lookup: GameObjectLookup[T], converter: Callable[[T], object]):
            return [converter(objs_lookup[i]) for i in range(len(objs_lookup))]

        def frac(f: Fraction) -> game_structs.Fraction:
            return game_structs.Fraction(n=f.numerator, d=f.denominator)

        crafting_objects = create_object_list(
            self._crafting_objects,
            lambda obj: game_structs.CraftingObject(
                name=obj.name,
                recipes=[self._recipes.get_idx(recipe_id) for recipe_id in obj.recipes],
                form=FORM_MAP[obj.form]
            )
        )

        recipes = create_object_list(
            self._recipes,
            lambda obj: game_structs.Recipe(
                name=obj.name,
                ingredients={self._crafting_objects.get_idx(oid): frac(amount) for oid, amount in obj.ingredients.items()},
                products={self._crafting_objects.get_idx(oid): frac(amount) for oid, amount in obj.products.items()},
                duration=frac(obj.duration),
                is_alternate=obj.is_alternate,
                produced_in=self._buildings.get_idx(obj.produced_in)
            )
        )

        buildings = create_object_list(
            self._buildings,
            lambda obj: game_structs.Building(
                name=obj.name,
                generates_power=obj.generates_power,
                power_consumption=frac(obj.power_consumption),
                speed_power_exponent=frac(obj.speed_power_exponent),
                production_power_exponent=frac(obj.production_power_exponent),
                num_sloop_slots=obj.num_sloop_slots
            )
        )

        # Generates a list of crafting object IDs, sorted by the display name of the objects
        def gen_sorted_id_list(object_ids: Iterable[GameObjectId]) -> list[int]:
            return [self._crafting_objects.get_idx(obj_id) for obj_id in sorted(object_ids, key=lambda name: self._crafting_objects[name].name)]

        game_data = game_structs.GameData(
            crafting_objects=crafting_objects,
            recipes=recipes,
            buildings=buildings,
            crafting_ingredients=gen_sorted_id_list(self._crafting_ingredients),
            crafting_products=gen_sorted_id_list(self._crafting_products),
            trivial_ingredients=gen_sorted_id_list(self._trivial_ingredients)
        )

        game_data = game_data.SerializeToString()
        uncompressed_size = len(game_data)

        # Note: I used "lzbench" on GitHub to check which level of zstd compresses this data best.
        #       Level 12 yielded the best result for its decompression time. Compression time is
        #       irrelevant, can take an hour for all I care.
        game_data = zstandard.compress(game_data, 12)
        compressed_size = len(game_data)

        print(f"Compressed from {uncompressed_size} bytes to {compressed_size} bytes. Ratio: {compressed_size/uncompressed_size:.2f}")

        return game_data

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
    def process_extracted_assets(self, fmodel_output_dir_path):
        asserts_base_path = path.join(fmodel_output_dir_path, 'Exports', 'FactoryGame', 'Content')
        target_base_path = path.join(path.dirname(__file__), '..', 'website', 'public', 'images', 'game_icons')
        for crafting_obj_id in self._crafting_objects:
            obj = self._all_objects[crafting_obj_id]

            match = self._ICON_STRING_REGEX.match(obj['mSmallIcon'])
            shutil.copyfile(
                path.join(asserts_base_path, f'{match[1]}.png'),
                path.join(target_base_path, f'{crafting_obj_id}.png')
            )

    def download_assets(self):
        with requests.Session() as s:
            r = s.get("https://static.satisfactory-calculator.com/data/json/gameData/en-Stable.json")
            r.raise_for_status()
            data = r.json()

            urls = {}
            for data_group_name in ('itemsData', 'buildingsData', 'toolsData'):
                for obj_id, obj in data[data_group_name].items():
                    urls[obj_id] = obj['image']

            for group_name, objects in (('items', self._crafting_objects), ('buildings', self._buildings)):
                dir_path = path.join(WEBSITE_ROOT, 'website', 'public', 'images', group_name)

                os.makedirs(dir_path, exist_ok=True)

                for obj_id in objects.keys():
                    file_path = path.join(dir_path, f'{objects.get_idx(obj_id)}.png')

                    # skip if exists
                    if path.isfile(file_path):
                        continue

                    url = urls[obj_id]

                    print('Downloading', url)

                    r = s.get(url)
                    r.raise_for_status()

                    with open(file_path, 'wb') as f:
                        f.write(r.content)

    @classmethod
    def _preprocess_game_data(cls, game_data: bytes) -> tuple[
        dict[GameObjectId, GameObject],
        dict[GameObjectCategoryName, dict[GameObjectId, GameObject]]
    ]:
        game_object_categories = json.loads(game_data)

        #
        # Base processing for all objects
        #
        all_objects: dict[GameObjectId, GameObject] = {}
        categorized_objects: dict[GameObjectCategoryName, dict[GameObjectId, GameObject]] = {}
        for game_object_category in game_object_categories:
            assert game_object_category['NativeClass'].startswith(cls._COMMON_OBJECT_CATEGORY_NAME_PREFIX)
            category_name = game_object_category['NativeClass'][len(cls._COMMON_OBJECT_CATEGORY_NAME_PREFIX):].rstrip("'")

            current_category_objects = {}
            for game_object in game_object_category['Classes']:
                game_object['id'] = game_object['ClassName']
                game_object['name'] = cls._get_object_display_name(game_object)
                game_object['native_class'] = category_name

                assert game_object['id'] not in all_objects
                all_objects[game_object['id']] = game_object
                current_category_objects[game_object['id']] = game_object

            categorized_objects[category_name] = current_category_objects

        return all_objects, categorized_objects

    def _process_recipes(self) -> GameObjectLookup[Recipe]:
        recipes = GameObjectLookup[Recipe](self._obj_manager)
        for recipe_id, recipe in self._categorized_objects['FGRecipe'].items():
            # Ignore recipes that can't be automated
            produced_in = set(self._PRODUCED_IN_REGEX.findall(recipe['mProducedIn'])) - self._MANUAL_CRAFTING_BUILDINGS
            if 0 == len(produced_in):
                continue

            assert 1 == len(produced_in)
            produced_in = next(iter(produced_in))

            products = self._parse_crafting_obj_list(recipe['mProduct'])
            ingredients = self._parse_crafting_obj_list(recipe['mIngredients'])

            duration = Fraction(recipe['mManufactoringDuration'])
            is_alternate = recipe['mDisplayName'].startswith('Alternate: ')
            recipe_name = recipe['name']

            # Force build converted recipes to be alternate, and update the recipe name accordingly
            # Unless the name of the product is the name of the recipe, in which case it's the main recipe.
            # For example: time crystal, dark matter residue and excited photonic mater.
            if ("Build_Converter_C" == produced_in) and \
               ((1 != len(products)) or (self._all_objects[next(iter(products.keys()))]['name'] != recipe_name)):
                is_alternate = True
                recipe_name = f"Build converter: {recipe_name}"

            # Force "unpackage" recipes to be alternate
            elif ("Build_Packager_C" == produced_in) and ("Unpackage" in recipe['id']):
                is_alternate = True

            # Strip common prefix for alternate recipes
            if recipe_name.startswith(self._ALTERNATE_RECIPE_NAME_PREFIX):
                recipe_name = recipe_name[len(self._ALTERNATE_RECIPE_NAME_PREFIX):]

            recipes[recipe_id] = Recipe(
                recipe_name,
                products,
                ingredients,
                duration,
                is_alternate,
                produced_in
            )

        fuel_byproduct_recipes = self._generate_fuel_byproduct_recipes()

        # Make sure that autogenerated names for the fuel byproduct recipes don't clash with
        # names of real recipes
        assert 0 == len(fuel_byproduct_recipes.keys() & recipes.keys())
        recipes.update(fuel_byproduct_recipes)

        # Post-process recipes
        for recipe_id, recipe in recipes.items():
            # Note: this relies on the fact that Python dir iteration yields items in the order they were inserted.
            # In this case, the insertion order is also the order in which the items appear in the products list.
            for i, (product_id, amount) in enumerate(recipe.products.items()):
                product_obj = self._all_objects[product_id]
                product_recipes = product_obj.get('recipes')
                if product_recipes is None:
                    product_recipes = []
                    product_obj['recipes'] = product_recipes

                # If the recipe is not an alternate, but this product isn't the first in the list, force it to be alternate.
                is_alt = True if 0 != i else recipe.is_alternate

                # Insert the recipe such that non-alternate recipes always come before the
                # alternate recipes
                if is_alt:
                    product_recipes.append(recipe_id)
                else:
                    product_recipes.insert(0, recipe_id)

        return recipes.finalize()

    # "FGRecipe" doesn't contain byproducts of burning fuel (such as uranium fuel rod -> nuclear waste).
    # This function generates recipes based on other information available in the game data.
    def _generate_fuel_byproduct_recipes(self):
        fuel_byproduct_recipes = {}
        for obj_id, fuel_burner_building in self._all_objects.items():
            if 'mFuel' not in fuel_burner_building:
                continue

            power_production = Fraction(fuel_burner_building['mPowerProduction'])

            for accepted_fuel in fuel_burner_building['mFuel']:
                # Don't care about fuels that don't generate waste
                if not accepted_fuel['mByproduct']:
                    continue

                fuel_obj = self._all_objects[accepted_fuel['mFuelClass']]
                burn_duration = Fraction(fuel_obj['mEnergyValue']) / power_production

                products = {accepted_fuel['mByproduct']: Fraction(accepted_fuel['mByproductAmount'])}
                ingredients = {fuel_obj['id']: Fraction(1)}

                supplemental_resource_id = accepted_fuel['mSupplementalResourceClass']

                # Compute supplemental resource
                if ("True" == fuel_burner_building['mRequiresSupplementalResource']) and \
                   ("" != supplemental_resource_id):
                    ingredients[supplemental_resource_id] = self._normalize_amount(
                        supplemental_resource_id,
                        power_production * Fraction(fuel_burner_building["mSupplementalToPowerRatio"]) * burn_duration
                    )

                dummy_recipe_id = 'Recipe_' + self._OBJECT_NAME_REGEX.match(accepted_fuel['mByproduct'])[2] + '_C'

                fuel_byproduct_recipes[dummy_recipe_id] = Recipe(
                    self._all_objects[accepted_fuel['mByproduct']]['name'],
                    products,
                    ingredients,
                    burn_duration,
                    False,  # TODO: check if there are other ways to generate the byproduct
                    fuel_burner_building['id']
                )

        return fuel_byproduct_recipes

    def _process_buildings(self) -> GameObjectLookup[Building]:
        buildings = GameObjectLookup[Building](self._obj_manager)
        crafting_buildings = set(recipe.produced_in for recipe in self._recipes.values())
        for building_id in crafting_buildings:
            building_obj = self._all_objects[building_id]

            num_sloop_slots = int(building_obj['mProductionShardSlotSize'])
            if num_sloop_slots:
                assert 1 == Fraction(building_obj['mProductionShardBoostMultiplier']) * num_sloop_slots

            if 'mPowerProduction' in building_obj:
                generates_power = True
                power = Fraction(building_obj['mPowerProduction'])
                assert 0 != power
            else:
                generates_power = False
                power = Fraction(building_obj['mPowerConsumption'])

                # For machines that have a fluctuating power consumption, take the max possible value
                if 0 == power:
                    power = Fraction(building_obj['mEstimatedMaximumPowerConsumption'])

            buildings[building_id] = Building(
                building_id,
                building_obj['name'],
                generates_power,
                power,
                Fraction(building_obj['mPowerConsumptionExponent']),
                Fraction(building_obj['mProductionBoostPowerConsumptionExponent']),
                num_sloop_slots
            )

        return buildings.finalize()

    def _process_crafting_objects(self) -> GameObjectLookup[CraftingObject]:
        def _promote_recipe_to_main(recipes, i):
            recipe_id = recipes[i]
            recipe_dict = self._recipes[recipe_id]._asdict()
            recipe_dict['is_alternate'] = False
            self._recipes[recipe_id] = Recipe(**recipe_dict)
            del recipes[i]
            recipes.insert(0, recipe_id)

        crafting_objects = GameObjectLookup[CraftingObject](self._obj_manager)
        for crafting_obj_id in self._crafting_ingredients | self._crafting_products:
            obj = self._all_objects[crafting_obj_id]
            if 'recipes' not in obj:
                obj['recipes'] = []

            main_recipe_id = self._FORCED_MAIN_RECIPES.get(crafting_obj_id)
            if main_recipe_id is not None:
                # If the current item has a forced recipe, promote it to be the main recipe
                recipes = enumerate(obj['recipes'])
                predicate = lambda recipe_id: main_recipe_id == recipe_id
            else:
                # Otherwise, promote the recipe to be the main one only if the name of the recipe
                # is the same as the name of the product
                recipes = enumerate(obj['recipes'][1:], 1)
                predicate = lambda recipe_id: self._recipes[recipe_id].name == obj['name']

            for i, recipe_id in recipes:
                if predicate(recipe_id):
                    _promote_recipe_to_main(obj['recipes'], i)
                    break

            # if '/UI/' not in obj['mSmallIcon']:
            #     print(obj['mSmallIcon'])

            form = obj["mForm"]
            assert form in ("RF_LIQUID", "RF_SOLID", "RF_GAS")

            crafting_objects[crafting_obj_id] = CraftingObject(
                obj['id'],
                obj['name'],
                obj['recipes'],
                form
            )

        return crafting_objects.finalize()

    def _calculate_trivial_ingredients(self) -> set[GameObjectId]:
        # Water is a byproduct of a bunch of things, so it won't be detected by the algorithm below
        trivial_ingredients: set[GameObjectId] = {"Desc_Water_C"}
        for ingredient_id in self._crafting_ingredients:
            ingredient = self._crafting_objects[ingredient_id]
            if (0 == len(ingredient.recipes)) or self._recipes[ingredient.recipes[0]].is_alternate:
                trivial_ingredients.add(ingredient_id)

        # These are wrongfully detected as trivial, since they only have alternate recipes
        trivial_ingredients -= {'Desc_FicsiteIngot_C', 'Desc_DissolvedSilica_C'}

        return trivial_ingredients

    def _parse_crafting_obj_list(self, item_list: str) -> CountedItems:
        items = self._CRAFTING_OBJ_LIST_REGEX.findall(item_list)

        # Make sure that we parsed correctly. Each individual item contains a comma, and there's
        # a comma between every 2 items.
        assert item_list.count(',') == max((len(items) * 2) - 1, 0)

        result = {}
        for item_id, amount in items:
            assert item_id not in result, "Duplicate item appears in list"

            result[item_id] = self._normalize_amount(item_id, Fraction(amount))

        return result

    def _normalize_amount(self, obj_id: str, amount: Fraction) -> Fraction:
        # For some reason, liquid and gas amounts are multiplied by 1000 in the game data
        if self._all_objects[obj_id]['mForm'] in ('RF_LIQUID', 'RF_GAS'):
            amount /= 1000

        return amount

    @classmethod
    def _get_object_display_name(cls, game_object: GameObject) -> str:
        if display_name := game_object.get('mDisplayName', ''):
            return display_name

        # TODO: this yields duplicate names. Need to de-duplicate them by re-adding
        # the prefix on such scenarios

        display_name = game_object['id']
        display_name = cls._OBJECT_NAME_REGEX.match(display_name)
        suffix, display_name = display_name.groups()
        display_name = display_name.replace('_', ' ')
        display_name = cls._CAMEL_CASE_REGEX.sub(r'\1 \2', display_name)

        return display_name


def generate_data_file(game_data: bytes):
    obj_manager = ObjectManager(path.join(WEBSITE_ROOT, 'data_generation', 'known_objects.txt'))
    parser = SatisfactoryParser(game_data, obj_manager)
    parser.download_assets()
    data = parser.serialize()
    with open(path.join(WEBSITE_ROOT, 'website', 'public', 'game_data.bin'), 'wb') as f:
        f.write(data)


def main():
    if 1 == len(sys.argv):
        # Local
        with open(r"C:\Program Files (x86)\Steam\steamapps\common\Satisfactory\CommunityResources\Docs\en-US.json", "rb") as f:
            game_data = f.read()
    else:
        # CI
        from cryptography.hazmat.primitives.ciphers.aead import AESGCM

        encrypted_data_file_path, key_hex = sys.argv[1:]
        with open(encrypted_data_file_path, 'rb') as f:
            nonce = f.read(12)
            game_data = f.read()

        aes_gcm = AESGCM(unhexlify(key_hex))
        game_data = aes_gcm.decrypt(nonce, game_data, None)

        game_data = zstandard.decompress(game_data)

    generate_data_file(game_data)


if __name__ == '__main__':
    main()
