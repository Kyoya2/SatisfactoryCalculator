import subprocess
from os import path

ROOT = path.dirname(path.dirname(path.abspath(__file__)))

# Generate python protobuf
subprocess.check_call(
    [
        "protoc",
        "--python_out", path.join(ROOT, "data_generation"),
        "game_data_structs.proto"
    ],
    cwd=path.join(ROOT, "protobuf")
)

# Generate JS protobuf
subprocess.check_call(
    [
        "npx.cmd", "pbjs",  # TODO: support running on Docker
        "-t", "static-module",
        "-w", "esm",
        "-o", path.join(ROOT, "website", "scripts", "GameData", "GameDataStructs.auto.js"),
        "--dts",
        "--keep-case",
        "--no-create",
        "--no-verify",
        "--no-convert",
        "--no-delimited",
        "--no-typeurl",
        path.join(ROOT, "protobuf", "game_data_structs.proto")
    ],
    cwd=path.join(ROOT, "website")
)
