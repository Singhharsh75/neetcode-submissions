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
    dfs(root){
        if(!root)return 0;
        return 1+Math.max(this.dfs(root.left),this.dfs(root.right));
    }

    isBalanced(root) {
        if(!root)return true;
        let leftDepth=this.dfs(root.left);
        let rightDepth=this.dfs(root.right);
        if((Math.abs(leftDepth-rightDepth)>1)|| !this.isBalanced(root.left) || !this.isBalanced(root.right))return false;

        return true;
    }
}
