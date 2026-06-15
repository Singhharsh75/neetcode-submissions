class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permDfs(nums,index,dum,res){
        if(nums.length===dum.length){
            res.push([...dum]);
            return;
        }

        for(let i=0;i<nums.length;i++){
            if(dum.includes(nums[i]))continue;
            dum.push(nums[i]);
            this.permDfs(nums,index+1,dum,res);
            dum.pop();
        }


    }
    permute(nums) {
        let res=[]; let dum=[];
        this.permDfs(nums,0,dum,res);

        return res;
    }
}
