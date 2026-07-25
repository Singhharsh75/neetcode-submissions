class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {

        const directions=[
            [0,1],
            [0,-1],
            [1,0],
            [-1,0]
        ]

        let area=0;

        function dfs(i,j,c){
            let res=1
            grid[i][j]=0
            for(let dir of directions){
                const ni =i + dir[0]
                const nj= j + dir[1]
                if(ni < 0 || ni >=grid.length || nj < 0 || nj >=grid[0].length)continue;

                if(grid[ni][nj]===1){
                    res+=dfs(ni,nj,c+1)
                }
            }
            return res
        }

        for(let i=0;i<grid.length;i++){
            for(let j=0;j<grid[0].length;j++){
                if(grid[i][j]===1){
                    area=Math.max(area,dfs(i,j))
                }
            }
        }

        return area;
    }
}
