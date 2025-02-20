/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    let sumSingle=0;
    let sumDouble=0;
    let sum=0;
    for(let num of nums){
       sum+=num;
       if(num>=1&&num<=9){
        sumSingle+=num
       }else if(num>=10&&num<=99){
        sumDouble+=num
       }
    }
    let sumRes=sum-sumSingle;
    if(sumSingle>sumRes) return true
    sumRes=sum-sumDouble
    return sumDouble>sumRes
}