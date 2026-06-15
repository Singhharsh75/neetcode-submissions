class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */

    check(board,y,x,mapRows,mapCols,mapBox){
        if(!mapRows.has(y)){
            mapRows.set(y,new Set());
            mapRows.get(y).add(board[y][x]);
        }else{
            if(mapRows.get(y).has(board[y][x]))return false;
            else{
                mapRows.get(y).add(board[y][x]);
            }
        }

        if(!mapCols.has(x)){
            mapCols.set(x,new Set());
            mapCols.get(x).add(board[y][x]);
        }else{
            if(mapCols.get(x).has(board[y][x]))return false;
            else{
                mapCols.get(x).add(board[y][x]);
            }
        }

        const cord=`${Math.floor(y/3)}${Math.floor(x/3)}`;
        if(!mapBox.has(cord)){
            mapBox.set(cord,new Set());
            mapBox.get(cord).add(board[y][x]);
        }else{
            if(mapBox.get(cord).has(board[y][x]))return false;
            else{
                mapBox.get(cord).add(board[y][x]);
            }
        }

        return true;
    }
    
    isValidSudoku(board) {
        let ROWS=board.length;
        let COLOUMNS=board[0].length;

        let mapRows=new Map();
        let mapCols=new Map();
        let mapBox=new Map();

        for(let y=0;y<ROWS;y++){
            for(let x=0;x<COLOUMNS;x++){
                if(board[y][x]!=="."){
                    if(!this.check(board,y,x,mapRows,mapCols,mapBox)){
                        return false;
                    }
                }
            }
        }

        return true;
    }
}
