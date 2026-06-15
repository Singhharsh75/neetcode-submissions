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
    dfs(root,res){
        if(!root)return;
        this.dfs(root.left,res);
        res[0]--;
        if((res[0])===0){
            res[1]=root.val;
            return;
        }
        this.dfs(root.right,res);
    }

    kthSmallest(root, k) {
        let res=Array(2).fill(0);
        res[0]=k;
        this.dfs(root,res);
        return res[1];
    }
}
