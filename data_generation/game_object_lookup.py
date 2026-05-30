# Corresponds to the "ClassName" element in the JSON file.
# For example: "Desc_SpaceElevatorPart_1_C".
from typing import TypeAlias

GameObjectId: TypeAlias = str


class GameObjectLookup:
    def __init__(self, init: dict[tuple[int, GameObjectId], object]):
        self._id_to_idx: dict[GameObjectId, int] = {}
        self._idx_to_obj: dict[int, object] = {}

        for (idx, obj_id), obj in init.items():
            self._id_to_idx[obj_id] = idx
            self._idx_to_obj[idx] = obj

    def get_idx(self, obj_id: GameObjectId) -> int:
        return self._id_to_idx[obj_id]

    def __getitem__(self, key: GameObjectId | int) -> object:
        if isinstance(key, GameObjectId):
            return self[self._id_to_idx[key]]
        elif isinstance(key, int):
            return self._idx_to_obj[key]
        else:
            raise TypeError()

    def __setitem__(self, key: GameObjectId | int, value: object) -> None:
        if isinstance(key, GameObjectId):
            self[self.get_idx(key)] = value
        elif isinstance(key, int):
            self._idx_to_obj[key] = value
        else:
            raise TypeError()

    def __len__(self) -> int:
        return len(self._id_to_idx)
