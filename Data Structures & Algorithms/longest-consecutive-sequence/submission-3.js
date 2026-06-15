class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set=new Set(nums);
        let max=0;
        for(let i=0;i<nums.length;i++){
            let len=1;
            while(set.has(nums[i]-len)){
                len+=1;
            }
            max=Math.max(max,len);
        }

        return max;
    }
}
