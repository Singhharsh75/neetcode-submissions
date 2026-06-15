class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    
    isCheck(board,y,x,n){
        for(let i=y-1;i>=0;i--){
            if(board[i][x]==='Q')return false;
        }

        for(let i=y-1,j=x-1;i>=0&&j>=0;i--,j--){
            if(board[i][j]==='Q')return false;
        }

        for(let i=y-1,j=x+1;i>=0&&j<n;i--,j++){
            if(board[i][j]==='Q')return false;
        }

        return true;
    }

    backtrack(board,index,n,res){

        if(index===n){
            res.push([...board.map(bo=>bo.join(''))]);
            return;
        }
        for(let x=0;x<n;x++){
            if(this.isCheck(board,index,x,n)){
                board[index][x]='Q'
                this.backtrack(board,index+1,n,res);
                board[index][x]='.'
            }
        }
    }

    solveNQueens(n) {
        const board=Array.from({length:n},()=>Array(n).fill('.'));
        let res=[];
        this.backtrack(board,0,n,res);
        return res;
    }
}
