class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit=0;
        // let arr=prices.sort((a,b)=>b-a);
        // if(arr===prices)return profit;

        let l=0; let r=0;
        while(r<prices.length){
            profit=Math.max(profit,prices[r]-prices[l]);
            if(prices[r]<prices[l]){
                l=r;
            }else{
                 r++;
            }  
        }

        return profit;

        return profit; 
    }
}
