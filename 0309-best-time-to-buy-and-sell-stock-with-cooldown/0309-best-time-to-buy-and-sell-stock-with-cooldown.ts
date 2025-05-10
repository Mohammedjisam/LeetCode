function maxProfit(prices: number[]): number {
    let n:number = prices.length,
        dp: Array<Array<number>> = [];
    for (let i:number = 0; i < n + 2; ++i) {
        dp.push([]);
        for (let j:number = 0; j < 2; ++j) {
            dp[i].push(0);
        }
    }
    let doNothing:number = 0,
        doSomething:number = 0;
    for (let i:number = n - 1; i >= 0; --i) {
        for (let j:number = 0; j < 2; ++j) {
            doNothing = dp[i + 1][j];
            if (j == 0) {
                doSomething = dp[i + 1][j + 1] - prices[i];
            } else {
                doSomething = dp[i + 2][j - 1] + prices[i];
            }
            dp[i][j] = Math.max(doNothing, doSomething);
        }
    }
    return dp[0][0];
};