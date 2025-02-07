/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let res = [];
    let backtrack = (cur, o, c) => {
        if (o == 0 && c == 0) { res.push(cur.slice()); return; }
        if (c < o) return;

        if (o > 0) {
            backtrack(cur + "(", o - 1, c);
        }
        if (c > o)
        {
            backtrack(cur + ")", o, c - 1);
        }
    };
    backtrack([], n, n);
    return res;
};