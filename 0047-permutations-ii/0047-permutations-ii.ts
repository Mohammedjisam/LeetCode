function permuteUnique(nums: number[]): number[][] {
    const results: number[][] = [];
    nums.sort((a, b) => a - b); 

    const backtrack = (path: number[], used: boolean[]) => {
        if (path.length === nums.length) {
            results.push([...path]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            // Skip used elements
            if (used[i]) continue;

            // Skip duplicates
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;

            used[i] = true;
            path.push(nums[i]);

            backtrack(path, used);

            path.pop();
            used[i] = false;
        }
    };

    backtrack([], new Array(nums.length).fill(false));
    return results;
}