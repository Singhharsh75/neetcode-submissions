class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k){
        let map=new Map(); let res=[];
        for(let i=0;i<nums.length;i++){
            map.set(nums[i],1+(map.get(nums[i])||0))
        }
        const arr=Array.from(map).sort((a,b)=>b[1]-a[1]);
        for(let i=0;i<k;i++){
            res.push(arr[i][0]);
        }

        return res;
    }
}
