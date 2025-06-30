import pytest

def remove_duplicates(nums: list) -> int:
    if len(nums) == 0:
        return 0

    if len(nums) == 1:
        return 1

    l = 1
    for r in range(1, len(nums)):
        if nums[r] != nums[r - 1]:
            nums[l] = nums[r]
            l += 1

        if len(nums) <= r:
            return l

    return l


@pytest.mark.parametrize(
    ("nums", "expected"),
    (
        ([1,1,2], 2),
        ([0,0,1,1,1,2,2,3,3,4], 5)
    )
)
def test_remove_duplicates(nums: list, expected: int) -> None:
    assert remove_duplicates(nums=nums) == expected


if __name__ == "__main__":
    test_remove_duplicates()
