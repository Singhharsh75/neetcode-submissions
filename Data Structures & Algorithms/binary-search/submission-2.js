class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l=0; let r=nums.length-1;
        while(l<=r){
            const mid_ind=Math.floor((l+r)/2);
            if(nums[mid_ind]===target){
                return mid_ind;
            }else if(nums[mid_ind]>target){
                r=mid_ind-1;
            }else{
                l=mid_ind+1;
            }
        }

        return -1;
    }
}
