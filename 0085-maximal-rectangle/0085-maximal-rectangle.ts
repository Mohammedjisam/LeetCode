function maximalRectangle(matrix: string[][]): number {
    if (matrix.length === 0) return 0;

    const cols = matrix[0].length;
    const heights: number[] = Array(cols).fill(0);
    let maxArea = 0;

    for (let row of matrix) {
        for (let i = 0; i < cols; i++) {
            heights[i] = row[i] === '1' ? heights[i] + 1 : 0;
        }
        maxArea = Math.max(maxArea, largestRectangleArea(heights));
    }

    return maxArea;
}


function largestRectangleArea(heights: number[]): number {
    let maxArea = 0;
    const stack: number[] = [];
    heights.push(0); 

    for (let i = 0; i < heights.length; i++) {
        while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
            const height = heights[stack.pop()!];
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i);
    }

    heights.pop(); 
    return maxArea;
}
