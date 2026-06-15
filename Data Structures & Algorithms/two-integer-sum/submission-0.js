class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let newMap=new Map();
        for(let i=0;i<nums.length;i++){
            if(newMap.has(target-nums[i])){
                return [i,newMap.get(target-nums[i])]
            }else{
                newMap.set(nums[i],i);
            }
        }
        return [];
    }
}
