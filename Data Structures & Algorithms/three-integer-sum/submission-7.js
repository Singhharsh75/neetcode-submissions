class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    checkDuplicates(arr){
        let uniques=[];
        let recorded={};
        for(let ar of arr){
            let str=JSON.stringify(ar);
            if(recorded[str])continue;
            uniques.push(ar);
            recorded[str]=true;
        }
        return uniques;
    }
    twoSum(nums,target,index,res){
        let map=new Map();
        for(let i=0;i<nums.length;i++){
            if(i===index){
                continue;
            }else{
                if(map.has(target-nums[i])){
                    res.push([-target, nums[i],target-nums[i]].sort((a,b)=>a-b));
                }else{
                    map.set(nums[i],i);
                }
            }
        }
        return;
    }
    threeSum(nums) {
        let res=[];
        nums=nums.sort((a,b)=>a-b);
        for(let i=0;i<nums.length;i++){
            this.twoSum(nums,-nums[i],i,res);
            while(i+1<nums.length && nums[i]===nums[i+1]){
                i++;
            }
        }
        res=this.checkDuplicates(res);
        return res;
    }
}
