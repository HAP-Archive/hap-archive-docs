---
title: LCE - Binary Search
date: Sunday 6th July 2025 02:04:19
modified_date: Sunday 6th July 2025 02:04:19
summary: Following NeetCode 150, this is question 704 on Leetcode called "Binary Search"
uuid: d614c415-5b15-4660-9849-3e7da14d5690
tags:
  - LeetCode
  - Dev-Weekends
  - Fellowship
  - LCE
index_depth: 
is_index?: false
---

# LeetCode Problem hap-archive-docs - Obsidian v1.8.10

## Summary

> [!WARNING] Important
> This note is a template for the Dev Weekends Fellowship, it should be refactored to meet the needs of the LeetCode being introduced. Most DSA notes will not be the same as one another but should follow the same structure.

This section will go over a simple introduction/summary introducing the LeetCode problem (with its respective link), going over "thinking out loud" blocks and summarizing the content for the LeetCode problem.


### Problem Statement & Link

This section goes over the specific problem that will be analyzed, including a direct link to the LeetCode problem, and any formal introduction of the task.

- **LeetCode Link**: []() [704. Binary Search](https://leetcode.com/problems/binary-search/)
- **Problem Description**: Given a _sorted_ integer array `nums` and a `target`, return its index if found, otherwise return `-1`.

### Key Points
Provided below are the key points and deliverables for this document:
1. **Main Topic**: Binary Search (Divide and Conquer Algorithm)
2. **Relevance**: Fundamental algorithm for efficient searching in _O(log n)_ time.
3. **Key Takeaways**: - Works **only on sorted arrays** and uses two pointers (`left`, `right`) to halve the search space.
4. **Actionable Notes**: 

### Mistakes to Avoid
#### Syntax Related
- Forgetting to update `left = mid + 1` or `right = mid - 1` (causing infinite loops)
#### Pattern Specific
- Incorrect loop condition (`left <= right` vs. `left < right`).
### Coding Templates Used

### LeetCode Question Mindmap

This section outlines the decision-making progress through a mindmap. We will consider using a visual mindmap tool in conjunction with this document to map out patterns of thought when solving the LeetCode problem. For brief, we will provide a textual representation that will be helpful for quick reference:
1. **Problem Type**: Search in sorted array
2. **Possible Patterns**: Linear 
3. **Chosen Pattern**: Binary Search
	1. *Why does this pattern make sense over others?* Optimal for sorted arrays 
4. **Pre-requisites**: Pointers 

### Related Topics
Divide and Conquer
Two Pointers 

### External Links & References
N/A
