/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let inc= true
    let dec= true;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) dec = false;
        if (nums[i] < nums[i - 1]) inc = false;
    }
    return dec || inc;
};
