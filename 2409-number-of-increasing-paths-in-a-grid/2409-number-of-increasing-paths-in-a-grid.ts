function countPaths(grid: number[][]): number {
    let res = 0n;
    const m = grid.length;
    const n = grid[0].length;
    const dp: bigint[][] = [];
    const mod = BigInt(10**9+7);
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    // init dp
    for(let i=0; i<m; i++){
        dp[i] = [];
    }

    function dfs(i: number, j: number): bigint{
        if(dp[i][j]){
            return dp[i][j];
        }

        let cost = 1n;
        for(let k=0; k<directions.length; k++){
            const direction = directions[k];
            const previousRow = i+direction[0];
            const previousCol = j+direction[1];
            if(
                grid[previousRow] 
                && grid[previousRow][previousCol]
                && grid[previousRow][previousCol] < grid[i][j]
            ){
                cost += dfs(previousRow, previousCol)
            }
        }
        dp[i][j] = cost
        return cost
    }

    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            res += dfs(i, j);
        }
    }
    
    return Number(res%mod);
};