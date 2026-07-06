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
        const stack=root?[root]:[]; let res=[];
        while(stack.length>0){
            let n=stack.length;
            let result=[];
            for(let i=0;i<n;i++){
                let node=stack.shift();
                result.push(node.val);
                node.left && stack.push(node.left);
                node.right && stack.push(node.right);
            }
            res.push(result);
        }
        return res
    }
}
