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
    maxD(root,depth){
        if(!root)return 0;
        if(!root.left && !root.right)return depth;
        let maxDL=this.maxD(root.left,1+depth);
        let maxDR=this.maxD(root.right,1+depth);

        return Math.max(maxDL,maxDR);
    }

    maxDepth(root) {
        if(!root)return 0;
        return 1+this.maxD(root,0);
    }
}
