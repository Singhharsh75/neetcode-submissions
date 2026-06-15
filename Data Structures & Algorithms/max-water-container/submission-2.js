class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l=0; let r=heights.length-1; let max=-1;
        while(l<r){
            let vol= Math.min(heights[l],heights[r])*(r-l);
            max=Math.max(max,vol);
            if(heights[r]>heights[l]){
                l++;
            }else{
                r--;
            }
        }

        return max;
    }
}
