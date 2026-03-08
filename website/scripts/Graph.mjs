// @ts-check
import CacheManager from "./CacheManager.mjs"
import {any, filter} from "./Utils.mjs"

/** @template NodeData, EdgeData */
export class Graph {
    constructor() {
        /** @type {Set<Node<NodeData, EdgeData>>} */
        this._nodes = new Set();
        this._cache_manager = new CacheManager();

        this.getRootsOrLeaves = this._cache_manager.cacheFunc(
            /** 
             * @this {Graph<NodeData, EdgeData>}
             * @param {boolean} roots
             */
            function(roots) {
                return [...this._getRootsOrLeaves(roots)];
            }
        );

        this.smartBreadthFirst = this._cache_manager.cacheFunc(
            /** 
             * @this {Graph<NodeData, EdgeData>}
             * @param {boolean} from_top
             */
            function(from_top) {
                return [...this._smartBreadthFirst(from_top)];
            }
        );
    }

    _purgeCache() {
        this._cache_manager.purge();
    }

    /**
     * @param {NodeData} data
     * @returns {Node<NodeData, EdgeData>}
     */
    createNode(data) {
        const result = new Node(this, data);
        return result;
    }

    /** @returns {IterableIterator<Node<NodeData, EdgeData>>} */
    *nodes() {
        yield* this._nodes;
    }

    /** @returns {IterableIterator<Edge<NodeData, EdgeData>>} */
    *links() {
        for (const node of this._nodes) {
            yield* node._flinks;
        }
    }

    /**
     * @private
     * @param {boolean} roots 
     * @returns {IterableIterator<Node<NodeData, EdgeData>>}
     */
    *_getRootsOrLeaves(roots) {
        // A node is a root if it has no blinks.
        // A node is a leaf if it has no flinks.
        const down_links = roots ? '_blinks' : '_flinks';
        yield* filter(this._nodes, (node) => (0 == node[down_links].size));
    }

    /**
     * Smart Breadth-First iteration for DAGs.
     * Yields a node only after all its up links have been yielded.
     * @private
     * @param {boolean} from_top 
     * @returns {IterableIterator<Node<NodeData, EdgeData>>}
     */
    *_smartBreadthFirst(from_top) {
        const [down_links, down_link, up_links, up_link] =
            from_top
            ? ['_flinks', 'target', '_blinks', 'source']
            : ['_blinks', 'source', '_flinks', 'target'];

        let current_nodes = new Set(this.getRootsOrLeaves(from_top));

        /** @type {Set<Node<NodeData, EdgeData>>} */
        let visited_nodes = new Set();

        while (true) {
            /** @type {Set<Node<NodeData, EdgeData>>} */
            let next_round_nodes = new Set();
        
            for (const node of current_nodes) {
                if (visited_nodes.has(node))
                    continue;
        
                // If we still haven't visited ALL the up links, skip this node for now.
                // We will have more chances to visit it in the required state.
                if (any(node[up_links], (edge) => !visited_nodes.has(edge[up_link])))
                    continue;

                yield node;
        
                visited_nodes.add(node);

                next_round_nodes = next_round_nodes.union(new Set(Array.from(node[down_links], (edge) => edge[down_link])));
            }
        
            next_round_nodes = next_round_nodes.difference(visited_nodes);
            if (0 == next_round_nodes.size)
                break;
        
            current_nodes = next_round_nodes
        }
    }
}

/** @template NodeData, EdgeData */
export class Edge {
    /**
     * @param {Node<NodeData, EdgeData>} source 
     * @param {Node<NodeData, EdgeData>} target 
     * @param {EdgeData} data 
     */
    constructor(source, target, data) {
        this.source = source;
        this.target = target;
        this.data = data;

        source._flinks.add(this);
        target._blinks.add(this);

        source.graph._purgeCache();
    }
}

/** @template NodeData, EdgeData */
export class Node {
    /**
     * @param {Graph<NodeData, EdgeData>} graph 
     * @param {NodeData} data 
     */
    constructor(graph, data) {
        this.graph = graph;
        this.data = data;

        /** @type {Set<Edge<NodeData, EdgeData>>} */
        this._flinks = new Set();

        /** @type {Set<Edge<NodeData, EdgeData>>} */
        this._blinks = new Set();

        graph._nodes.add(this);

        graph._purgeCache();
    }

    /**
     * @param {Node<NodeData, EdgeData>} node 
     * @param {EdgeData} link_data 
     */
    add_flink(node, link_data) { return new Edge(this, node, link_data); }

    /**
     * @param {Node<NodeData, EdgeData>} node 
     * @param {EdgeData} link_data 
     */
    add_blink(node, link_data) { return new Edge(node, this, link_data); }

    /** @returns {IterableIterator<[Node<NodeData, EdgeData>, EdgeData]>} */
    *flinks() {
        for (const flink of this._flinks) {
            yield [flink.target, flink.data];
        }
    }

    /** @returns {IterableIterator<[Node<NodeData, EdgeData>, EdgeData]>} */
    *blinks() {
        for (const blink of this._blinks) {
            yield [blink.source, blink.data];
        }
    }
}

