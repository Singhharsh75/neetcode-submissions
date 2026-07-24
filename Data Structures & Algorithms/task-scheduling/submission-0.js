class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        let count={};
        for(let task of tasks){
            if(!count[task]){
                count[task]=0
            }
            count[task]+=1
        }
        
        let maxHeap=new MaxPriorityQueue()
        for(let cnt in count){
            maxHeap.enqueue(count[cnt])
        }
        let que= [];
        let time=0;
        while(maxHeap.size()> 0 || que.length>0){
            time++;
            if(maxHeap.size()>0){
                const cnt= maxHeap.dequeue()-1
                if(cnt!==0)que.push([cnt,time+n])
            }

            if(que.length>0 && que[0][1]===time){
                maxHeap.enqueue(que.shift()[0])
            }
        }
        return time
    }
}
