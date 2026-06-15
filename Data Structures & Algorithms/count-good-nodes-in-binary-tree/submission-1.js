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
    goodDfs(root,max,arr){
       if(!root)return;
       if(root.val>=max){
            arr[0]++;
            max=root.val;
       }
       this.goodDfs(root.left,max,arr);
       this.goodDfs(root.right,max,arr);
       return;
    }
    goodNodes(root) {
        if(!root)return 0;
        const arr=[0];
        this.goodDfs(root,-Infinity,arr);
        return arr[0];
    }
}
