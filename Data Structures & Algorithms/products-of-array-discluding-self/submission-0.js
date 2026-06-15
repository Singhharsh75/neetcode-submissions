class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n=nums.length;
        let ans=new Array(n).fill(1);
        let arr_1=new Array(n).fill(1); let arr_2=new Array(n).fill(1);;
        for(let i=1;i<nums.length;i++){
            arr_1[i]=arr_1[i-1]*nums[i-1];
        }
        for(let i=n-2;i>=0;i--){
            arr_2[i]=arr_2[i+1]*nums[i+1];
        }
        for(let i=0;i<n;i++){
            ans[i]=arr_1[i]*arr_2[i];
        }

        return ans;
    }
}
