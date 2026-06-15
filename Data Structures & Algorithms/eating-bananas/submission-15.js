class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let min=1; let max=Math.max(...piles); let rate=max;
        while(min<=max){
            const mid=Math.floor((max+min)/2);
            let sum=0;
            for(let pile of piles){
                sum+=Math.ceil(pile/mid);
            }
            if(sum<=h){
                rate=Math.min(rate,mid);
                max=mid-1;
            }else{
                min=mid+1;
            }
        }
        return rate
    }
}
