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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    dfsS(root,res){
        if(!root){
            res.push("N");
            return;
        }
        res.push(root.val);
        this.dfsS(root.left,res);
        this.dfsS(root.right,res)
    }
    serialize(root) {
        let res=[];
        this.dfsS(root,res);
        return res.join(',');
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */

    dfsD(values,index){
        if(values[index.val]==="N"){
            index.val+=1;
            return null;
        }
        const node=new TreeNode(values[index.val++]);
        node.left=this.dfsD(values,index)
        node.right=this.dfsD(values,index);
        return node;
    }

    deserialize(data) {
        const values=data.split(',');
        const index={val:0};
        return this.dfsD(values,index);
    }
}
