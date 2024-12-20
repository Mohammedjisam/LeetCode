/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let Maxcount=0
    let currentCount=0

    for(let i=0;i<nums.length;i++){
       currentCount=nums[i]===1?currentCount+1:0;
        Maxcount=Math.max(Maxcount,currentCount)
    }return Maxcount;
};