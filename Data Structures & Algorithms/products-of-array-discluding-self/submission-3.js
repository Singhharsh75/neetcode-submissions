class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let leftPass=Array(nums.length).fill(1);
        let rightPass=Array(nums.length).fill(1);

        // leftPass[0]=nums[0]; rightPass[nums.length-1]=nums[nums.length-1]

        for(let i=1;i<nums.length;i++){
            leftPass[i]=leftPass[i-1]*nums[i-1];
        }

        for(let j=nums.length-2;j>=0;j--){
            rightPass[j]=rightPass[j+1]*nums[j+1]
        }

        console.log(leftPass,rightPass);

        for(let i=0;i<nums.length;i++){
            leftPass[i]*=rightPass[i];
        }
        return leftPass;
    }
}
