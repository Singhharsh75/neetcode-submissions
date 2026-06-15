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
    depth(root){
        if(!root)return 0;
        return 1+Math.max(this.depth(root.left),this.depth(root.right));
    }

    isBalanced(root) {
        if(!root)return true;

        if(Math.abs(this.depth(root.left)-this.depth(root.right))>1)return false;

        return this.isBalanced(root.left) && this.isBalanced(root.right);
    }
}
