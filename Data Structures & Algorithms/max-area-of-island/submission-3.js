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


    dfs(grid,i,j,c,max,count){
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
                count[0]+=1;
                this.dfs(grid,new_i,new_j,c+1,max,count)
            }
        }
        max[0]=Math.max(max[0],count[0]);
    }

    maxAreaOfIsland(grid) {
        let max=[0];
        for(let i=0;i<grid.length;i++){
            for(let j=0;j<grid[0].length;j++){
                if(grid[i][j]===1){
                    let c=1; let count=[1];
                    this.dfs(grid,i,j,c,max,count);
                }
            }
        }
        return max[0];     
    }
}
