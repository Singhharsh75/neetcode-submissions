class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        const res=Array.from({length:nums.length+1},()=>[])
        const result=[]
        const count={}
        for(let num of nums){
            count[num]=1+(count[num]||0)
        }

        for(let [value,cnt] of Object.entries(count)){
            res[cnt].push(value)
        }
        for(let i=res.length-1;i>=0;i--){
            for(let arr of res[i]){
                result.push(arr);
                if(result.length===k)return result;
            }
        }

    }
}
