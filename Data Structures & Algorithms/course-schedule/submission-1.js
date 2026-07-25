class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let indegree=Array(numCourses).fill(0)
        let adj=Array.from({length:numCourses},()=>[])

        for(let [des,src] of prerequisites){
            adj[src].push(des)
            indegree[des]++
        }

        let q=[]
        for(let i=0;i<numCourses;i++){
            if(indegree[i]===0)q.push(i)
        }

        while(q.length){
            let sub=q.shift()
            for(let nei of adj[sub]){
                indegree[nei]--;
                if(indegree[nei]===0)q.push(nei)
            }
        }

        return Math.max(...indegree)===0?true:false

    }
}
