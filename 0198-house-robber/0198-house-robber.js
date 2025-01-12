/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let prevMax = 0;
    let currMax = 0;
    for (let i = 0; i < nums.length; i++) {
        let temp = currMax;
        currMax = Math.max(currMax, prevMax + nums[i]);
        prevMax = temp;
    }
    return currMax;
};
