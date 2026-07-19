class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     * 
     * [
     *  0:[1,2,3]
     *  1:[0,4]
     *  2:[0]
     *  3:[0]
     *  4:[1]
     * ]
     * 
     *
     * 
     * [
     *  0:[1]
     *  1:[0,2,3,4]
     *  2:[1,3]
     *  3:[1,2]
     *  4:[1]
     * ]
     * 
     * 
     */
    validTree(n, edges) {

        if(edges.length > n-1)return false;
        const adj=Array.from({length:n},()=>[]);

        for(let [src,des] of edges){
            adj[src].push(des)
            adj[des].push(src)
        }

        const set = new Set()
        function dfs(node,parent){
            if(set.has(node))return false;

            set.add(node)

            for(let nei of adj[node]){
                if(nei === parent)continue;
                else if(!dfs(nei,node)) {
                    return false
                }
            }
            return true
        }

        return dfs(0,-1) && set.size === n

    }
}
