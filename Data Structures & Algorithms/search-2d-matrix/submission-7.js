class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let index=0; let len=matrix[0].length;
        while(matrix[index][len-1]<target && index!=matrix.length-1)index++;


        let l=0; let r=len-1;
        while(l<=r){
            let mid=Math.floor((l+r)/2);
            if(target===matrix[index][mid])return true;
            else if(target>matrix[index][mid]){
                l=mid+1;
            }else{
                r=mid-1;
            }
        }
        return false;
    }
}
