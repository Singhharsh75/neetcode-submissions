class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */

    permutationBack(nums,stk,res){
            if(nums.length===stk.length){
                res.push([...stk]);
                return;
            }
            for(let i=0;i<nums.length;i++){
                if(stk.includes(nums[i]))continue;
                stk.push(nums[i]);
                this.permutationBack(nums,stk,res);
                stk.pop();
            }
            return;
        }
    permute(nums) {
        let res=[]
        
        this.permutationBack(nums,[],res);
        return res;
    }
}
