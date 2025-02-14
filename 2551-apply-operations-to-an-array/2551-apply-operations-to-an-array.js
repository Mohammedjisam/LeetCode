/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    let result = [];
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] *= 2;
            nums[i + 1] = 0;
        }
    }
    for (let num of nums) {
        if (num !== 0) result.push(num);
    }
    while (result.length < nums.length) {
        result.push(0);
    }
    return result;
};
