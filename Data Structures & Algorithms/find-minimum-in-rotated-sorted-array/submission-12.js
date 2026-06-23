class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    //[3,4,5,6,1,2]

    findMin(nums) {
        let l=0; let r=nums.length-1; let min=Infinity;
        while(l<=r){
            let mid=Math.floor((l+r)/2);
            min=Math.min(min,nums[mid]);
            if(nums[r]<nums[l] && nums[mid]>=nums[l]){
                l=mid+1;
            }else{
                r=mid-1;
            }
        }
        return min;
    }
}
