/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let numStr = digits.join(""); 
    let incrementedNum = BigInt(numStr) + BigInt(1);
    return incrementedNum.toString().split("").map(Number);
};
