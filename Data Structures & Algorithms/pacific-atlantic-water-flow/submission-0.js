class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        let atl=Array.from({length:heights.length},()=>Array(heights[0].length).fill(false));
        let pac=Array.from({length:heights.length},()=>Array(heights[0].length).fill(false));

        const directions=[
            [0,1],
            [0,-1],
            [1,0],
            [-1,0]
        ]

        function dfs(i,j,map){
            map[i][j]=true;
            for(let dir of directions){
                const ni=i+dir[0];
                const nj=j+dir[1];

                if(ni >= 0 && ni < heights.length && nj >=0 && nj <heights[0].length && !map[ni][nj] && heights[i][j] <= heights[ni][nj]){
                    dfs(ni,nj,map);
                }
            }
        }

        for(let i=0;i<heights.length;i++){
            dfs(i,0,pac);
            dfs(i,heights[0].length-1,atl)
        }

        for(let j=0;j<heights[0].length;j++){
            dfs(0,j,pac);
            dfs(heights.length-1,j,atl);
        }


        let result=[];

        for(let i=0;i<heights.length;i++){
            for(let j=0;j<heights[0].length;j++){
                if(atl[i][j] && pac[i][j])result.push([i,j])
            }
        }

        return result;

    }
}
