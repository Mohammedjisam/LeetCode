/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
 let sumS=0;
 let sumT=0;
 for(const char of s){
    sumS+=char.charCodeAt(0);
 }
 for(const char of t){
    sumT+=char.charCodeAt(0);
 }
 return String.fromCharCode(sumT-sumS)
};