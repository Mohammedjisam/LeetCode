/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let shuffled=[];
    for(let i=0;i<s.length;i++){
        shuffled[indices[i]]=s[i]
    }
    return shuffled.join("")
    
};