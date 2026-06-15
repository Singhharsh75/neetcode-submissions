class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const lefty= new Array(nums.length).fill(1); const righty=new Array(nums.length).fill(1);
        for(let i=1;i<nums.length;i++){
            lefty[i]=lefty[i-1]*nums[i-1];
        }
        for(let i=nums.length-2;i>=0;i--){
            righty[i]=righty[i+1]*nums[i+1];
        }

        let response=[];
        for(let i=0;i<nums.length;i++){
            response.push(lefty[i]*righty[i]);
        }
 
        return response;
    }
}
