/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
   
    let sum=0
    for(i=0;i<nums.length;i++){
         let count=0;
        for(j=0;j<nums.length;j++){
            if(nums[i]===nums[j]){
               count++
            }
        }
         if(count===1){
       sum=sum+nums[i]
    }
   
    }
    return sum
};