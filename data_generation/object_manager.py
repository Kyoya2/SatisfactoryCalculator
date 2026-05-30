class ObjectManager:
    """
    The purpose of this class is to ensure backwards compatibility between numeric IDs of different objects in the
    website. This is done by maintaining a file that contain the string object IDs of all objects currently used
    in the website.
    Backwards compatibility will be maintained as long as:
    1. Lines in the file will never be reordered.
    2. Lines in the file will never be deleted, even if the object is no longer in use by the website.
    3. New lines will always be added to the *END* of the file.
    """
    def __init__(self, known_objects_file_name):
        with open(known_objects_file_name, "r") as f:
            self._known_objects = [line.rstrip() for line in f]

        self._known_object_index = {obj_id: i for i, obj_id in enumerate(self._known_objects)}
        self._unknown_objects = []

    def lookup_obj_index(self, obj_id):
        result = self._known_object_index.get(obj_id)
        if result is None:
            result = len(self._known_objects)
            self._known_objects.append(obj_id)
            self._unknown_objects.append(obj_id)
            self._known_object_index[obj_id] = result

        return result

    def finalize(self):
        """
        Throws an exception if an unknown object ID was encountered by this class.
        Recommended to call this after using all needed IDs.
        """
        if 0 != len(self._unknown_objects):
            raise Exception(
                f"Detected {len(self._unknown_objects)} new objects, please add them to the end of the known objects file:\n" +
                "\n".join(self._unknown_objects)
            )
