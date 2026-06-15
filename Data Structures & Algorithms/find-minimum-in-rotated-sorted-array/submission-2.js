class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let [first,last]=[0,nums.length-1]; let least=999;
        while(first<=last){
            let mid=Math.floor((first+last)/2);
            least=Math.min(least,nums[mid]);
            if(nums[mid]<nums[last]){
                last=mid-1;
            }else{
                first=mid+1;
            }
        }

        return least;
    }
}
