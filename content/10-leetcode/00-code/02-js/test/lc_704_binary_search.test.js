import { describe, expect, test } from '@jest/globals';
import binarySearch from '../src/lc_704_binary_search';

describe('Tests for Binary Search', () => {
  test('finds target in array', () => {
    expect(binarySearch([-1, 0, 2, 4, 6, 8], 4)).toBe(3);
  });

  test('returns -1 if target missing', () => {
    expect(binarySearch([-1, 0, 2, 4, 6, 8], 3)).toBe(-1);
  });
});