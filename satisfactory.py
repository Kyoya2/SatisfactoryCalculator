import functools
import math
import re
import json
import string
from enum import Enum
from typing import NamedTuple
from fractions import Fraction
from dataclasses import dataclass

from graph import Graph, Node


NATIVECLASS_PREFIX = r"/Script/CoreUObject.Class'/Script/FactoryGame."
ITEM_REGEX = re.compile(r"""\(ItemClass="[\/\w\.']+\.(\w+)'",Amount=(\d+)\)""")


class ConveyorBeltType(Enum):
    Mk1 = 60
    Mk2 = 120
    Mk3 = 270


BEST_UNLOCKED_CONVEYOR_BELT_TYPE = ConveyorBeltType.Mk2


# Corresponds to the "ClassName" element in the JSON file
GameObjectName = str


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


def to_mermaid(all_classes, graph: Graph):
    nodes = []
    links = []

    def visit_node(node):
        nonlocal all_classes, nodes
        item = all_classes[node.data.item_name]
        nodes.append(f"""{node.data.item_name}["{item['mDisplayName']}<br/>Duration={node.data.production_duration}<br/>Total required={node.data.total_required_amount}<br/>Machined required={node.data.total_machines_required}"]""")

    def visit_link(ingredient_node, product_node, amount):
        links.append(f"{ingredient_node.data.item_name}--{amount}-->{product_node.data.item_name}")

    graph.visit(visit_node, visit_link)

    return \
f"""
flowchart-elk TB
{'\n'.join(nodes + links)}
"""


def generate_recipe_schematic(all_classes, item_name, trivial_resources=tuple()):
    graph = Graph()
    nodes: dict[str, Node] = {}

    def _generate_recipe_schematic(item_name: GameObjectName):
        nonlocal trivial_resources, graph, nodes, all_classes

        if (node := nodes.get(item_name)) is not None:
            return node

        obj = all_classes[item_name]
        if 'recipes' not in obj:
            # No recipes
            return None
        
        # Use the first non-alternate recipe
        recipe = next((recipe for recipe in obj['recipes'] if not recipe.is_alternate), None)
        if recipe is None:
            # No non-alternate recipes
            return None

        node = graph.create_node(ItemDescriptor(item_name, recipe.duration, 0, 0))
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
            if any(flink._target not in visited_nodes for flink in node.flinks()):
                continue

            visited_nodes.add(node)

            for flink in node.flinks():
                node.data.total_required_amount += flink._target.data.total_required_amount * flink.data

            single_machine_production = cycle_duration / node.data.production_duration
            node.data.total_machines_required = node.data.total_required_amount / single_machine_production
            machines_required_denominators.add(Fraction(node.data.total_machines_required).limit_denominator().denominator)

            next_round_nodes |= {blink._source for blink in node.blinks()}

        next_round_nodes -= visited_nodes
        if 0 == len(next_round_nodes):
            break

        current_nodes = next_round_nodes

    # Normalize such that the number of required machines is whole for every item
    lcm = math.lcm(*machines_required_denominators)
    if lcm != 1:
        for node in nodes.values():
            node.data.total_required_amount *= lcm
            node.data.total_machines_required *= lcm

    return root_node


def main():
    with open(r"C:\Program Files (x86)\Steam\steamapps\common\Satisfactory\CommunityResources\Docs\en-US.json", 'rb') as f:
        data = json.load(f)

    all_classes = {}
    grouped_classes = {}

    for item in data:
        assert item['NativeClass'].startswith(NATIVECLASS_PREFIX)
        native_class = item['NativeClass'][len(NATIVECLASS_PREFIX):].rstrip("'")

        current_group_classes = {}
        for cls in item['Classes']:
            assert cls['ClassName'] not in all_classes
            all_classes[cls['ClassName']] = cls
            current_group_classes[cls['ClassName']] = cls

        grouped_classes[native_class] = current_group_classes
    
    for recipe in grouped_classes['FGRecipe'].values():
        products = ITEM_REGEX.findall(recipe['mProduct'])
        if 1 != len(products):
            assert 2 == len(products)
            continue

        product_name = products[0][0]
        product_amount = int(products[0][1])

        ingredients = ITEM_REGEX.findall(recipe['mIngredients'])
        ingredients = [CountedItem(item_name, int(amount)/product_amount) for item_name, amount in ingredients]

        duration = float(recipe['mManufactoringDuration'])

        # Factor in the time it takes to load the ingredients onto the constructor/assembler.
        # Assuming that ingredients are loaded into the machine as a product is being produced, this
        # makes a difference only if the load time is higher than the production
        max_amount_ingredient = max(ingredients, default=CountedItem('', 0), key=lambda ingredient: ingredient.amount).amount
        ingredient_load_duration = max_amount_ingredient * (60 / BEST_UNLOCKED_CONVEYOR_BELT_TYPE.value)
        duration = max(duration, ingredient_load_duration)

        duration /= product_amount
        
        is_alternate = recipe['mDisplayName'].startswith('Alternate: ')

        product_obj = all_classes[product_name]
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

    #root = generate_recipe_schematic(all_classes, "Desc_SpaceElevatorPart_1_C", trivial_resources=("Desc_IronIngot_C", "Desc_CopperIngot_C"))
    root = generate_recipe_schematic(all_classes, "Desc_Rotor_C", trivial_resources=("Desc_IronIngot_C", "Desc_CopperIngot_C"))

    print(to_mermaid(all_classes, root._graph))


if __name__ == '__main__':
    main()
