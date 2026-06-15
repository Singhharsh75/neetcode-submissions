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

    dfs(root,arr){
        if(!root)return;
        this.dfs(root.left,arr);
        arr[0]--;
        if(arr[0]===0){
            arr[1]=root.val;
            return;
        }
        this.dfs(root.right,arr);
        return;
    }
    kthSmallest(root, k) {
        const arr= Array(2).fill(0);
        arr[0]=k;
        this.dfs(root,arr);
        return arr[1];
    }
}
