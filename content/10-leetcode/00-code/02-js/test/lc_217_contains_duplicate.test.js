import {describe, expect, test} from '@jest/globals';
import containsDuplicate from "../src/lc_217_contains_duplicate";

describe("Contains Duplicate Tests", () => {
    test("Test Case: [1,2,3,1] => true", () => {
        expect(containsDuplicate([1,2,3,1])).toBe(true);
    });

    test("Test Case: [1,2,3,4] => false", () => {
        expect(containsDuplicate([1,2,3,4])).toBe(false);
    });

    test("Test Case: [1,1,1,3,3,4,3,2,4,2] => true", () => {
        expect(containsDuplicate([1,1,1,3,3,4,3,2,4,2])).toBe(true);
    });
});
