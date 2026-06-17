class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l=0; let r=0; let map=new Map(); let max=0;
        while(r<s.length){
            if(map.has(s[r])){
                l=Math.max(l,map.get(s[r])+1);
                map.delete(s[r]);
            }
            max=Math.max(max,r-l+1);
            map.set(s[r],r);
            r++;
        }
        return max;
    }
}
