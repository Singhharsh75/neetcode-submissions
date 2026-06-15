class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    sub(nums,index,dum,res){
        console.log(dum)
        if(index===nums.length){
            res.push([...dum]);
            return;
        }
        dum.push(nums[index]);
        this.sub(nums,index+1,dum,res);
        dum.pop();
        this.sub(nums,index+1,dum,res);
    }
    subsets(nums) {
        let dum=[]; let res=[];
        this.sub(nums,0,dum,res);
        return res;
    }
}
