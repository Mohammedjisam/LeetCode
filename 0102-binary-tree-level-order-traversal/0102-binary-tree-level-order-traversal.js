/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    const result=[]
    const queue=[root]
    while(queue.length>0){
        const level=[]
        const size=queue.length;

        for(let i=0;i<size ; i++){
            const curr=queue.shift()
            level.push(curr.val)

            if(curr.left) queue.push(curr.left)
            if(curr.right) queue.push(curr.right)
        }
        result.push(level);
    }
    return result;
};