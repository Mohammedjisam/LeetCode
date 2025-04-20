/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var sortMatrix = function(grid) {
    let R = grid.length, C = grid[0].length;

    // Sort lower diagonals in descending order
    for (let r_orig = 0; r_orig < R; r_orig++) {
        let temp = [];
        let r = r_orig, c = 0;

        // Collect diagonal elements
        while (r < R && c < C) {
            temp.push(grid[r][c]);
            r++;
            c++;
        }

        // Sort in descending order
        temp.sort((a, b) => b - a);

        // Write sorted values back
        r = r_orig;
        c = 0;
        let t = 0;
        while (r < R && c < C) {
            grid[r][c] = temp[t++];
            r++;
            c++;
        }
    }

    // Sort upper diagonals in ascending order
    for (let c_orig = 1; c_orig < C; c_orig++) {
        let temp = [];
        let r = 0, c = c_orig;

        // Collect diagonal elements
        while (r < R && c < C) {
            temp.push(grid[r][c]);
            r++;
            c++;
        }

        // Sort in ascending order
        temp.sort((a, b) => a - b);

        // Write sorted values back
        r = 0;
        c = c_orig;
        let t = 0;
        while (r < R && c < C) {
            grid[r][c] = temp[t++];
            r++;
            c++;
        }
    }

    return grid;
};