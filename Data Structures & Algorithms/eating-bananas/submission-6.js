class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let lower=1; let high=Math.max(...piles); let min=Infinity;
        while(lower<=high){
            const rate=Math.floor((lower+high)/2); let hours=0;
            for(let i=0;i<piles.length;i++){
                hours+=Math.ceil(piles[i]/rate);
            }
            if(hours<=h){
                min=Math.min(min,rate);
                high=rate-1;
            }else{
                lower=rate+1;
            }
        }

        return min;
    }
}
