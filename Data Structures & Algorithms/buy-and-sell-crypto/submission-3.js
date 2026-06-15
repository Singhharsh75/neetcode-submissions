class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l=0; let r=0;
        let profit=0;
        while(r<prices.length){
            if(prices[r]>=prices[l]){
                profit=Math.max(profit,prices[r]-prices[l]);
                r++;
            }else{
                l++;
            }
        }

        return profit;
    }
}
