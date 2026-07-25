class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {

        const directions=[
            [0,1],
            [0,-1],
            [1,0],
            [-1,0]
        ]
        function dfs(i,j){
            grid[i][j] = "0";
            for(let dir of directions){
                const ni = i + dir[0]
                const nj = j + dir[1]

                if(ni < 0 || ni >= grid.length || nj < 0 || nj >= grid[0].length)continue;

                if(grid[ni][nj] === "1"){
                    dfs(ni,nj)
                }
            }
        }

        let count=0
        for(let i=0;i<grid.length;i++){
            for(let j=0;j<grid[0].length;j++){
                if(grid[i][j] === "1"){
                    count+=1
                    dfs(i,j)
                }
            }
        }

        return count;
    }
}
