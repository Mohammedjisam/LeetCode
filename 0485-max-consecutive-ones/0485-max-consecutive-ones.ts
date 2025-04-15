function findMaxConsecutiveOnes(nums: number[]): number {
    let maxCount: number = 0;
    let currentCount: number = 0;

    for (let i = 0; i < nums.length; i++) {
        currentCount = nums[i] === 1 ? currentCount + 1 : 0;
        maxCount = Math.max(maxCount, currentCount);
    }

    return maxCount;
}
