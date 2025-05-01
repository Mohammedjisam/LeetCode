function longestValidParentheses(s: string): number {
    let maxLen = 0;
    let left = 0;
    let right = 0;

    // Left to right scan
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            left++;
        } else {
            right++;
        }
        if (left === right) {
            maxLen = Math.max(maxLen, 2 * right);
        } else if (right > left) {
            left = right = 0;
        }
    }

    left = right = 0;

    // Right to left scan
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === '(') {
            left++;
        } else {
            right++;
        }
        if (left === right) {
            maxLen = Math.max(maxLen, 2 * left);
        } else if (left > right) {
            left = right = 0;
        }
    }

    return maxLen;
}