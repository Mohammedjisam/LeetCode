/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
     let sum=nums.reduce((acc,curr)=>{
        return acc=acc+curr
    })
   let diff= nums.join('').split('').map(Number)
       let digitSum= diff.reduce((acc,curr)=>{
            return acc=acc+curr;
        })
        let su=sum-digitSum;
        return su
};