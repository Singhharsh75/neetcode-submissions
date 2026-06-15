class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */

    threeSum(nums) {
        nums.sort((a,b)=>a-b);
        let l=0;
        let res=[];
        while(l<=nums.length-3){
            if(nums[l]>0)break;
            while(l>0 && nums[l]==nums[l-1])l++;
            let left=l+1;
            let right=nums.length-1;
            while(left<right){
                let sum=nums[l]+nums[left]+nums[right]
                if(sum===0){
                    res.push([nums[l],nums[left],nums[right]]);
                    left++;
                    right--;
                    while(left<right && nums[left]===nums[left-1])left++;
                }else if(sum>0){
                    right--;
                }else{
                    left++;
                }
            }
            l++;
        }
        return res;
    }
}
