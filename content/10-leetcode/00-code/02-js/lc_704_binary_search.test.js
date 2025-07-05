const Solution = require('./lc_704_binary_search.js');

describe('Binary Search', () => {
  const solution = new Solution();

  test('finds target in array', () => {
    expect(solution.search([-1, 0, 2, 4, 6, 8], 4)).toBe(3);
  });

  test('returns -1 if target missing', () => {
    expect(solution.search([-1, 0, 2, 4, 6, 8], 3)).toBe(-1);
  });
  
});