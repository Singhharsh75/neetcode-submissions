/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root) {
        const q= new Queue();
        q.push([root,-Infinity]);
        let res=0;
        while(!q.isEmpty()){
            const [node,maxVal]=q.pop();

            if(node.val>=maxVal){
                res++;
            }
            

            if(node.left){
                q.push([node.left,Math.max(node.val,maxVal)]);
            }
            if(node.right){
                q.push([node.right,Math.max(node.val,maxVal)])
            }
        }
        return res;
    }
}
