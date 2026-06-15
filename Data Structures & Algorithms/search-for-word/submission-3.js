class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */

    
    exist(board, word) {
        const visited=Array.from({length:board.length},()=>Array(board[0].length).fill(false));
        function wordBack(y,x,i){
            if(i===word.length)return true;
            if(y>=board.length ||y<0 || x<0 ||x>=board[0].length)return false;
            if(visited[y][x])return false;
            if(board[y][x]!==word[i])return false;

            visited[y][x]=true;

            const res= wordBack(y+1,x,i+1)||wordBack(y-1,x,i+1)||
                     wordBack(y,x+1,i+1)||wordBack(y,x-1,i+1);

            visited[y][x]=false;         

            return res;  
        }
        for(let y=0;y<board.length;y++){
            for(let x=0; x<board[0].length;x++){
                if(wordBack(y,x,0))return true;
            }
        }

        return false;
    }
}
