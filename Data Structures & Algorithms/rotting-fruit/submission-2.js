class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let fresh=0;
        let q=[];
        let minutes=0;
        for(let i=0;i<grid.length;i++){
            for(let j=0;j<grid[0].length;j++){
                if(grid[i][j]===1)fresh++;
                if(grid[i][j]===2)q.push([i,j]);
            }
        }

        const direction=[
            [0,1],
            [0,-1],
            [1,0],
            [-1,0]
        ]

        while(fresh >0 && q.length){
            let n=q.length;
            for(let l=0;l<n;l++){
                const [i,j]=q.shift();
                for(let dir of direction){
                    const new_i=i+dir[0];
                    const new_j=j+dir[1];

                    if(new_i < 0 || new_j <0 || new_i >= grid.length || new_j >=grid[0].length)continue;

                    if(grid[new_i][new_j] === 1){
                        fresh--;
                        grid[new_i][new_j]=2;
                        q.push([new_i,new_j]);
                    }
                }
            }
            minutes+=1;
        }

        return fresh===0?minutes:-1
    }
}
