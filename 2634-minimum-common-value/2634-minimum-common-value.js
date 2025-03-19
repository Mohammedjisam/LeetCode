/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    let num;
    let n1 = nums1.sort((a, b) => a - b);
    let n2 = nums2.sort((a, b) => a - b);

    for (let i = 0; i < n1.length; i++) {
        for (let j = 0; j < n2.length; j++) {
            if (n1[i] === n2[j]) { 
                return num = n1[i];
            } else if (n2[j] > n1[i]) { 
                break; 
            }
        }
    }
    return -1; 
};
