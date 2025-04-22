/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];
    const combination = [];
    let start = 0;

    const backtrack = (target, start) => {
        if (target === 0) {
            result.push([...combination]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            if (candidates[i] <= target) {
                combination.push(candidates[i]);
                backtrack(target - candidates[i], i);
                combination.pop();
            }
        }
    };

    backtrack(target, start);
    return result;
};