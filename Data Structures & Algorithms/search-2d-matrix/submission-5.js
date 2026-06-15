class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let len=matrix[0].length;
        let depth=0;
        while(depth<matrix.length && matrix[depth][len-1]<target){
            depth++;
        }

        if(depth >=matrix.length)return false;
        let l=0; let r=len-1;
        while(l<=r){
            const mid=Math.floor((l+r)/2);
            if(matrix[depth][mid]===target)return true;
            else if(matrix[depth][mid]>target){
                r=mid-1;
            }else{
                l=mid+1;
            }
        }
        return false;
    }
}
