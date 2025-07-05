class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
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
}

// Test Case 1: Target exists in the array
const nums1 = [-1, 0, 2, 4, 6, 8];
const target1 = 4;
const sol1 = new Solution();
const result1 = sol1.search(nums1, target1);
console.log(`Test Case 1: Array [${nums1}], Target ${target1} -> Index: ${result1}`); 

// Test Case 2: Target does not exist in the array
const nums2 = [-1, 0, 2, 4, 6, 8];
const target2 = 3;
const sol2 = new Solution();
const result2 = sol2.search(nums2, target2);
console.log(`Test Case 2: Array [${nums2}], Target ${target2} -> Index: ${result2}`); 