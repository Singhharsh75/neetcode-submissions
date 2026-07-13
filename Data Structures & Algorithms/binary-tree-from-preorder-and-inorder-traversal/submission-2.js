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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        let preInd=0; let inInd=0;
        function dfs(limit){
            if(preInd>=preorder.length)return null;
            if(inorder[inInd]===limit){
                inInd++;
                return null;
            }

            const node=new TreeNode(preorder[preInd++]);
            node.left=dfs(node.val);
            node.right=dfs(limit);
            return node;
        }
        return dfs(Infinity);
    }
}
