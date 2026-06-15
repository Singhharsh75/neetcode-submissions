class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map1=new Map();
        for(let i=0;i<nums.length;i++){
            if(map1.has(target-nums[i]))
              return [i,map1.get(target-nums[i])]
            else{
                map1.set(nums[i],i);
            }  
        }
    }
}
