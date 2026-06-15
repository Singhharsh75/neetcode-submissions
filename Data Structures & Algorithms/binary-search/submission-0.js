class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l=0; let r=nums.length-1; 
        while(l<=r){
            const ind= Math.floor((r-l)/2) +l;
            if(nums[ind]===target){
                return ind;
            }
            else if(nums[ind]>target){
                r=ind-1;
            }else{
                l=ind+1
            }
        }

        return -1;
    }
}
