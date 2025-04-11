function isScramble(s1: string, s2: string): boolean {
    const memo = new Map<string, boolean>();

    function helper(a: string, b: string): boolean {
        const key = `${a}_${b}`;
        if (memo.has(key)) return memo.get(key)!;

        if (a === b) {
            memo.set(key, true);
            return true;
        }

        if (a.length !== b.length || [...a].sort().join('') !== [...b].sort().join('')) {
            memo.set(key, false);
            return false;
        }

        const n = a.length;
        for (let i = 1; i < n; i++) {
            // Case 1: No swap
            if (
                helper(a.substring(0, i), b.substring(0, i)) &&
                helper(a.substring(i), b.substring(i))
            ) {
                memo.set(key, true);
                return true;
            }

            // Case 2: Swap
            if (
                helper(a.substring(0, i), b.substring(n - i)) &&
                helper(a.substring(i), b.substring(0, n - i))
            ) {
                memo.set(key, true);
                return true;
            }
        }

        memo.set(key, false);
        return false;
    }

    return helper(s1, s2);
}
