class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let len=matrix[0].length; let i;
        for(i=0;i<matrix.length;i++){
            if(i===matrix.length-1 && target>matrix[i][len-1]){
                return false;
            }
            if(target<=matrix[i][len-1])break;
        }
        let l=0;let r=len-1;
        while(l<=r){
            const mid_ind=Math.floor((l+r)/2);
            const tar=matrix[i][mid_ind];
            if(tar===target){
                return true;
            }else if (target<tar){
                r=mid_ind-1;
            }else{
                l=mid_ind+1;
            }
        }
        return false;
    }
}
