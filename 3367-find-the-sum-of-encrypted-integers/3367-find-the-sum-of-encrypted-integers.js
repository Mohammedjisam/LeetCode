/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfEncryptedInt = function (nums) {
    let arr = []
    let sum = 0

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i].toString().split('')
        let maxNum = Math.max(...num).toString()
        let repeat = ""
        for (let j = 0; j < num.length; j++) {
            repeat += maxNum
        }
        arr.push(repeat)
    }
    console.log(arr)
    sum = arr.reduce((accu, curr) => accu + parseInt(curr), 0);
      return sum
};