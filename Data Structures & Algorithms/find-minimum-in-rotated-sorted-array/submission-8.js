class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let n=nums.length;
        let low=0; let high=n-1; let min=Infinity;
        while(low<=high){
            let mid=Math.floor((low+high)/2);
            min=Math.min(min,nums[mid]);
            if(nums[mid]>=nums[low] && nums[low]>nums[high]){
                low=mid+1;
            }else{
                high=mid-1;
            }
        }

        return min;
    }
}
