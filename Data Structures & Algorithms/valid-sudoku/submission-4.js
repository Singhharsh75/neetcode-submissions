class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rowMap=new Map()
        const colMap=new Map()
        const diagMap=new Map()

        for(let i=0;i<board.length;i++){
            for(let j=0;j<board[0].length;j++){
                if(board[i][j]===".")continue;

                const diagKey=`${Math.floor(i/3)},${Math.floor(j/3)}`

                if((rowMap.get(i) && rowMap.get(i).has(board[i][j]))||
                    (colMap.get(j) && colMap.get(j).has(board[i][j]))||
                    (diagMap.get(diagKey) && diagMap.get(diagKey).has(board[i][j]))){
                        return false;
                }

                if(!rowMap.has(i))rowMap.set(i,new Set())
                if(!colMap.has(j))colMap.set(j,new Set())
                if(!diagMap.has(diagKey))diagMap.set(diagKey,new Set())

                rowMap.get(i).add(board[i][j])
                colMap.get(j).add(board[i][j])
                diagMap.get(diagKey).add(board[i][j])
            }
        }
        return true;
    }
}
