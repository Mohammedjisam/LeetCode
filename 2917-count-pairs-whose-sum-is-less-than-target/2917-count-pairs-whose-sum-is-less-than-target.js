/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    nums.sort((a,b)=>a-b);
    let count=0;
    let i=0;j=nums.length-1;
    while(i<j){
        if(nums[i]+nums[j]<target){
            count+=j-i;
            i++
        }else{
            j--
        }
    }
    return count;
};