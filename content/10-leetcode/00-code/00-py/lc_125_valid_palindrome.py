import re
import pytest


def valid_palindrome(s: str) -> bool:
    s = re.sub(r'[^a-zA-Z0-9]', '', s.lower())
    l, r = 0, len(s) - 1

    while l < r:
        if s[l] != s[r]:
            return False
        l += 1
        r -= 1

    return True


@pytest.mark.parametrize(
    ("s", "expected"),
    (
        ("A man, a plan, a canal: Panama", True),
        ("racecar", True),
        ("Madam In Eden, I'm Adam", True),
        ("Red Roses run no risk, sir, on nurses order.", True)
    )
)
def test_valid_palindrome(s: str, expected: bool) -> None:
    assert valid_palindrome(s=s) == expected


if __name__ == "__main__":
    test_valid_palindrome()
