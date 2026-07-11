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
    serialize(root) {
        let res=[];
        this.serializeDfs(root,res);
        return res.join(",");
    }

    serializeDfs(root,res){
        if(!root){
            res.push("N");
            return 
        }
        res.push(root.val);
        this.serializeDfs(root.left,res);
        this.serializeDfs(root.right,res);
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        let index={val:0};
        const values=data.split(',')
        return this.deserializeDfs(values,index);
    }

    deserializeDfs(data,index){
        if(data[index.val]==="N"){
            index.val+=1;
            return null;
        }
        const node=new TreeNode(data[index.val]);
        index.val+=1;
        node.left=this.deserializeDfs(data,index);
        node.right=this.deserializeDfs(data,index);

        return node;
    }
}
