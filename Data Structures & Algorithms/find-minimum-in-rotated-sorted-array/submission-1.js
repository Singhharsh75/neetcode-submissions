class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let[l,r]=[0,nums.length-1]; let min=999;
        while(l<=r){
            const mid=Math.floor((r+l)/2);
            min=Math.min(nums[mid],min);
            if(nums[l]>nums[r] && nums[l]<=nums[mid]){
                l=mid+1;
            }else{
                r=mid-1;
            }
        }

        return min;
    }
}
