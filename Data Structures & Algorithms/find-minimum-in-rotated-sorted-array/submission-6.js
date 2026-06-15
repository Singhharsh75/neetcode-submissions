class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l=0; let r=nums.length-1; let min=Math.max(...nums);
        while(l<=r){
            const mid=Math.floor((l+r)/2);
            min=Math.min(min,nums[mid]);
            if(nums[mid]>=nums[l] && nums[l]>nums[r]){
                l=mid+1;
            }else{
                r=mid-1;
            }
        }

        return min;
    }
}
