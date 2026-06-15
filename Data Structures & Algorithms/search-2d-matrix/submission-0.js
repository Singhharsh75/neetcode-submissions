class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const row_length=matrix[0].length;
        let top=0; let bottom=matrix.length-1; let mid;
        while(top<=bottom){
            mid=Math.floor((bottom-top)/2)+top;
            if(matrix[mid][0]<=target && matrix[mid][row_length-1]>=target){
                break;
            }else if(matrix[mid][0]>target){
                bottom=mid-1;
            }else{
                top=mid+1;
            }
        }

        // if(!(top<=bottom))return false;

        let l=0;
        let r=row_length-1;

        while(l<=r){
            let middle=Math.floor((r+l)/2);
            if(matrix[mid][middle]===target)return true;
            else if(matrix[mid][middle]>target){
                r=middle-1;
            }else
               l=middle+1;
        }

        return false;

    }
}
