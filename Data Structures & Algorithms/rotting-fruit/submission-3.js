class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let fresh=0
        let q=[]
        for(let i=0;i<grid.length;i++){
            for(let j=0;j<grid[0].length;j++){
                if(grid[i][j]===1)fresh+=1
                if(grid[i][j]===2)q.push([i,j])
            }
        }

        const directions=[
            [0,1],
            [0,-1],
            [1,0],
            [-1,0]
        ]

        let time=0;
        while(q.length && fresh >0 ){
            ++time;
            let n=q.length;
            for(let i=0;i<n;i++){
                const node=q.shift()
                for(let dir of directions){
                    const ni=node[0]+dir[0]
                    const nj=node[1]+dir[1]

                    if(ni < 0 || ni >=grid.length || nj < 0 || nj >=grid[0].length)continue

                    if(grid[ni][nj]===1){
                        grid[ni][nj]=2;
                        fresh-=1
                        q.push([ni,nj])
                    }
                }
            }
        }

        return fresh === 0 ? time:-1
    }
}
