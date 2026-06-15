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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        if(!p&&!q)return true;
        if(p&&!q || !p&&q)return false;
        let st1=[p]; let st2=[q];
        while(st1.length>0 && st2.length>0){
            let node1=st1.pop();
            let node2=st2.pop();
            if(node1.val!==node2.val)return false;
            if(node1.left && node2.left){
                st1.push(node1.left);
                st2.push(node2.left);
            }
            if(node1.right && node2.right){
                st1.push(node1.right);
                st2.push(node2.right);
            }
            if(node1.left && !node2.left ||!node1.left && node2.left)return false;
            if(node1.right && !node2.right || !node1.right && node2.right)return false;
        }
        return true;
    }
}
