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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestBack(root,p,q){
        if(root.val===q.val || root.val===p.val ||
          (root.val>p.val && root.val<q.val)
        )return root;
        else if(root.val<p.val && root.val<q.val){
            return this.lowestCommonAncestor(root.right,p,q);
        }else{
            return this.lowestCommonAncestor(root.left,p,q);
        }
    }
    lowestCommonAncestor(root, p, q) {
        if(p.val<=q.val){
            return this.lowestBack(root,p,q);
        }else{
            return this.lowestBack(root,q,p);
        }
    }
}
