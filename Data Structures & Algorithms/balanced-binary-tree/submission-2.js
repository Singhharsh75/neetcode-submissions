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
        return 1+Math.max(this.depth(root.right),this.depth(root.left));
    }

    isBalanced(root) {
        if(!root)return true;
        const right=this.depth(root.right);
        const left=this.depth(root.left);
        if(Math.abs(right-left)>1)return false;

        return this.isBalanced(root.left) && this.isBalanced(root.right);
    }
}
