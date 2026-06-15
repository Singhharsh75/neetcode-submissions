class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
       const n=height.length;
       let maxR=Array(n).fill(0);
       let maxL=Array(n).fill(0);

       maxR[0]=height[0]; maxL[n-1]=height[n-1];

       for(let i=1;i<n;i++){
        maxR[i]=Math.max(maxR[i-1],height[i]);
       } 

       for(let i=n-2;i>=0;i--){
        maxL[i]=Math.max(maxL[i+1],height[i]);
       }
       console.log(maxR,maxL);
       let max=0;
       for(let i=0;i<n;i++){
          max+=(Math.min(maxR[i],maxL[i])-height[i]);
       }

       return max;
    }
}
