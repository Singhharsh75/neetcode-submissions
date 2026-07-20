class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {

        const directions=[
            [0,1],
            [0,-1],
            [1,0],
            [-1,0]
        ]
        function dfs(i,j){
            board[i][j]='T'
            for(let dir of directions){
                const ni=i+dir[0]
                const nj=j+dir[1]

                if(ni >=0 && ni < board.length && nj >=0 && nj<board[0].length && board[ni][nj]==="O"){
                    dfs(ni,nj)
                }
            }
        }

        for(let i=0;i<board.length;i++){
            if(board[i][0]==="O")dfs(i,0)
            if(board[i][board[0].length-1]==='O')dfs(i,board[0].length-1)
        }

        for(let j=0;j<board[0].length;j++){
            if(board[0][j]==="O")dfs(0,j)
            if(board[board.length-1][j]==='O')dfs(board.length-1,j)
        }

        for(let i=0;i<board.length;i++){
            for(let j=0;j<board[0].length;j++){
                if(board[i][j]==='O')board[i][j]="X"
                else if(board[i][j]==="T")board[i][j]="O"
            }
        }
    }
}
