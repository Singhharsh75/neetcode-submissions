class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let final_arr=[]; nums=nums.sort((a,b)=>a-b);
        for(let i=0;i<nums.length-2;i++){
            let first=nums[i];
            let left=i+1; let right=nums.length-1;
            while(left<right){
                let sum=first+nums[left]+nums[right]
                if(sum===0){
                    final_arr.push([first,nums[left],nums[right]].sort());
                    left++; right--;
                }else if(sum>0){
                    right--;
                }else{
                    left++;
                }
            }
        }

        const stringified=final_arr.map(JSON.stringify);
        let set=new Set(stringified);
        return Array.from(set,JSON.parse);
    }
}
