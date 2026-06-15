class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let low=1; let high=Math.max(...piles); let min=high;

        while(low<=high){
            const rate=Math.floor((low+high)/2);
            let sum=0;
            for(let pile of piles){
                sum+=Math.ceil(pile/rate);
            }

            if(sum<=h){
                min=Math.min(min,rate);
                high=rate-1;
            }else{
                low=rate+1;
            }
        }

        return min;
        
    }
}
