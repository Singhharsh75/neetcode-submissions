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
    kthSmallest(root, k) {
        let q=new Queue();
        q.push(root); let arr=[];
        while(!q.isEmpty()){
            let node=q.pop();
            arr.push(node.val);
            if(node.left)q.push(node.left);
            if(node.right)q.push(node.right);
        }
        arr=arr.sort((a,b)=>a-b);
        return arr[k-1];
    }
}
