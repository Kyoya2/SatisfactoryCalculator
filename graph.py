from typing import Callable


class Graph:
    def __init__(self):
        self._nodes: set['Node'] = set()

    def create_node(self, data):
        return Node(self, data)

    def visit(
        self,
        visit_node: Callable[['Node'], None],
        visit_link: Callable[['Node', 'Node', object], None]
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


class Link:
    def __init__(self, source: 'Node', target: 'Node', data):
        self._source = source
        self._target = target
        self.data = data

        source._flinks.add(self)
        target._blinks.add(self)

    def unlink(self):
        self._source._flinks.remove(self)
        self._target._blinks.remove(self)


class Node:
    def __init__(self, graph: Graph, data):
        self._graph = graph
        self._flinks: set[Link] = set()
        self._blinks: set[Link] = set()
        self.data = data

        self._graph._nodes.add(self)

    def add_flink(self, node: 'Node', link_data):
        self._add_link(node, link_data, True)

    def add_blink(self, node: 'Node', link_data):
        self._add_link(node, link_data, False)

    def flinks(self):
        yield from self._flinks

    def blinks(self):
        yield from self._blinks

    def remove(self):
        self._remove_links(self._flinks)
        self._remove_links(self._blinks)
        self._graph._nodes.remove(self)

    @staticmethod
    def _remove_links(links: set[Link]):
        while 0 != len(links):
            links.pop().unlink()

    def _add_link(self, node: 'Node', link_data, is_flink) -> Link:
        assert node._graph == self._graph, "Can't add node from another graph"
        if is_flink:
            link = Link(self, node, link_data)
        else:
            link = Link(node, self, link_data)

        return link
