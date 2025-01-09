/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
   let freq={}
   for(let i=0;i<nums.length;i++){
    let arr=nums[i];
    let majority=Math.floor(nums.length/2)
    if(freq[arr]){
        freq[arr]++
    }else{
        freq[arr]=1;
    }
    if(freq[arr]>majority){
        return arr
    }
   }
    }