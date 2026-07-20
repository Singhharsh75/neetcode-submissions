class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     * 
     * [
     *  0:[1]
     *  1:[0,2]
     *  2:[1]
     *  3:[4]
     *  4:[3]
     * ]
     */
    countComponents(n, edges){
        const adj=Array.from({length:n},()=>[])
        for(let [src,des] of edges){
            adj[src].push(des)
            adj[des].push(src)
        }
        let result=0;
        let visited=new Set();

        function dfs(node){
            visited.add(node);

            for(let nei of adj[node]){
                if(!visited.has(nei)){
                    dfs(nei)
                }
            }
        }


        for(let i=0;i<n;i++){
            if(!visited.has(i)){
                result++;
                dfs(i)
            }
        }

        return result

    }
}
