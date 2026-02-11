// Docs:
// https://js.cytoscape.org/
// https://tom-select.js.org/docs/

import {game_data} from "./game_data.auto.js"

console.debug(game_data);

const graph = cytoscape({
  container: document.getElementById('graph'),

  elements: [
    // Nodes
    { data: { id: 'A', label: 'A' } },
    { data: { id: 'B', label: 'B' } },
    { data: { id: 'C', label: 'C' } },
    { data: { id: 'D', label: 'D' } },

    // Edges
    { data: { source: 'A', target: 'B' } },
    { data: { source: 'A', target: 'C' } },
    { data: { source: 'B', target: 'D' } },
    { data: { source: 'C', target: 'D' } },
  ],

  style: [ // the stylesheet for the graph
    {
      selector: 'node',
      style: {
        'background-color': '#666',
        'label': 'data(id)'
      }
    },

    {
      selector: 'edge',
      style: {
        'width': 3,
        'line-color': '#ccc',
        'target-arrow-color': '#ccc',
        'target-arrow-shape': 'triangle',
        'curve-style': 'bezier'
      }
    }
  ],

  layout: {
    name: 'breadthfirst',
    directed: true,
    padding: 30
  }
});

// Hover behavior
graph.on('mouseover', 'node', evt => {
  evt.target.style('background-color', '#22c55e');
  console.debug("Over");
});

graph.on('mouseout', 'node', evt => {
    evt.target.style('background-color', '#4f46e5');
    console.debug("Out");
});


let recipeSelect = document.getElementById('recipeSelect');
let recipeSelectTom = new TomSelect(
  recipeSelect,
  {
    searchField: "text",
    options: game_data.craftable_objects.map((obj_name) => ({value: obj_name, text: game_data.objects[obj_name].Name})),
    maxOptions: null,
    placeholder: "Select an item..."
  }
);
