class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let min=prices[0];
        let max=min;
        let value=0;

        for(let i=0;i<prices.length;i++){
            if(i!=prices.length-1&&prices[i]<=min){
                min=max=prices[i];
            }else if(max<prices[i]){
                max=prices[i];
            }
            value=max-min>value?max-min:value;
        }

        return value;
    }
}
