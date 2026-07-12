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
        let leftMax=Math.max(this.dfs(root.left,max),0);
        let rightMax=Math.max(this.dfs(root.right,max),0);
        max[0]=Math.max(max[0],root.val+leftMax+rightMax);
        return root.val+ Math.max(leftMax,rightMax);
    }
    maxPathSum(root) {
        let max=[root.val];
        this.dfs(root,max);
        return max[0];
    }
}
