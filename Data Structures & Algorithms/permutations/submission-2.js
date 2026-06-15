class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permDfs(nums,dum,res){
        if(nums.length===dum.length){
            res.push([...dum]);
            return;
        }

        for(let i=0;i<nums.length;i++){
            if(dum.includes(nums[i]))continue;
            dum.push(nums[i]);
            this.permDfs(nums,dum,res);
            dum.pop();
        }


    }
    permute(nums) {
        let res=[]; let dum=[];
        this.permDfs(nums,dum,res);

        return res;
    }
}
