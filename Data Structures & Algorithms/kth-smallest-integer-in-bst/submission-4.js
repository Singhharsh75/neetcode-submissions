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
     * @param {number} k
     * @return {number}
     */
    postOrder(root,res){
        if(!root)return;

        this.postOrder(root.left,res);
        res.push(root.val);
        this.postOrder(root.right,res);

        return;
    }
    kthSmallest(root, k) {

        const res=[];
        this.postOrder(root,res);
        console.log(res);
        return res[k-1];

    }
}
