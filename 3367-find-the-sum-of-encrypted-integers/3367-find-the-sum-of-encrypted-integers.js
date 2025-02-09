/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfEncryptedInt = function(nums) {
    let sum = 0;

    for (let num of nums) {
        if (num < 10) {
            sum += num;
        } else {
            let strNum = String(num);
            let maxDigit = Math.max(...strNum);
            let encrypted = Number(strNum.replace(/./g, maxDigit)); 
            sum += encrypted;
        }
    }

    return sum;
};
