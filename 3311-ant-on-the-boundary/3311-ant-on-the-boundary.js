/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function(nums) {
    let boundary=0;
    let pointer=0;

    nums.forEach((num)=>{
        pointer+=num;
        pointer===0?boundary++:null;
    })
    return boundary
};