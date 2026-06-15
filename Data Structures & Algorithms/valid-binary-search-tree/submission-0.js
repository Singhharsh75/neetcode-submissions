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
    isValidBST(root) {
        if(!root)return true;

        return (this.isValid(root.left,root.val,-Infinity) &&
                this.isValid(root.right,Infinity,root.val) )

    }

    isValid(root,max,min){
            if(!root)return true;
            if(root.val>min && root.val<max){
                return (
                    this.isValid(root.left,root.val,min) &&
                    this.isValid(root.right,max,root.val)
                )
            }else{
                return false;
            }
    }
}
