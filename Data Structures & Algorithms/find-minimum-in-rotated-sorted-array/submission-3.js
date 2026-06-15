class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l=0; let r=nums.length-1; let min=Infinity;
        while(l<=r){
            const mid=Math.floor((l+r)/2);
            const tar=nums[mid];
            min=Math.min(min,tar);
            if(tar>nums[l] && tar>nums[r]){
                if(nums[l] <nums[r]){
                    r=mid-1
                }else{
                    l=mid+1;
                }
            }else if(tar<nums[l] && tar<nums[r]){
                if(nums[l] <nums[r]){
                    l=mid+1
                }else{
                    r=mid-1;
                }
            }else{
                if(nums[l] <nums[r]){
                    r=mid-1
                }else{
                    l=mid+1;
                }
            }
        }

        return min;
    }
}
