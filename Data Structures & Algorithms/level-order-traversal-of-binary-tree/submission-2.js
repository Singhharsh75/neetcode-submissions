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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root)return [];
        const arr=[root]; let res=[];
        while(arr.length>0){
            let n=arr.length;
            let dummy=[];
            for(let i=0;i<n;i++){
                let node=arr.shift();
                dummy.push(node.val);
                if(node.left)arr.push(node.left);
                if(node.right)arr.push(node.right);
            }
            res.push(dummy);
        }
        return res;
    }
}
