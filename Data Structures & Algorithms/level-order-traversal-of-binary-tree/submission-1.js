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
        const queue=[root]; let res=[];
        if(!root)return res;
        while(queue.length>0){
            let temp=[]; let n=queue.length;
            for(let i=0;i<n;i++){
                const node=queue.shift();
                temp.push(node.val);
                if(node.left)queue.push(node.left);
                if(node.right)queue.push(node.right);
            }
            res.push([...temp]);
        }

        return res;
    }
}
