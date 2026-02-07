import re
import math
import json
import string
import functools
from enum import Enum
from typing import Any
from typing import NamedTuple
from fractions import Fraction
from dataclasses import dataclass

from graph import Graph, Node


class ConveyorBeltType(Enum):
    Mk1 = 60
    Mk2 = 120
    Mk3 = 270


# Corresponds to the "ClassName" element in the JSON file.
# For example: "Desc_SpaceElevatorPart_1_C".
GameObjectName = str

# Corresponds to the "NativeClass" element in the JSON.
# For example: "FGItemDescriptor".
GameObjectCategoryName = str

# Corresponds to an entry inside the "Classes" member of each top-level entry in the JSON.
# For example:
# {
#   "ClassName": "Desc_AluminumIngot_C",
#   "mDisplayName": "Aluminum Ingot",
#   ...
# }
GameObject = dict[str, Any]


class CountedItem(NamedTuple):
    item_name: GameObjectName
    amount: float

    def __repr__(self):
        return f"{self.item_name} [{self.amount}]"


class Recipe(NamedTuple):
    product_name: GameObjectName
    ingredients: list[CountedItem]
    duration: float
    is_alternate: bool
    recipe_name: GameObjectName


@dataclass
class ItemDescriptor:
    item_name: GameObjectName
    production_duration: float
    total_required_amount: float
    total_machines_required: float


def unique_string_generator(
    first_chars=string.ascii_letters+'_',
    other_chars=string.ascii_letters+'_'+string.digits,
    excluded=tuple()
):
    indices = [0]
    while True:
        result = ''.join([first_chars[indices[0]]] + [other_chars[i] for i in indices[1:]])

        if result not in excluded:
            yield result

        # Advance indices
        for i in range(len(indices)-1, -1, -1):
            n = len(first_chars) if i == 0 else len(other_chars)
            indices[i] += 1
            if indices[i] == n:
                # Carry
                indices[i] = 0
            else:
                break
        else:
            # Carry reached end, extend string
            indices.append(0)


def to_mermaid(all_objects, graph: Graph):
    nodes = []
    links = []

    def visit_node(node):
        nonlocal all_objects, nodes
        item = all_objects[node.data.item_name]
        nodes.append(f"""{node.data.item_name}["{item['mDisplayName']}<br/>Duration={node.data.production_duration}<br/>Total required={node.data.total_required_amount}<br/>Machined required={node.data.total_machines_required}"]""")

    def visit_link(ingredient_node, product_node, amount):
        links.append(f"{ingredient_node.data.item_name}--{amount}-->{product_node.data.item_name}")

    graph.visit(visit_node, visit_link)

    return \
f"""
flowchart-elk TB
{'\n'.join(nodes + links)}
"""


class SatisfactoryCalculator:
    _COMMON_NATIVECLASS_PREFIX = r"/Script/CoreUObject.Class'/Script/FactoryGame."
    _RECIPE_OBJECT_REGEX = re.compile(r"""\(ItemClass="[/\w.']+\.(\w+)'",Amount=(\d+)\)""")

    def __init__(
        self,
        doc_file_path=r"C:\Program Files (x86)\Steam\steamapps\common\Satisfactory\CommunityResources\Docs\en-US.json"
    ):
        with open(doc_file_path, 'rb') as f:
            data = json.load(f)

        self._all_objects: dict[GameObjectName, GameObject]= {}
        self._categorized_objects: dict[GameObjectCategoryName, dict[GameObjectName, GameObject]] = {}

        for game_object_category in data:
            assert game_object_category['NativeClass'].startswith(self._COMMON_NATIVECLASS_PREFIX)
            native_class = game_object_category['NativeClass'][len(self._COMMON_NATIVECLASS_PREFIX):].rstrip("'")

            current_group_classes = {}
            for game_object in game_object_category['Classes']:
                assert game_object['ClassName'] not in self._all_objects
                self._all_objects[game_object['ClassName']] = game_object
                current_group_classes[game_object['ClassName']] = game_object

            self._categorized_objects[native_class] = current_group_classes

        self._process_recipes()

    def generate_recipe_schematic(
            self,
            item_name: GameObjectName,
            best_unlocked_conveyor_belt_type: ConveyorBeltType,
            trivial_resources=tuple(),
            normalize_required_machine_amounts=True
    ):
        graph = Graph()
        nodes: dict[str, Node] = {}

        def _generate_recipe_schematic(item_name: GameObjectName):
            nonlocal trivial_resources, graph, nodes

            if (node := nodes.get(item_name)) is not None:
                return node

            obj = self._all_objects[item_name]
            if 'recipes' not in obj:
                # No recipes
                return None

            # Use the first non-alternate recipe
            recipe = next((recipe for recipe in obj['recipes'] if not recipe.is_alternate), None)
            if recipe is None:
                # No non-alternate recipes
                return None

            # Factor in the time it takes to load the ingredients onto the constructor/assembler.
            # Assuming that ingredients are loaded into the machine as a product is being produced, this
            # makes a difference only if the load time is higher than the production
            max_amount_ingredient = max(ingredient.amount for ingredient in recipe.ingredients)
            ingredient_load_duration = max_amount_ingredient * (60 / best_unlocked_conveyor_belt_type.value)
            factored_recipe_duration = max(recipe.duration, ingredient_load_duration)

            node = graph.create_node(ItemDescriptor(item_name, factored_recipe_duration, 0, 0))
            nodes[item_name] = node

            if item_name not in trivial_resources:
                for ingredient in recipe.ingredients:
                    ingredient_node = _generate_recipe_schematic(ingredient.item_name)
                    node.add_blink(ingredient_node, ingredient.amount)

            return node

        root_node = _generate_recipe_schematic(item_name)
        root_node.data.total_required_amount = 1

        # Fill the "total_required_amount" member of each node
        # Requires BFS iteration, since this number can be determined for node A
        # only after it has been determined for ALL its children.
        cycle_duration = root_node.data.production_duration

        current_nodes = {root_node}
        visited_nodes = set()
        machines_required_denominators = set()
        while True:
            next_round_nodes = set()
            for node in current_nodes:
                if node in visited_nodes:
                    continue

                # If we still haven't visited ALL the flinks, skip this node for now.
                # We will have more chances to visit it in the required state.
                if any(child_node not in visited_nodes for child_node, link_data in node.flinks()):
                    continue

                visited_nodes.add(node)

                for child_node, link_data in node.flinks():
                    node.data.total_required_amount += child_node.data.total_required_amount * link_data

                single_machine_production = cycle_duration / node.data.production_duration
                node.data.total_machines_required = node.data.total_required_amount / single_machine_production
                machines_required_denominators.add(Fraction(node.data.total_machines_required).limit_denominator().denominator)

                next_round_nodes |= {parent_node for parent_node, link_data in node.blinks()}

            next_round_nodes -= visited_nodes
            if 0 == len(next_round_nodes):
                break

            current_nodes = next_round_nodes

        if normalize_required_machine_amounts:
            lcm = math.lcm(*machines_required_denominators)
            if lcm != 1:
                for node in nodes.values():
                    node.data.total_required_amount *= lcm
                    node.data.total_machines_required *= lcm

        return root_node

    def _process_recipes(self):
        for recipe in self._categorized_objects['FGRecipe'].values():
            parsed_ingredients = self._RECIPE_OBJECT_REGEX.findall(recipe['mIngredients'])
            full_duration = float(recipe['mManufactoringDuration'])
            is_alternate = recipe['mDisplayName'].startswith('Alternate: ')

            for product_name, product_amount in self._RECIPE_OBJECT_REGEX.findall(recipe['mProduct']):
                product_amount = int(product_amount)

                ingredients = [CountedItem(item_name, int(amount) / product_amount) for item_name, amount in parsed_ingredients]
                duration = full_duration / product_amount

                product_obj = self._all_objects[product_name]
                recipes = product_obj.get('recipes')
                if recipes is None:
                    recipes = []
                    product_obj['recipes'] = recipes

                recipes.append(
                    Recipe(
                        product_name,
                        ingredients,
                        duration,
                        is_alternate,
                        recipe['ClassName']
                    )
                )

def main():
    calculator = SatisfactoryCalculator()

    #root = calculator.generate_recipe_schematic(all_classes, "Desc_SpaceElevatorPart_1_C", trivial_resources=("Desc_IronIngot_C", "Desc_CopperIngot_C"))
    root = calculator.generate_recipe_schematic("Desc_Rotor_C", ConveyorBeltType.Mk2, trivial_resources=("Desc_IronIngot_C", "Desc_CopperIngot_C"))

    print(to_mermaid(calculator._all_objects, root._graph))


if __name__ == '__main__':
    main()
