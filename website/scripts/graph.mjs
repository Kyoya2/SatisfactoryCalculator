// @ts-check

/** @template NodeData, EdgeData */
export class Graph {
    constructor() {
        /** @type {Set<Node<NodeData, EdgeData>>} */
        this._nodes = new Set();
    }

    /**
     * @param {NodeData} data
     * @returns {Node<NodeData, EdgeData>}
     */
    create_node(data) {
        return new Node(this, data);
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

