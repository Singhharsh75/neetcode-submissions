class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */

    dfs(grid,i,j,visited){

        visited[i][j]=1;

        const directions=[
            [0,1],
            [0,-1],
            [1,0],
            [-1,0]
        ]

        for( let dir of directions){

            let new_i=i+dir[0];
            let new_j=j+dir[1];

            if(
                (new_i>=0 && new_i<grid.length) &&
                (new_j>=0 && new_j<grid[0].length) &&
                visited[new_i][new_j] === 0 
                && grid[new_i][new_j]==="1"
            ){
                this.dfs(grid,new_i,new_j,visited);
            }

        }

    }

    numIslands(grid) {

        const visited=Array.from({length:grid.length},()=>Array(grid[0].length).fill(0));
        let count=0;
        for(let i=0;i<grid.length;i++){
            for(let j=0;j<grid[0].length;j++){
                if(visited[i][j]===0 && grid[i][j]==="1"){
                    count+=1;
                    this.dfs(grid,i,j,visited)
                }
            }
        }

        return count;

    }
}
