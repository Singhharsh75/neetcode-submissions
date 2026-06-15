class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let leftArr=Array(height.length).fill(0);
        let rightArr=Array(height.length).fill(0);

        let res=0;

        rightArr[0]=height[0];
        for(let i=1;i<height.length;i++){
            rightArr[i]=Math.max(rightArr[i-1],height[i]);
        }
        leftArr[height.length-1]=height[height.length-1];
        for(let i=height.length-2;i>=0;i--){
            leftArr[i]=Math.max(leftArr[i+1],height[i]);
        }

        console.log(leftArr,rightArr);

        for(let i=0;i<height.length-1;i++){
            res+=Math.min(leftArr[i],rightArr[i])-height[i];
        }

        return res;
    }
}
