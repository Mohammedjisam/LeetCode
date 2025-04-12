function maxPathSum(root: TreeNode | null): number {
    let maxSum = -Infinity;

    const maxGain = (node: TreeNode | null): number => {
        if (!node) return 0;

        // Only take positive contributions from children
        const leftGain = Math.max(maxGain(node.left), 0);
        const rightGain = Math.max(maxGain(node.right), 0);

        // Price of the new path that passes through this node
        const currentPathSum = node.val + leftGain + rightGain;

        // Update the global maxSum if this path is better
        maxSum = Math.max(maxSum, currentPathSum);

        // Return the max gain this node can contribute to its parent
        return node.val + Math.max(leftGain, rightGain);
    };

    maxGain(root);
    return maxSum;
}
