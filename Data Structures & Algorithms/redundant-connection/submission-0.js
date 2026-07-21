class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const n=edges.length;
        const indegree=Array(n+1).fill(0)
        const adj=Array.from({length:n+1},()=>[])

        for(let [src,des] of edges){
            adj[src].push(des);
            adj[des].push(src);
            indegree[src]++
            indegree[des]++
        }
        let q=[]
        for(let i=0;i<=n;i++){
            if(indegree[i]===1)q.push(i)
        }

        while(q.length){
            const node=q.shift()
            indegree[node]--;
            for(let nei of adj[node]){
                indegree[nei]--;
                if(indegree[nei]===1)q.push(nei)
            }
        }

        for(let i=n-1;i>=0;i--){
            const [src,des]=edges[i];

            if(indegree[src]===2 && indegree[des]){
                return [src,des]
            }
        }

        return []
    }
}
