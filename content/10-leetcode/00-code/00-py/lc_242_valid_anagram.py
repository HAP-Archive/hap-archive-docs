import pytest

def is_valid_anagram(s: str, t: str) -> bool:
    pass


@pytest.mark.parametrize(
    ("s", "t", "expected"),
    (
        ("anagram", "nagaram", True),
        ("rat", "car", False),
        ("listen", "silent", True),
        ("hello", "world", False),
        ("aabbcc", "abcabc", True),
    )
)
def test_is_valid_anagram(s: str, t: str, expected: bool) -> None:
    assert is_valid_anagram(s=s, t=t) == expected


if __name__ == "__main__":
    test_is_valid_anagram()
