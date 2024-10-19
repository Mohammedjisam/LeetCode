/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numsObj = {};
    nums.forEach((num, index) => {
        numsObj[num.toString()] = index;
    });

    // Find the two indices
    for (let i = 0; i < nums.length; i++) {
        const possibleIndex = numsObj[(target - nums[i]).toString()];
        if (possibleIndex !== undefined && possibleIndex !== i) {
            return [i, possibleIndex];
        }
    }
};
