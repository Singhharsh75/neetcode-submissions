class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let res=Array(temperatures.length).fill(0);
        let dummy=[];
        let r=temperatures.length-1;
        while(r>0){
            dummy.unshift(temperatures[r--]);
            for(let i=0;i<dummy.length;i++){
                if(dummy[i]>temperatures[r]){
                    res[r]=i+1;
                    break;
                }else 
                  continue;
            }
        }
        return res;
    }
}
