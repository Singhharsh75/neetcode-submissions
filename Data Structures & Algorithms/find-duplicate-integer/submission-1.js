class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let [tort,hare]=[0,0];
        while(true){
            tort=nums[tort];
            hare=nums[nums[hare]];
            if(tort===hare)break;
        }
        let newTort=0;
        while(true){
            newTort=nums[newTort];
            tort=nums[tort];
            if(newTort===tort)return tort;
        }

        return -1;
    }
}
