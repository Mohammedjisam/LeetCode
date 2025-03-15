namespace MyTree {
    export class TreeNode {
        val: number;
        left: TreeNode | null;
        right: TreeNode | null;

        constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
            this.val = val === undefined ? 0 : val;
            this.left = left === undefined ? null : left;
            this.right = right === undefined ? null : right;
        }
    }
}

const maxDepth = (root: MyTree.TreeNode | null): number => {
    if (!root) return 0;
    let l: number = maxDepth(root.left);
    let r: number = maxDepth(root.right);
    return Math.max(l, r) + 1;
};
