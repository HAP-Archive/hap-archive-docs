# Copyright (c) 2025 Hi-kue. All rights reserved.
#
# This file is part of Hi-kue's (me) LeetCode solutions.
# Any reproduction or use of this file, with or without modification,
# is strictly prohibited without prior written permission.
#
# Why the fk should you care?
# Because I like this code, and I want to keep this code as my
# own property and would like some credit for it since I thought
# it was pretty neat using pytest like this and I really don't
# want to see it copied and pasted everywhere without any credit.
#
# Simple as that.

# This is a base(template) file for all LeetCode problems.
# You should use this file as a starting point for any of
# the problems you are looking to solve, as it includes the
# pytest decorator and test function to test your solution.

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
