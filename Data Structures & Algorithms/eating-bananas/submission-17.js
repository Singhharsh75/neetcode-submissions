class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l=1;
        let r=Math.max(...piles); let minK=Infinity;
        while(l<=r){
            let mid=Math.floor((l+r)/2);
            let sum=0;
            for(let pile of piles){
                sum+=Math.ceil(pile/mid)
            }

            if(sum>h){
                l=mid+1;
            }else{
                minK=Math.min(minK,mid)
                r=mid-1;
            }
        }
        return minK 
    }
}
