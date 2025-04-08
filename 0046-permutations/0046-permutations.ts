function permute(nums: number[]): number[][] {
    const result: number[][] = [];

    function backtrack(path: number[], remaining: number[]) {
        if (remaining.length === 0) {
            result.push([...path]);
            return;
        }

        for (let i = 0; i < remaining.length; i++) {
            const newPath = [...path, remaining[i]];
            const newRemaining = [...remaining.slice(0, i), ...remaining.slice(i + 1)];
            backtrack(newPath, newRemaining);
        }
    }

    backtrack([], nums);
    return result;
}
