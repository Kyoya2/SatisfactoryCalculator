import json
from os import path
from satisfactory import SatisfactoryCalculator, Graph, ConveyorBeltType


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


def generate_game_data(calculator: SatisfactoryCalculator):
    with open(path.join(path.dirname(__file__), '..', 'website', 'scripts', 'game_data.auto.js'), 'w') as f:
        f.write(f"export const game_data = {json.dumps(calculator.as_dict())};")


def main():
    calculator = SatisfactoryCalculator()

    generate_game_data(calculator)
    return

    #root = calculator.generate_recipe_schematic(all_classes, "Desc_SpaceElevatorPart_1_C", trivial_resources=("Desc_IronIngot_C", "Desc_CopperIngot_C"))
    #root = calculator.generate_recipe_schematic("Desc_Rotor_C", ConveyorBeltType.Mk2, trivial_resources=("Desc_IronIngot_C", "Desc_CopperIngot_C"))
    root = calculator.generate_recipe_schematic("Desc_IronPlateReinforced_C", ConveyorBeltType.Mk2, trivial_resources=("Desc_IronIngot_C", "Desc_CopperIngot_C"))

    print(to_mermaid(calculator._all_objects, root._graph))


if __name__ == '__main__':
    main()
