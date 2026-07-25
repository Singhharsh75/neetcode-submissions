class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */


    pacificAtlantic(heights) {
        let ROWS=heights.length;
        let COLS=heights[0].length;
        let pacMap=Array.from({length:ROWS},()=>Array(COLS).fill(false))
        let atlMap=Array.from({length:ROWS},()=>Array(COLS).fill(false))

        const directions=[
            [0,1],
            [0,-1],
            [1,0],
            [-1,0]
        ]

        function dfs(i,j,oceans){
            oceans[i][j]=true
            for(let dir of directions){
                const ni=i+dir[0]
                const nj=j+dir[1]

                if(ni < 0 || ni >=ROWS || nj <0 || nj >=COLS || oceans[ni][nj])continue;

                if(heights[i][j]<=heights[ni][nj]){
                    dfs(ni,nj,oceans)
                }
            }
        }

        for(let i=0;i<ROWS;i++){
            dfs(i,0,pacMap)
            dfs(i,COLS-1,atlMap)
        }

        for(let j=0;j<COLS;j++){
            dfs(0,j,pacMap)
            dfs(ROWS-1,j,atlMap)
        }

        let result=[]
        for(let i=0;i<ROWS;i++){
            for(let j=0; j<COLS;j++){
                if(atlMap[i][j] && pacMap[i][j]){
                    result.push([i,j])
                }
            }
        }

        return result
    }
}
