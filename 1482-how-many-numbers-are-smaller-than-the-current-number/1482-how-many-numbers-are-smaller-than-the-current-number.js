/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let countArr=[]
   
    for(let i=0;i<nums.length;i++){
          let count=0
        for(let j=0;j<nums.length;j++){
            if(nums[i]>nums[j]){
                count++;
            }
        }
        countArr.push(count);
    }
    return countArr;
};