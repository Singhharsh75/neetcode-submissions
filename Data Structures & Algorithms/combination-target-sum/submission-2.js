class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */

    combinationSum(nums, target) {
        let res=[];
        nums=nums.sort((a,b)=>a-b);
        function backTracking(nums,target,i,stk,total){
            if(total===target){
                res.push([...stk]);
                return;
            }
            if(i>=nums.length||total>target)return;

            let st=[...stk];
            st.push(nums[i]);
            backTracking(nums,target,i,st,total+nums[i]);
            st.pop();
            backTracking(nums,target,i+1,st,total);
            return;
        }
        backTracking(nums,target,0,[],0);
        return res;
    }
}
