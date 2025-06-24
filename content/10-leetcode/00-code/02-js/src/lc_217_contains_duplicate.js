/**
 * @file lc_217_contains_duplicate.js
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
    const nums_seen = new Set();

    for (let i = 0; i <= nums.length; i++) {
        if (nums_seen.has(nums[i])) {
            return true;
        }

        nums_seen.add(nums[i])
    }

    return false;
}

export default containsDuplicate;
