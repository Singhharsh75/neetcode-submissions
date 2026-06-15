class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let newMap=new Map();  let result_arr=[];
        for(let i=0;i<nums.length;i++){
            if(newMap.has(nums[i])){
                let count=newMap.get(nums[i]);
                newMap.set(nums[i],count+1);
            }else{
                newMap.set(nums[i],1);
            }
        }

        
           let j=k;
           while((j--)>0){
            let count=0; let max_element=0;
            newMap.forEach((value,key)=>{
                if(value>count){
                    count=value;
                    max_element=key;
                }
            })
            result_arr.push(max_element);
            newMap.delete(max_element);
           }

        return result_arr;
         

    }
}
