/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let value;
    for(let i=0;i<nums.length;i++){
        if(nums[i]===target){
            value=i;
            break;
        }else if(nums[i]<=target){
            value=i+1;
        }
        else if(nums[0]>=target){
            value=i;
            break;
        }
    }return value;
    
};