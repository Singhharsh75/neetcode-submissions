class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const inf=2147483647
        const q=[]
        const directions=[
            [0,1],
            [0,-1],
            [1,0],
            [-1,0]
        ]
        for(let i=0;i<grid.length;i++){
            for(let j=0;j<grid[0].length;j++){
                if(grid[i][j]===0){
                    q.push([i,j,1])
                }
            }
        }


        while(q.length){
            let n=q.length;
            for(let i=0;i<n;i++){
                const node=q.shift()
                for(let dir of directions){
                    const ni= node[0]+dir[0]
                    const nj=node[1]+dir[1]

                    if(ni < 0 || ni>=grid.length || nj < 0 || nj >=grid[0].length)continue

                    if(grid[ni][nj]===inf){
                        grid[ni][nj]=node[2]
                        q.push([ni,nj,node[2]+1])
                    }
                }
            }
        }
    }
}
