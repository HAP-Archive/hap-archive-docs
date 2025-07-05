// Copyright (c) 2025 Hi-kue. All rights reserved.
//
// This file is part of Hi-kue's (me) LeetCode solutions.
// Any reproduction or use of this file, with or without modification,
// is strictly prohibited without prior written permission.
//
// Why the fk should you care?
// Because I like this code, and I want to keep this code as my
// own property and would like some credit for it since I thought
// it was pretty neat using pytest like this and I really don't
// want to see it copied and pasted everywhere without any credit.
//
// Simple as that.
//
// This is a base(template) file for all LeetCode problems.
// You should use this file as a starting point for any of
// the problems you are looking to solve, as it includes the
// pytest decorator and test function to test your solution.

/**
 * @file lc_704_binary_search.js
 * @param {number[]} nums - Sorted array of numbers
 * @param {number} target - Number to search for
 * @returns {number} Index of target if found, -1 otherwise
 */
const binarySearch = (nums, target) => 
{
    let r = nums.length - 1; 
    let l = 0; 

    while (r >= l) {
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] === target) {
            return mid; 
        } else if (nums[mid] > target) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return -1; 
}

export default binarySearch;