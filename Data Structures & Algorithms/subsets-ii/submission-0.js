class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */

    compare(res,arr){
        for(let c of res){
            if(JSON.stringify(c)===JSON.stringify(arr))return true;
        }
        return false;
    }
    subsetback(nums,index,stk,res){
        if(index===nums.length){
            let st=[...stk].sort((a,b)=>a-b);
            if(!this.compare(res,st)){
                res.push([...st]);
            }
            return;
        }
        let stl=[...stk];
        stl.push(nums[index]);
        this.subsetback(nums,index+1,stl,res);
        stl.pop();
        this.subsetback(nums,index+1,stl,res);
        return;
    }
    subsetsWithDup(nums) {
        let res=[];
        this.subsetback(nums,0,[],res);
        return res;
    }
}
