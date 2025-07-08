---
title: Minimum Stack
date: Tuesday 8th July 2025 17:27:39
modified_date: Tuesday 8th July 2025 17:27:39
summary: Following NeetCode 150, this is question 155 on LeetCode called "Min Stack".
uuid: 99482d44-84b9-488d-a215-1db9479fc573
tags:
  - Dev-Weekends
  - Fellowship
  - LCE
  - LeetCode
index_depth: 
is_index?: false
---

# LCE - Min Stack


## Summary

> [!WARNING] Important
> This note is a template for the Dev Weekends Fellowship, it should be refactored to meet the needs of the LeetCode being introduced. Most DSA notes will not be the same as one another but should follow the same structure.

This section will go over a simple introduction/summary introducing the LeetCode problem (with its respective link), going over "thinking out loud" blocks and summarizing the content for the LeetCode problem.


### Problem Statement & Link

This section goes over the specific problem that will be analyzed, including a direct link to the LeetCode problem, and any formal introduction of the task.

- **LeetCode Link**: []()[155. Min Stack](https://leetcode.com/problems/min-stack/)
- **Problem Description**: Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

### Key Points
Provided below are the key points and deliverables for this document:
1. **Main Topic**: Stack for O(1) minimum tracking
2. **Relevance**:  Space-time tradeoff problem.
3. **Key Takeaways**: - Use a secondary stack to track minimums.
4. **Actionable Notes**: Sync push/pop between main stack and min-stack.

### Mistakes to Avoid

#### Syntax Related
- Forgetting to check empty stacks in `top()` or `getMin()`.
- Not updating min-stack correctly when pushing duplicate values.
#### Pattern Specific
- Using a single variable for `min` 
- Calculating min on-demand
### Coding Templates Used

### LeetCode Question Mindmap

This section outlines the decision-making progress through a mindmap. We will consider using a visual mindmap tool in conjunction with this document to map out patterns of thought when solving the LeetCode problem. For brief, we will provide a textual representation that will be helpful for quick reference:
1. **Problem Type**: Stack with data
2. **Possible Patterns**: - Two stacks or a single stack with tuples
3. **Chosen Pattern**: Dual stack
	1. *Why does this pattern make sense over others?* clear separation over concerns
4. **Pre-requisites**: Stack operations

### Related Topics
N/A

### External Links & References
N/A
