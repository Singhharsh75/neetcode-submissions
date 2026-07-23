class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const heap= new MinPriorityQueue(points=>points[0]);
        for(let [x,y] of points){
            let distance=Math.sqrt(x*x+y*y)
            heap.enqueue([distance,x,y])
        }
        console.log(heap)
        const result=[];
        while(!heap.isEmpty() && result.length<k){
            const [_,x,y]=heap.dequeue();
            result.push([x,y])
        }
        return result
    }
}
