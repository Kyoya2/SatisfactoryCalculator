from typing import TypeAlias, TypeVar, Generator

from object_manager import ObjectManager

# Corresponds to the "ClassName" element in the JSON file.
# For example: "Desc_SpaceElevatorPart_1_C".
GameObjectId: TypeAlias = str

T = TypeVar("T")


class GameObjectLookup[T]:
    def __init__(self, obj_manager: ObjectManager):
        self._id_to_idx: dict[GameObjectId, int] = {}
        self._idx_to_obj: dict[int, T] = {}
        self._obj_manager = obj_manager

    def get_idx(self, obj_id: GameObjectId) -> int:
        idx = self._id_to_idx.get(obj_id)
        if idx is None:
            idx = self._obj_manager.lookup_obj_index(obj_id)

        return idx

    def finalize(self) -> 'GameObjectLookup[T]':
        """
        Must be called when finished adding all items to the lookup.
        Will compact the IDs to form a sequence.
        """
        assert len(self._idx_to_obj) == len(self._id_to_idx)
        idx_map = {idx: i for i, idx in enumerate(sorted(self._idx_to_obj.keys()))}
        self._id_to_idx = {obj_id: idx_map[idx] for obj_id, idx in self._id_to_idx.items()}
        self._idx_to_obj = {idx_map[idx]: obj for idx, obj in self._idx_to_obj.items()}
        return self

    def keys(self):
        return self._id_to_idx.keys()

    def values(self):
        return self._idx_to_obj.values()

    def items(self) -> Generator[tuple[GameObjectId, T], None, None]:
        for obj_id, idx in self._id_to_idx.items():
            yield obj_id, self[idx]

    def update(self, values: dict[GameObjectId | int, T]):
        for key, obj in values.items():
            self[key] = obj

    def __getitem__(self, key: GameObjectId | int) -> T:
        if isinstance(key, GameObjectId):
            return self[self._id_to_idx[key]]
        elif isinstance(key, int):
            return self._idx_to_obj[key]
        else:
            raise TypeError()

    def __setitem__(self, key: GameObjectId | int, value: T) -> None:
        if isinstance(key, GameObjectId):
            idx = self.get_idx(key)
            self[idx] = value
            self._id_to_idx[key] = idx
        elif isinstance(key, int):
            self._idx_to_obj[key] = value
        else:
            raise TypeError()

    def __len__(self) -> int:
        return len(self._id_to_idx)
