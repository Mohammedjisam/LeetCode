/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums.length % (i + 1) === 0) {  // Check if index+1 is a divisor
            sum += nums[i] * nums[i];
        }
    }
    return sum;
};
