import pytest

def contains_duplicate(nums: list) -> bool:
    non_dupe_set = set()

    for num in nums:
        if num in non_dupe_set:
            return True

        non_dupe_set.add(num)

    return False


def contains_duplicate_v2(nums: list) -> bool:
    return len(nums) != len(set(nums))


@pytest.mark.parametrize(
    ("input", "expected"),
    (
        ([1, 2, 3, 4, 5], False),
        ([1, 2, 3, 4, 5, 1], True),
        ([1, 1, 2, 2], True),
        ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], False),
    )
)
def test_contains_duplicate(input: list, expected: bool) -> None:
    assert contains_duplicate(nums=input) == expected


if __name__ == "__main__":
    test_contains_duplicate()
