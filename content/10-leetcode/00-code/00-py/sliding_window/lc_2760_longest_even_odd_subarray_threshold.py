import pytest

def some_function() -> any:
    pass


@pytest.mark.parametrize(
    ("input", "expected"),
    (
        (),
    )
)
def test_some_function(input: any, expected: any) -> None:
    pass


if __name__ == "__main__":
    test_some_function()
