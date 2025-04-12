function recoverTree(root: TreeNode | null): void {
    let first: TreeNode | null = null;
    let second: TreeNode | null = null;
    let prev: TreeNode | null = null;

    const inorder = (node: TreeNode | null) => {
        if (!node) return;

        inorder(node.left);

        if (prev && node.val < prev.val) {
            if (!first) {
                first = prev;
            }
            second = node;
        }

        prev = node;

        inorder(node.right);
    };

    inorder(root);

    if (first && second) {
        // Swap the values of the two nodes
        const temp = first.val;
        first.val = second.val;
        second.val = temp;
    }
}
