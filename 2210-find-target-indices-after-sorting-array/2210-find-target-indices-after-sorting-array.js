/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let newNums=nums.sort((a,b)=>a-b)
    console.log(newNums)
    let index=[];
    for(let i=0;i<newNums.length;i++){
        if(newNums[i]===target){
            index.push(i)
        }
    }
    return index
};