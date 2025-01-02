from cryptography.hazmat.primitives import padding
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
from base64 import b64decode, b64encode
from datetime import datetime, timezone
import secrets


def decrypt_token(api_token: str, key: bytes) -> datetime:
    cypher_text = b64decode(api_token)

    iv = cypher_text[:16]
    data = cypher_text[16:]

    decrypter = Cipher(
        algorithms.AES(key),
        modes.CBC(iv),
    ).decryptor()

    unpadder = padding.PKCS7(128).unpadder()

    decrypted_data = unpadder.update(decrypter.update(data))

    decrypted_data += unpadder.finalize()

    text = decrypted_data.decode()
    _, _, time_stamp, _ = text.split("&")

    date_time = datetime.fromisoformat(time_stamp)
    # make the time zone UTC
    date_time = date_time.astimezone(timezone.utc)
    return date_time


def encrypt_token(
    platform: str, request_type: str, timestamp: datetime | str, nonce: str, key: str
) -> str:
    if isinstance(timestamp, str):
        timestamp = datetime.fromisoformat(timestamp)

    text = f"{platform}&{request_type}&{timestamp}&{nonce}"
    pad_er = padding.PKCS7(128).padder()
    padded_data = pad_er.update(text.encode())
    padded_data += pad_er.finalize()

    iv = b"\x00" * 16

    encryptor = Cipher(algorithms.AES(key.encode()), modes.CBC(iv)).encryptor()

    encrypted_data = encryptor.update(padded_data) + encryptor.finalize()

    return b64encode(iv + encrypted_data).decode()


# Test
if __name__ == "__main__":
    test_key = ""
    print("test_key: ", test_key)
    test_platform = "web"
    test_request_type = "GET"
    test_timestamp = datetime.now(tz=timezone.utc)
    # test_timestamp = 'Wed, 03 Apr 2024 15:33:39'
    # test_timestamp = '2024-04-03 11:33:39+00:00'
    test_nonce = secrets.token_hex(16)

    token = encrypt_token(
        test_platform, test_request_type, test_timestamp, test_nonce, test_key
    )
    print("token: ", token)
    # print('[][]['*12)
    # print(f'={token}=')
    # print('[][][' * 12)

    decrypt_datetime = decrypt_token(token, test_key.encode())
    print("decoded datetime: ", decrypt_datetime)
    #
    # if isinstance(test_timestamp, str):
    #     test_timestamp = datetime.fromisoformat(test_timestamp)
    #     test_timestamp = test_timestamp.astimezone(timezone.utc)
    #
    # print(datetime.now(tz=timezone.utc))
    # print(decrypt_datetime)
    # print(test_timestamp)
    #
    # assert decrypt_datetime == test_timestamp
    # print('Passed')
    #
    # # check it decrypt_datetime is with in the last 5 minutes
    # print("diff: ", (datetime.now(tz=timezone.utc) - decrypt_datetime).total_seconds())
    # assert 0 < (datetime.now(tz=timezone.utc) - decrypt_datetime).total_seconds() < 300
    # print('Passed')
