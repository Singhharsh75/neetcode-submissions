class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */

    numsIslandBack(grid,y,x,direction,visited){
        if(y>=grid.length || y<0 ||x<0 ||x>=grid[0].length || visited[y][x] || grid[y][x]==="0")return;

        visited[y][x]=true;
        grid[y][x]="0";
        for(let dir of direction){
            this.numsIslandBack(grid,y+dir[0],x+dir[1],direction,visited);
        }

    }
    numIslands(grid) {
        const len=grid.length;
        const wid=grid[0].length;

        const direction=[
            [0,1],[0,-1],
            [1,0],[-1,0]
        ]

        const visited= Array.from({length:len},()=>Array(wid).fill(false));
        console.log(visited);
        let islands=0;
        for(let y=0;y<len;y++){
            for(let x=0;x<wid;x++){
                if(grid[y][x]==="1"){
                    islands++;
                    this.numsIslandBack(grid,y,x,direction,visited);
                }
            }
        }

        return islands;
    }
}
