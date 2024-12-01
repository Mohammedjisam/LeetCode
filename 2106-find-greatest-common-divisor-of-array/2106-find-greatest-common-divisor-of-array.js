/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let minNum = Math.min(...nums);  
    let maxNum = Math.max(...nums);  
    
while(minNum!==0){
    let reminder=maxNum%minNum;
    maxNum=minNum;
    minNum=reminder;
}
return maxNum;
};
