/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if(!node) return null
    const map=new Map();
    const cloneNode=(n)=>{
        if(map.has(n)){
            return map.get(n)
        }
        const newNode=new _Node(n.val)
        map.set(n,newNode)
        for(let neighbor of n.neighbors){
            newNode.neighbors.push(cloneNode(neighbor))
        }
        return newNode;
    }
    return cloneNode(node)
    
};