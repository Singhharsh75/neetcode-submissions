class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    

    solveNQueens(n) {
        let arr=[];
        for(let i=0;i<n;i++){
            arr.push(Array(n).fill('.'));
        }
        let res=[];

        function checkPos(arr,i,j,n){
                let y1=0;
                while(y1<i){
                    if(arr[y1][j]==='Q')return false;
                    y1++;
                }
                
                let x=j; let y=i;
                while(y>=0){
                    if(arr[y][x]==='Q')return false;
                    y--; x--;
                }
                x=j; y=i;
                while(y>=0){
                    if(arr[y][x]==='Q')return false;
                    y--;
                    x++;
                }
                return true;
            }

        function backTrack(arr,i,n){
            if(i===n){
                res.push(arr.map(item=>item.join('')));
                return;
            }
            for(let x=0;x<n;x++){
                if(checkPos(arr,i,x,n)){
                    arr[i][x]='Q';
                    backTrack(arr,i+1,n);
                    arr[i][x]='.'
                }
            }
            return;
        }
        backTrack(arr,0,n);

        return res;
    }
}
