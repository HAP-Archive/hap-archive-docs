import pytest

def two_sum(nums: list, target: int) -> list[int]:
    pass


@pytest.mark.parametrize(
    ("nums", "target", "expected"),
    (
        ([2, 7, 11, 15], 9, [0, 1]),
        ([3, 2, 4], 6, [1, 2]),
        ([3, 3], 6, [0, 1]),
    )
)
def test_two_sum(nums: list, target: int, expected: list[int]) -> None:
    assert two_sum(nums=nums, target=target) == expected


if __name__ == "__main__":
    pass
