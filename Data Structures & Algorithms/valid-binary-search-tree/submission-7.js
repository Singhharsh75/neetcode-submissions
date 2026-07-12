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
    isValid(root,min,max){
        if(!root)return true;

        return (min < root.val && max > root.val) &&
                this.isValid(root.left,min,root.val) &&
                this.isValid (root.right,root.val,max)
    }

    isValidBST(root) {
        return this.isValid(root,-Infinity, Infinity)
    }
}
