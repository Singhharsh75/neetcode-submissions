/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */

    clone(node,map){
        if(!node)return null
        if(map?.has(node)){
            return map.get(node)
        }
        let n_node =new Node(node.val);
        map.set(node,n_node)
        for(let nei of node.neighbors){
            n_node.neighbors.push(this.clone(nei,map))
        }

        return n_node
    }
    cloneGraph(node) {
        let map=new Map()
        return this.clone(node,map)
    }
}
