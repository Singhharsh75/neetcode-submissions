class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l=1; let r=Math.max(...piles); let k=r;
        
        while(l<=r){
            let rate=Math.floor((l+r)/2);
            let sum=0;
            for(let i=0;i<piles.length;i++){
                sum+=Math.ceil(piles[i]/rate);
            }

            if(sum<=h){
                k=Math.min(k,rate);
                r=rate-1;
            }else{
                l=rate+1;
            }
        }

        return k;
    }
}
