function maxProduct(nums: number[]): number {
    if (nums.length === 0) return 0;
    let maxNum: number = nums[0],minNum: number = nums[0],result: number = nums[0];
    for (let i = 1; i < nums.length; i++) {
        let num: number = nums[i];
        if (num < 0) {
            [maxNum, minNum] = [minNum, maxNum];
        }
        maxNum = Math.max(num, maxNum * num);
        minNum = Math.min(num, minNum * num);
        result = Math.max(result, maxNum);
    }
    return result;
}
