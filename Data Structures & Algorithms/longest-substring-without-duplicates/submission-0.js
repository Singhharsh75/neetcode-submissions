class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l=0; let r=0; let newMap=new Map(); let max=0;
        while(r<s.length){
            if(newMap.has(s[r])){
                let newL=newMap.get(s[r]);
                while(l<=newL){
                    newMap.delete(s[l]); l++;
                }
            }
            newMap.set(s[r],r); max=Math.max(r-l+1,max);
            r++;
        }

        return max;
    }
}
