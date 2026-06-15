class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    dfs(board,y,x,index,word){
        if(index===word.length)return true;
        if(y<0 || x<0 || x >=board[0].length || y>=board.length || board[y][x]!==word[index] || board[y][x]==='#')return false;

        board[y][x]='#';
        let res= this.dfs(board,y+1,x,index+1,word)||
                 this.dfs(board,y-1,x,index+1,word)||
                 this.dfs(board,y,x+1,index+1,word)||
                 this.dfs(board,y,x-1,index+1,word);         
        if(res)return true;         
        board[y][x]=word[index];
        return;
    }

    exist(board, word) {
        for(let y=0;y<board.length;y++){
            for(let x=0;x<board[0].length;x++){
                if(this.dfs(board,y,x,0,word))return true;
            }
        }

        return false;
    }
}
