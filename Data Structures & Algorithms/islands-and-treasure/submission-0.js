class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {

        const inf=2147483647;



        let q=[];
        for(let i=0;i<grid.length;i++){
            for(let j=0;j<grid[0].length;j++){
                if(grid[i][j] === 0)q.push([i,j,1])
            }
        }

        console.log(q)

        const direction=[
            [0,1],
            [0,-1],
            [1,0],
            [-1,0]
        ]


        while(q.length>0){
            const n=q.length;
            for(let l=0;l<n;l++){
                const [i,j,dist]=q.shift();
                for(let dir of direction ){
                    const new_i= i+dir[0];
                    const new_j= j+dir[1];

                    if(new_i < 0 || new_i >=grid.length || new_j < 0 || new_j >= grid[0].length || grid[new_i][new_j] === -1)continue;

                    if(grid[new_i][new_j] === inf){
                        grid[new_i][new_j] = Math.min(grid[new_i][new_j],dist)
                        q.push([new_i,new_j,dist+1])
                    }

                }
            }
        }

        return grid;
    }
}
