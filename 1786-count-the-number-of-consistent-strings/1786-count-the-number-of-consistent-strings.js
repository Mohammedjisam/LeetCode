/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
   const allowedSet=new Set(allowed);
   const outword=words.filter(word=>[...word].every(char=>allowedSet.has(char)));
   return outword.length;
};