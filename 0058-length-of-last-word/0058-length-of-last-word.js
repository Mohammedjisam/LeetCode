/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let words=s.trim().split(" ");
    let lastword=words[words.length-1];
    return lastword.length;
};