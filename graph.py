from typing import Callable, TypeVar, Generic, Iterator


TNode = TypeVar("TNode")
TLink = TypeVar("TLink")


class Graph(Generic[TNode, TLink]):
    def __init__(self):
        self._nodes: set['Node[TNode, TLink]'] = set()

    def create_node(self, data: TNode):
        return Node(self, data)

    def visit(
        self,
        visit_node: Callable[['Node[TNode, TLink]'], None],
        visit_link: Callable[['Node[TNode, TLink]', 'Node[TNode, TLink]', TLink], None]
    ):
        visited_nodes = set()
        visited_links = set()

        def _visit(node):
            nonlocal visited_nodes, visited_links, visit_node, visit_link
            if node in visited_nodes:
                return

            visited_nodes.add(node)
            visit_node(node)

            for links in (node._flinks, node._blinks):
                for link in links:
                    if link in visited_links:
                        continue

                    visited_links.add(link)

                    # Make sure to visit nodes before visiting the link
                    _visit(link._source)
                    _visit(link._target)

                    visit_link(link._source, link._target, link.data)

        for node in self._nodes:
            _visit(node)


class Link(Generic[TNode, TLink]):
    def __init__(self, source: 'Node[TNode, TLink]', target: 'Node[TNode, TLink]', data: TLink):
        self._source = source
        self._target = target
        self.data = data

        source._flinks.add(self)
        target._blinks.add(self)

    def unlink(self):
        self._source._flinks.remove(self)
        self._target._blinks.remove(self)


class Node(Generic[TNode, TLink]):
    def __init__(self, graph: Graph[TNode, TLink], data: TNode):
        self._graph = graph
        self._flinks: set[Link[TNode, TLink]] = set()
        self._blinks: set[Link[TNode, TLink]] = set()
        self.data = data

        self._graph._nodes.add(self)

    def add_flink(self, node: 'Node[TNode, TLink]', link_data: TLink):
        self._add_link(node, link_data, True)

    def add_blink(self, node: 'Node[TNode, TLink]', link_data: TLink):
        self._add_link(node, link_data, False)

    def flinks(self) -> Iterator[tuple['Node[TNode, TLink]', TLink]]:
        for flink in self._flinks:
            yield flink._target, flink.data

    def blinks(self) -> Iterator[tuple['Node[TNode, TLink]', TLink]]:
        for blink in self._blinks:
            yield blink._source, blink.data

    def remove(self):
        self._remove_links(self._flinks)
        self._remove_links(self._blinks)
        self._graph._nodes.remove(self)

    @staticmethod
    def _remove_links(links: set[Link]):
        while 0 != len(links):
            links.pop().unlink()

    def _add_link(self, node: 'Node', link_data: TLink, is_flink: bool) -> Link[TNode, TLink]:
        assert node._graph == self._graph, "Can't add node from another graph"
        if is_flink:
            link = Link(self, node, link_data)
        else:
            link = Link(node, self, link_data)

        return link
