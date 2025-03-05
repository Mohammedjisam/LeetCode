/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const str = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversed = str.split('').reverse().join('');
    return str === reversed;
};
