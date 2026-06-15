class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l=0; let r=0; let map=new Map(); let max=0;
        while(r<s.length){
            map.set(s[r],1+(map.get(s[r])||0))
            let len=r-l+1;
            if(len-Math.max(...map.values())>k){
                map.set(s[l],map.get(s[l])-1);
                l++;
            }
            len=r-l+1;
            max=Math.max(len,max);
            r++;
        }
        return max;
    }
}
