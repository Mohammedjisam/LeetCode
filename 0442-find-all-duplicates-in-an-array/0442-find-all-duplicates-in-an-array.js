/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let newNum=nums.sort((a,b)=>a-b)
    let arr=[]
    console.log(newNum)
    for(let i=0;i<newNum.length;i++){
        if(newNum[i]===newNum[i+1]){
            arr.push(newNum[i])
        }
    }return arr
};