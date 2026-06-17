class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let map=new Map();
        let l=0; let r=0; let max=0;
        let maxF=0;
        while(r<s.length){
            map.set(s[r],1+(map.get(s[r])||0));
            maxF=Math.max(maxF,map.get(s[r]));
            while(r-l+1-maxF>k){
                map.set(s[l],map.get(s[l])-1)
                l++;
            }
            max=Math.max(max,r-l+1);
            r++;
        }
        return max;
    }
}
