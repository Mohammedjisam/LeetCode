/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const freq = {}; 
    for (const num of arr) {
        freq[num] = (freq[num] || 0) + 1; 
    }
    const freqSet = new Set(Object.values(freq)); 
    return freqSet.size === Object.keys(freq).length; 
};