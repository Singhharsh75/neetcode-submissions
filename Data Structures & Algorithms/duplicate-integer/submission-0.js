class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let newMap= new Map();
        for(let i=0;i<nums.length;i++){
            if(newMap.has(nums[i])){
                return true;
            }
            else
               newMap.set(nums[i],i);
        }
        return false;
    }
}
