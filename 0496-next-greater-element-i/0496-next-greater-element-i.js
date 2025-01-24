/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let output = [];
    let map = new Map();
    let stack = [];
    for (let num of nums2) {
        while (stack.length > 0 && stack[stack.length - 1] < num) {
            map.set(stack.pop(), num);
        }
        stack.push(num);
    }
    while (stack.length > 0) {
        map.set(stack.pop(), -1);
    }
    for (let num of nums1) {
        output.push(map.get(num) || -1);
    }
    return output;
};