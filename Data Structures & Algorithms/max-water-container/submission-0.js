class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let water=0; let l=0; let r=heights.length-1;
        while(l<r){
            let prod=Math.min(heights[l],heights[r])*(r-l);
            if(prod>water){
                water=prod;
            }
            if(heights[l]>heights[r])r--;
            else l++
        }

        return water;
    }
}
