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
     * @return {boolean}
     */

    depth(root){
        if(!root)return 0;
        return 1+Math.max(this.depth(root.left),this.depth(root.right));
    }
    isBalanced(root) {
        if(!root)return true;
         let st=[root];
         while(st.length>0){
            let node=st.pop();
            if(node.left||node.right){
                let leftHeight=1+this.depth(node.left);
                let rightHeight=1+this.depth(node.right);
                if(Math.abs(leftHeight-rightHeight)>1)return false;
            }
            if(node.left)st.push(node.left);
            if(node.right)st.push(node.right);
         }

         return true;
    }
}
