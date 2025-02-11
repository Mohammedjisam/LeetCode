/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let stack = [];
    for (let i = 0; i < operations.length; i++) {
        if (!isNaN(Number(operations[i]))) {
            stack.push(Number(operations[i]));
        } else if (operations[i] === "C") { 
            stack.pop();
        } else if (operations[i] === "D") {
            stack.push(stack[stack.length - 1] * 2);
        } else if (operations[i] === "+") { 
            stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
        }
    }
    return stack.reduce((sum, num) => sum + num, 0);
};
