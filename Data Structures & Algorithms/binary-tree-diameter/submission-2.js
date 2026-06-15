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
    depth(root){
        if(!root)return 0;

        return 1+Math.max(this.depth(root.right),this.depth(root.left));
    }

    diameterOfBinaryTree(root) {
        if(!root)return 0;

        return Math.max(this.depth(root.left)+this.depth(root.right),
           this.diameterOfBinaryTree(root.left),this.diameterOfBinaryTree(root.right)
        )
    }
}
