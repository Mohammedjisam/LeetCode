/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let first = -1, last = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            first = i;
            break; 
        }
    }
    if (first === -1) {
        return [-1, -1];
    }
    for (let i = first; i < nums.length; i++) {
        if (nums[i] === target) {
            last = i;
        }
    }
    return [first, last];
};
