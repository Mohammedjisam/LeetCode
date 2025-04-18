function countTriplets(nums: number[]): number {
    const andMap = new Map<number, number>();

    // Step 1: Count all possible nums[i] & nums[j] and store frequencies
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            const andVal = nums[i] & nums[j];
            andMap.set(andVal, (andMap.get(andVal) || 0) + 1);
        }
    }

    let count = 0;

    // Step 2: For each number nums[k], check how many (i, j) pairs make (nums[i] & nums[j] & nums[k]) === 0
    for (const [key, freq] of andMap.entries()) {
        for (let k = 0; k < nums.length; k++) {
            if ((key & nums[k]) === 0) {
                count += freq;
            }
        }
    }

    return count;
}
