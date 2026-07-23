class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let map={}
        const heap= new MinPriorityQueue();
        for(let [x,y] of points){
            let distance=Math.sqrt(x*x+y*y)
            if (!map[distance])map[distance]=[]
            map[distance].push([x,y])
            heap.enqueue(distance)
        }
        console.log(map,heap)
        const result=[];
        while(!heap.isEmpty() && result.length<k){
            const distance=heap.dequeue();
            result.push(map[distance].pop())
        }
        return result
    }
}
