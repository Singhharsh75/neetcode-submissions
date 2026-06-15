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
    maxDepth(root) {
        if(!root)return 0;
        let st= [];
        st.push([root,0]); let res=0;
        while(st.length>0){
            const stack_entry=st.pop();
            const node=stack_entry[0];
            const count=stack_entry[1];
            res=Math.max(res,count);
            if(node.left)st.push([node.left,count+1]);
            if(node.right)st.push([node.right,count+1])
        }

        return res+1;
    }
}
