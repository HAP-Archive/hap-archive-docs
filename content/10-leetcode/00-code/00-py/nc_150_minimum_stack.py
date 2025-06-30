from abc import ABC, abstractmethod
from typing import TypeVar
import pytest


E = TypeVar('E', bound=[])


class Stack(ABC):
    def __init__(self):
        self.stack = []
        self.top = -1

    @abstractmethod
    def push(self, val: E) -> None: pass

    @abstractmethod
    def pop(self) -> None: pass

    @abstractmethod
    def top(self) -> E: pass


class MinStack(Stack):
    def __init__(self):
        super().__init__()

    def __check_top(self) -> bool:
        if self.top == -1:
            raise IndexError("There are no elements currently within the stack.")

        return True

    def push(self, val: E) -> None:
        self.top += 1
        self.stack.append(val)

    def pop(self) -> None:
        if self.__check_top():
            self.stack.pop()

    # TODO: Optimize/Simplify top() method in MinStack (NOTE: O(1))
    def top(self) -> E | None:
        val = None

        if self.__check_top():
            val = self.stack[self.top]

        return val

    def get_min(self) -> E:
        # TODO:
        # * This would only really work if we are working with numbers, not strings or bools, etc.
        # * Given this, we should check the type in stack, determine if get_min function is possible.
        # * If possible, continue returning the min element within the stack.
        # * If not possible, return a response to the user that this stack is not of type int | float, etc.
        pass


@pytest.mark.parametrize(
    ("input", "expected"),
    (
        (),
    )
)
def test_min_stack_push(input: any, expected: any) -> None:
    pass

@pytest.mark.parametrize(
    ("input", "expected"),
    (
        (),
    )
)
def test_min_stack_pop(input: any, expected: any) -> None:
    pass

@pytest.mark.parametrize(
    ("input", "expected"),
    (
        (),
    )
)
def test_min_stack_top(input: any, expected: any) -> None:
    pass


@pytest.mark.parametrize(
    ("input", "expected"),
    (
        (),
    )
)
def test_min_stack_get_min(input: any, expected: any) -> None:
    pass


if __name__ == "__main__":
    test_min_stack_push()
    test_min_stack_pop()
    test_min_stack_top()
    test_min_stack_get_min()
