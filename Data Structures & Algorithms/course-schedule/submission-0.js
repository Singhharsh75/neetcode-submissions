class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let indegree=Array(numCourses).fill(0);
        let adjacents=Array.from({length:numCourses},()=>[]);

        for(let [des, src] of prerequisites){
            indegree[des]++;
            adjacents[src].push(des);
        }

        let q=[];
        for(let i=0;i<numCourses;i++){
            if(indegree[i]===0)q.push(i);
        }

        let finish=0;

        while(q.length){
            const item=q.shift();
            finish++;

            for(let nei of adjacents[item]){
                indegree[nei]--;
                if(indegree[nei]===0){
                    q.push(nei);
                }
            }
        }

        return finish===numCourses
    }
}
