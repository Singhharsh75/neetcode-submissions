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
    diameterBack(root,res){
        if(!root)return 0;
        const right=this.diameterBack(root.right,res);
        const left=this.diameterBack(root.left,res);
        res[0]=Math.max(res[0],left+right);

        return 1+Math.max(left,right);

    }
    diameterOfBinaryTree(root) {
        let res=[0];
        this.diameterBack(root,res);
        return res[0];
    }
}
