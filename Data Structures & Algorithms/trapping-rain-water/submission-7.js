class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let leftPass=Array(height.length).fill(0);
        let rightPass=Array(height.length).fill(0);

        let maxL=0;
        for(let i=0;i<height.length;i++){
            maxL=Math.max(maxL,height[i]);
            leftPass[i]=Math.max(maxL,height[i]);
        }

        let maxR=0;
        for(let i=height.length-1;i>=0;i--){
            maxR=Math.max(maxR,height[i]);
            rightPass[i]=Math.max(maxR,height[i]);
        }
        let resWater=0;
        for(let i=0;i<height.length;i++){
            resWater+=Math.min(leftPass[i],rightPass[i])-height[i];
        }

        return resWater;
    }
}
