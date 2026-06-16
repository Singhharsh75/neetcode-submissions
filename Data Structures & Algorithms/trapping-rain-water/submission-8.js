class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {

        if(!height || height.length===0)return 0;

        let l=0; let r=height.length-1;
        let leftMax=height[l]; let rightMax=height[r];


        let resultWater=0;

        while(l<r){
            if(leftMax<=rightMax){
                l++;
                leftMax=Math.max(leftMax,height[l]);
                resultWater+=leftMax-height[l]
            }else{
                r--;
                rightMax=Math.max(rightMax,height[r]);
                resultWater+=rightMax-height[r];
            }
        }
        return resultWater;
    }
}
