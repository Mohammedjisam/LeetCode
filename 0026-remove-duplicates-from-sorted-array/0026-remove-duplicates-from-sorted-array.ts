function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0;
    let j: number = 0;
    for (let i: number = 1; i < nums.length; i++) {
        if (nums[i] !== nums[j]) {
            j++;
            nums[j] = nums[i];
        }
    }
    return j + 1;
}
