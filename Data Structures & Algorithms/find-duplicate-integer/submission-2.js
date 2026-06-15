class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let tort=0;
        let hare=0;
        while(tort<nums.length){
            tort=nums[tort];
            hare=nums[nums[hare]];
            if(tort===hare)break;
        }
        let tort2=0;
        while(tort<nums.length){
            tort=nums[tort];
            tort2=nums[tort2];
            if(tort===tort2){
                return tort;
            }
        }

        return -1;
    }
}
