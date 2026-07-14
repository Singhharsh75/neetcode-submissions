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

    clone(node,visit_map){
        if(!node)return null
        if(visit_map.has(node))return visit_map.get(node);
        const new_node=new Node(node.val);
        visit_map.set(node,new_node);
        for(let nei of node.neighbors){
            new_node.neighbors.push(this.clone(nei,visit_map))
        }
        return new_node;
    }
    cloneGraph(node) {
        let visit_map=new Map();
        return this.clone(node,visit_map);
    }
}
