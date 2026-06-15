class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    two(nums,target,res){
        let l=0; let r=nums.length-1;
        while(l<r){
            const sum=nums[l]+nums[r];
            if(sum===target){
                res.push([-target,nums[l],nums[r]]);
                while(nums[l]==nums[l+1])l++;
                while(nums[r]==nums[r-1])r--;
                l++; r--;
            }else if(sum>target){
                r--;
            }else{
                l++;
            }
        }
        return;
    }
    threeSum(nums) {
        let res=[];
        nums.sort((a,b)=>a-b);
        for(let i=0;i<nums.length-2;i++){
            this.two(nums.slice(i+1),-nums[i],res);
            while(nums[i]===nums[i+1])i++;
        }

        return res;
    }
}
