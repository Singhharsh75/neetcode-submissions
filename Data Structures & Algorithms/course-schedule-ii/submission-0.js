class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        let indegree=Array(numCourses).fill(0);
        let adj=Array.from({length:numCourses},()=>[]);

        for(let [des, src] of prerequisites){
            indegree[des]++;
            adj[src].push(des);
        }

        let q=[];
        for(let i=0;i<numCourses;i++){
            if(indegree[i]===0)q.push(i);
        }

        let result=[];
        while(q.length){
            let node=q.shift();
            result.push(node);
            for(let nei of adj[node]){
                indegree[nei]--;
                if(indegree[nei]===0)q.push(nei);
            }
        }

        return result.length===numCourses?result:[];
    }
}
