class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let l=0; let r=0;
        while(r<nums.length){
            r=nums[nums[r]];
            l=nums[l];
            if(l===r){
                break;
            }
        }
        let l1=0;
        while(l1<nums.length){
            l=nums[l];
            l1=nums[l1];
            if(l===l1)return l;
        }
        return -1;
    }
}
