class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const arr=Array.from({length:nums.length+1},()=>[]);
        const res={};

        for(let num of nums){
            res[num]=(res[num]||0)+1;
        }

        console.log(res);

        for(let [num,count] of Object.entries(res)){
            arr[count].push(parseInt(num))
        }

        console.log(arr);

        let result=[];
        for(let i=arr.length-1;i>0;i--){
            for(let item of arr[i]){
                result.push(item);
                if(result.length===k)return result;
            }
        }
    }
}
