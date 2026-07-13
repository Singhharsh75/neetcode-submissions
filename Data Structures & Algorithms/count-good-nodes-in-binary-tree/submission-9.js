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
    dfs(root,max){
        if(!root)return 0;
        let res=0;
        if(max<=root.val){
            max=root.val;
            res=1;
        }
        res+=this.dfs(root.left,max)+this.dfs(root.right,max);

        return res;

    }
    goodNodes(root) {
        let max=[root.val];
        return this.dfs(root,max);
    }
}
