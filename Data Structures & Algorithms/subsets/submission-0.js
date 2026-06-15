class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */

    backtracking(nums,i,stk,res){
            if(i===nums.length){
                res.push([...stk]);
                return;
            }
            let st=[...stk];
            st.push(nums[i]);
            this.backtracking(nums,i+1,st,res);
            st.pop();
            this.backtracking(nums,i+1,st,res);
            return;
        }
    subsets(nums) {
        let res=[];
        
        this.backtracking(nums,0,[],res);

        return res;
    }
}
