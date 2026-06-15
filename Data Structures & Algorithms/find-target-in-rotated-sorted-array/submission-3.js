class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let [first,last]=[0,nums.length-1];
        while(first<=last){
            let mid=Math.floor((first+last)/2);
            if(nums[mid]===target)return mid;
            if(nums[mid]>nums[last]){
                if(target<=nums[last]|| target>nums[mid]){
                    first=mid+1;
                }else{
                    last=mid-1;
                }
            }else{
                if(nums[mid]<=target && nums[last]>=target){
                    first=mid+1;
                }else{
                    last=mid-1;
                }
            }
        }
        return -1;
    }
}
