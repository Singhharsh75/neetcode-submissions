class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map1= new Map();
        for(let i=0;i<nums.length;i++){
            if(map1.has(nums[i]))return true;
            map1.set(nums[i],i);
        }

        return false;
    }
}
