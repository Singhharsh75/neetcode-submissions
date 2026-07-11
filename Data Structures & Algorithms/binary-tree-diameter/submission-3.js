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
        let leftDepth=this.dfs(root.left,max);
        let rightDepth=this.dfs(root.right,max);
        max[0]=Math.max(max[0],leftDepth+rightDepth);
        return 1+Math.max(leftDepth,rightDepth);
    }
    diameterOfBinaryTree(root) {
        let max=[0];
        this.dfs(root,max);
        return max[0];
    }
}
