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
    maxDepth(root) {
        let stack=[[root,1]];
        let res=0;

        while(stack.length){
            let item=stack.pop();
            let node=item[0];
            let depth=item[1];

            if(node){
                res=Math.max(res,depth);
                stack.push([node.left,depth+1]);
                stack.push([node.right,depth+1]);
            }
        }

        return res;
    }
}
