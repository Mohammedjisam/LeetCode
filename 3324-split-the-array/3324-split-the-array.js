/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function(nums) {
    nums.sort((a, b) => a - b); 
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] === nums[i + 1] && nums[i] === nums[i + 2]) {
            return false;
        }
    }
    return true;
};