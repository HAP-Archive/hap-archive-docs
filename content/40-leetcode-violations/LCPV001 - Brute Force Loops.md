---
title: LCPV001 - Brute Force Loops
date: Sunday 29th June 2025 23:34:48
modified_date: Sunday 29th June 2025 23:34:48
uuid: 941fdcc1-cd7e-4214-8b85-58c56795b892
tags:
  - LCPV
  - Document
  - LeetCode
  - Violations
  - Constraints
index_depth: 
is_index?: false
---

# LeetCode Violation: LCPV001

## Summary

> [!WARNING] Important
> This guide defines a set of conventional rules and violations for common algorithm patterns and language-specific syntax often encountered while solving LeetCode problems. Each rule will always have a unique code, an explanation of what the code is checking for, and a justifications for why this code is important.

This violation, **LCPV001: Brute Force Loops**, addresses a pattern specific violation that affects the desired time and space complexity of a LeetCode solution. If the problem specifically hints that it is possible to complete it in `O(n)` space and time, it would be undesirable to implement a nested loop structure where the following situation may happen:
- The outer loop picks and element `nums[i]`.
- The inner loop checks if `nums[j]` is a match for all `j > `.

```python
# Anti-pattern: LCPV001 Brute Force Nested Loops
for i in range(len(nums)):
	for j in range(i + 1, len(nums)): 
		if nums[i] == nums[j]: return True

return False
```

### What Does it Do?

> [!TIP] FYI
> This section provides a brief, high-level summary of the code pattern, anti-pattern, or behavior that this rule is designed to detect. It answers the fundamental question: "What condition triggers this violation?"

This rule flags the use of undesirable nested loops to brute force solutions. It's triggered when a LeetCode problem specifically hints that it is possible to be completed in `O(n)` or `O(1)` time (or space), but is ignored.
### Why is it Bad?

> [!TIP] FYI 
> This section explains the negative consequences of the flagged code, justifying why it is considered an anti-pattern or a mistake. The reasoning typically focuses on performance bottlenecks (e.g., causing "Time Limit Exceeded" errors), correctness issues (bugs and logical errors), or deviations from established programming best practices.

This pattern has a time complexity of `O(n^2`. While it works for very small arrays, it will be too slow for typical LeetCode constraints, which will oftentimes result in a "Time Limit Exceeded" (TLE) error. This violation demonstrates a failure to leverage more efficient data structures for searching.

### Related Violations (References)
- None Applicable (N/A)