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
     * @return {boolean}
     */

    depth(root,res){
        if(!root)return 0;
        const left=this.depth(root.left,res);
        const right=this.depth(root.right,res);
        if(Math.abs(right-left)>1){
            res[0]=false;
        };

        return 1+Math.max(left,right);
    }

    isBalanced(root) {
        const res=[true];
        this.depth(root,res);

        return res[0];
    }
}
