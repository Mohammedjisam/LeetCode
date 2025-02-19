function productExceptSelf(nums: number[]): number[] {
    if (nums.length < 2 || nums.length > 100000) throw new Error('Wrong array size');
    let left = 1;
    let right = 1;
    const answer: number[] = Array(nums.length).fill(1);
    for (let i = 0; i < nums.length; ++i) {
        answer[i] *= left;
        answer[nums.length - 1 - i] *= right;
        left *= nums[i];
        right *= nums[nums.length - 1 - i];
    }
    return answer;
}