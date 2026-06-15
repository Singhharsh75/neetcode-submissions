class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length===0)return 0;
       let arr1=nums.sort((a,b)=>a-b);
       let set=new Set(arr1);
       let arr=Array.from(set);

       console.log(arr);

       let l=0; let r=1; let max=-1;

       while(r<nums.length){
        if(arr[r]-arr[r-1]===1){
            r++;
        }else{
            max=Math.max(r-l,max);
            l=r
            r++;
        }
       }
       if(l===0){
        max=Math.max(max,r-l)
       }

       return max; 
    }
}
