import os
import sys
import zstandard
from binascii import unhexlify
from cryptography.hazmat.primitives.ciphers.aead import AESGCM


def encrypt_game_data_file(data_file_path: str, out_file_path: str, key_hex: str):
    with open(data_file_path, 'rb') as f:
        data = f.read()

    # Compress
    data = zstandard.compress(data, 12)

    # Encrypt
    aes_gcm = AESGCM(unhexlify(key_hex))
    nonce = os.urandom(12)

    data = aes_gcm.encrypt(nonce, data, None)

    with open(out_file_path, 'wb') as f:
        f.write(nonce)
        f.write(data)


if __name__ == '__main__':
    data_file_path, out_file_path, key_hex = sys.argv[1:]
    encrypt_game_data_file(data_file_path, out_file_path, key_hex)
