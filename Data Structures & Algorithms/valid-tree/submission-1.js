class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        let adj=Array.from({length:n},()=>[])
        for(let [src,des] of edges){
            adj[src].push(des)
            adj[des].push(src)
        }
        let set=new Set()
        function dfs(ind,parent){
            if(set.has(ind))return false;
            set.add(ind)
            for(let nei of adj[ind]){
                if(nei===parent)continue
                else if(!dfs(nei,ind))return false
            }
            return true;
        }

        return dfs(0,-1) && set.size===n
    }
}
