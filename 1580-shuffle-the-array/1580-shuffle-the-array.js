/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let newArray=[];
    for(let i=0;i<n;i++){
        newArray.push(nums[i])
        newArray.push(nums[i+n])
    }return  newArray
};