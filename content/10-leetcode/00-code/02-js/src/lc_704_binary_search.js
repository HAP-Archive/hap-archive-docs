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