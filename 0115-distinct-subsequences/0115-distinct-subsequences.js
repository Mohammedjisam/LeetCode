var numDistinct = function(s, t) {
    const m = s.length;
    const n = t.length;

    // Edge case: if t is longer than s, it's impossible
    if (n > m) return 0;

    // Initialize 2D dp array
    const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));

    // An empty t is a subsequence of any prefix of s
    for (let i = 0; i <= m; i++) {
        dp[i][0] = 1;
    }

    // Fill the DP table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s[i - 1] === t[j - 1]) {
                // Match: add both possibilities
                dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
            } else {
                // No match: skip s[i-1]
                dp[i][j] = dp[i - 1][j];
            }
        }
    }

    return dp[m][n];
};