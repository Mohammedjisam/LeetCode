/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let newWord=s.split(" ").map((word)=>word.split("").reverse().join("")).join(" ");
    return newWord
};