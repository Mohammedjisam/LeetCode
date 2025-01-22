/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let output = Infinity;
    nums.sort((a,b)=>a-b)
    for(let [index, number] of nums.entries()){
        let left= index+1, right = nums.length-1;
        while(left<right){
            let currentSum = nums[left]+nums[right]+number;
            if(currentSum === target) return target;
            if(Math.abs(currentSum-target) < Math.abs(output-target)) output = currentSum
            if(currentSum>target) right--;
            else left++
        }
    }
    return output    
};