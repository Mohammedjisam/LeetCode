function largestRectangleArea(heights: number[]): number {
    let maxArea = 0;
    const stack: number[] = [];
    heights.push(0);  // Add a 0 height to flush out the stack at the end

    for (let i = 0; i < heights.length; i++) {
        while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
            const height = heights[stack.pop()!];
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i);
    }

    return maxArea;
}
