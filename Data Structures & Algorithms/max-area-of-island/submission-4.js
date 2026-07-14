class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */

    // [[0,0,1,0,0,0,0,1,0,0,0,0,0]
    // ,[0,0,0,0,0,0,0,1,1,1,0,0,0]
    // ,[0,1,1,0,1,0,0,0,0,0,0,0,0]
    // ,[0,1,0,0,1,1,0,0,1,0,1,0,0]
    // ,[0,1,0,0,1,1,0,0,1,1,1,0,0]
    // ,[0,0,0,0,0,0,0,0,0,0,1,0,0]
    // ,[0,0,0,0,0,0,0,1,1,1,0,0,0]
    // ,[0,0,0,0,0,0,0,1,1,0,0,0,0]]


    dfs(grid,i,j){
        let res=1;
        grid[i][j]=0;
        const directions=[
            [0,1],
            [0,-1],
            [1,0],
            [-1,0]
        ];

        for(let dir of directions){
            let new_i=i+dir[0];
            let new_j=j+dir[1];

            if((new_i >= 0 && new_i < grid.length) &&
                (new_j >= 0 && new_j < grid[0].length) &&
                grid[new_i][new_j]=== 1
            ){
                res+=this.dfs(grid,new_i,new_j)
            }
        }
        return res;
    }

    maxAreaOfIsland(grid) {
        let area=0;
        for(let i=0;i<grid.length;i++){
            for(let j=0;j<grid[0].length;j++){
                if(grid[i][j]===1){
                    area=Math.max(area,this.dfs(grid,i,j))
                }
            }
        }
        return area;     
    }
}
