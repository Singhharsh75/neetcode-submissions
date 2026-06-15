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
    isValidBSTBack(root,min,max){
        if(!root)return true;
        if(root.val<=min || root.val>=max){
            return false;
        }
        return (this.isValidBSTBack(root.left,min,root.val) && this.isValidBSTBack(root.right,root.val,max));
    }
    isValidBST(root) {
        if(!root)return true;

        return this.isValidBSTBack(root,-Infinity,Infinity);
    }
}
