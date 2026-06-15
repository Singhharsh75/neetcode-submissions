class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let map=new Map();
        for(let i=0;i<nums.length;i++){
            if(map.has(nums[i]))return nums[i];
            else{
                map.set(nums[i],i);
            }
        }

        return -1;
    }
}
