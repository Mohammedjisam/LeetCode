function countTriplets(nums: number[]): number {
    const andMap = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            const andVal = nums[i] & nums[j];
            andMap.set(andVal, (andMap.get(andVal) || 0) + 1);
        }
    }

    let count = 0;
    for (const [key, freq] of andMap.entries()) {
        for (let k = 0; k < nums.length; k++) {
            if ((key & nums[k]) === 0) {
                count += freq;
            }
        }
    }

    return count;
}
