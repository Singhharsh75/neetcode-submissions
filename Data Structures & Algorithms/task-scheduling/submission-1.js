class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const count={}
        for(let task of tasks){
            if(!count[task]){
                count[task]=0
            }
            count[task]+=1
        }

        let maxV =Math.max(...Object.values(count));
        let maxItem=Object.keys(count).find(item=>count[item]===maxV);
        let idle=(maxV-1)*n;

        console.log(maxV,maxItem,idle)
        for(let cnt in count){
            if(cnt!==maxItem){
                idle-=Math.min(maxV-1,count[cnt])
            }
        }

        return tasks.length + Math.max(0,idle)
    }
}
