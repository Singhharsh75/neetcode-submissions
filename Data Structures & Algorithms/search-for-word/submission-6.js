class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    dfs(y,x,ind,board,word){
        if(ind===word.length)return true;
        if(x<0 || x >=board[0].length || y<0 || y>=board.length || board[y][x]!==word[ind] || board[y][x]==='#'){
            return false;
        }

        board[y][x]='#';
        let res= this.dfs(y+1,x,ind+1,board,word) ||
                 this.dfs(y-1,x,ind+1,board,word) ||
                 this.dfs(y,x+1,ind+1,board,word) ||
                 this.dfs(y,x-1,ind+1,board,word);

        board[y][x]=word[ind];

        return res;         

    }


    exist(board, word) {
        for(let y=0;y<board.length;y++){
            for(let x=0;x<board[0].length;x++){
                if(this.dfs(y,x,0,board,word)){
                    return true;
                }
            }
        }

        return false;
    }
}
