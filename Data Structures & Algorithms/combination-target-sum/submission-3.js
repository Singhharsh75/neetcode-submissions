class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combo(nums,target,index,dum,res){
        if(target<0 || index===nums.length)return;
        if(target===0){
            res.push([...dum]);
            return;
        }
        dum.push(nums[index]);
        this.combo(nums,target-nums[index],index,dum,res);
        dum.pop();
        this.combo(nums,target,index+1,dum,res);

    }
    combinationSum(nums, target) {
        let dum=[]; let res=[];
        this.combo(nums,target,0,dum,res);

        return res;
    }
}
