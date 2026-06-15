class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaBack(grid,y,x,direction){
        if(x<0 ||x>=grid[0].length || y<0 ||y>=grid.length ||grid[y][x]===0)return 0;
        grid[y][x]=0;
        let res=1;
        for(let dir of direction){
            res+=this.maxAreaBack(grid,y+dir[0],x+dir[1],direction);
        }
        return res;
        
    }
    maxAreaOfIsland(grid) {
        const len=grid.length;
        const wid=grid[0].length;

        const direction=[
            [0,1],[0,-1],
            [1,0],[-1,0]
        ]
        let area=0;
        for(let y=0;y<len;y++){
            for(let x=0;x<wid;x++){
                area=Math.max(area,this.maxAreaBack(grid,y,x,direction))
            }
        }

        return area;
    }
}
