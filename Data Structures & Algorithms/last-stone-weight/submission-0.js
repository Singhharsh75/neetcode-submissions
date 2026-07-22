class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const heap=new MaxPriorityQueue()
        for(let stone of stones){
            heap.enqueue(stone)
        }


        while(heap.size()>1){
                let first=heap.dequeue();
                let second=heap.dequeue();

                if(second!==first){
                    heap.enqueue(first-second)
                }
        }

        return heap.size()===1?heap.dequeue():0;
    }
}
