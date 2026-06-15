class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rows=new Map();
        let cols=new Map();
        let squares=new Map();

        for(let i=0;i<board.length;i++){
            for(let j=0;j<board[0].length;j++){
                let cell=board[i][j];
                if(cell==='.')continue;
                if(rows.get(i)?.has(cell)||cols.get(j)?.has(cell)||squares.get(Math.floor(i/3)*3+Math.floor(j/3))?.has(cell))
                   return false;
                else{
                    rows.set(i,new Set(rows.get(i)).add(cell));
                    cols.set(j,new Set(cols.get(j)).add(cell));
                    squares.set(Math.floor(i/3)*3+Math.floor(j/3),new Set(squares.get(Math.floor(i/3)*3+Math.floor(j/3))).add(cell));
                }
            }
        }

        return true;
    }
}
