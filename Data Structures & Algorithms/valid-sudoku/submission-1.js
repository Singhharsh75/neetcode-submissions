class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const map1=new Map();
        const map2=new Map();
        const map3=new Map();

        for(let i=0;i<9;i++){
            for(let j=0;j<9;j++){
                if(board[i][j]==='.')continue;

                const key=`${Math.floor(i/3)},${Math.floor(j/3)}`;
                if(map1.has(i)&&map1.get(i).has(board[i][j])||map2.has(j)&&map2.get(j).has(board[i][j])||map3.has(key)&&map3.get(key).has(board[i][j]))return false;

                if(!map1.has(i)) map1.set(i,new Set());
                if(!map2.has(j)) map2.set(j,new Set());
                if(!map3.has(key)) map3.set(key,new Set());

                map1.get(i).add(board[i][j]);
                map2.get(j).add(board[i][j]);
                map3.get(key).add(board[i][j])
            }
        }

        return true;
    }
}
