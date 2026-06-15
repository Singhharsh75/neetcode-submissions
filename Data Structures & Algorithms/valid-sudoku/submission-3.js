class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const colMap=new Map();
        const rowMap=new Map();
        const diagMap=new Map();

        for(let i=0;i<board.length;i++){
            for(let j=0;j<board[0].length;j++){
                if(board[i][j]==='.')continue;
                if(!rowMap.has(i)){
                    rowMap.set(i,[])
                }
                if(!colMap.has(j)){
                    colMap.set(j,[])
                }
                const diagKey=`${Math.floor(i/3)},${Math.floor(j/3)}`
                if(!diagMap.has(diagKey)){
                    diagMap.set(diagKey,[])
                }

                if(rowMap.get(i)?.includes(board[i][j]))return false;
                rowMap.set(i,[...rowMap.get(i),board[i][j]])
                
                if(colMap.get(j)?.includes(board[i][j]))return false;
                colMap.set(j,[...colMap.get(j),board[i][j]])

                if(diagMap.get(diagKey)?.includes(board[i][j]))return false;
                diagMap.set(diagKey,[...diagMap.get(diagKey),board[i][j]])

            }
        }

        return true;
    }
}
