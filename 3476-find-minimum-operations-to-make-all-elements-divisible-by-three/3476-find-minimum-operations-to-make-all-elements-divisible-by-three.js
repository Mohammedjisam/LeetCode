/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let opration=0;
    for(let num of nums){
        const remainder=num%3;
        if(remainder==1){
            opration+=1;
        }else if (remainder===2){
            opration+=1;
        }
    }return opration
};