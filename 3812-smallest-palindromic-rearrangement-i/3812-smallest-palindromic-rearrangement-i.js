/**
 * @param {string} s
 * @return {string}
 */
var smallestPalindrome = function(s) {
    if(s.length === 1)
        return s;
    else if(s.length % 2 === 0){
        str = s.substring(0, s.length / 2);
        str = str.split('').sort().join('');
        s = str + str.split('').reverse().join('');
        return s;
    }
    else{
        str = s.substring(0, s.length / 2);
        let mid = s.charAt(Math.floor(s.length / 2));
        str = str.split('').sort().join('');
        s = str + mid + str.split('').reverse().join('');
        return s;
    }
};