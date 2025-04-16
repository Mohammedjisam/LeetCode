function maxSlidingWindow(nums: number[], k: number): number[] {
    const result: number[] = [];
    const deque: number[] = []; // store indices

    for (let i = 0; i < nums.length; i++) {
        // Remove indices that are out of the current window
        if (deque.length && deque[0] <= i - k) {
            deque.shift();
        }

        // Remove smaller elements in deque
        while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }

        // Push current index
        deque.push(i);

        // Append max to result once the first window is done
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
}
