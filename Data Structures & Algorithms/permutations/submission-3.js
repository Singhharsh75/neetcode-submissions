class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    dfs(nums,dum,res){
        if(dum.length===nums.length){
            res.push([...dum]);
            return;
        }
        
        for(let i=0;i<nums.length;i++){
            if(!dum.includes(nums[i])){
                dum.push(nums[i]);
                this.dfs(nums,dum,res);
                dum.pop();
            }
        }

    }

    permute(nums) {
        let res=[];
        this.dfs(nums,[],res);

        return res;
    }
}
