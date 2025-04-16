function maxEnvelopes(envelopes: number[][]): number {
    envelopes.sort((a, b) => {
        if (a[0] === b[0]) {
            return b[1] - a[1]; 
        }
        return a[0] - b[0]; 
    });
    const heights = envelopes.map(env => env[1]);
    const dp: number[] = [];

    for (let h of heights) {
        let left = 0, right = dp.length;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (dp[mid] < h) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        if (left === dp.length) {
            dp.push(h);
        } else {
            dp[left] = h; 
        }
    }

    return dp.length;
}
