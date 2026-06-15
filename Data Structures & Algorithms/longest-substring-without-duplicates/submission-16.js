class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l=0; let r=0; let map=new Map(); let len=0;

        while(r<s.length){
            if(map.has(s[r])){
                len=Math.max(len,r-l);
                l=Math.max(l,map.get(s[r])+1);
            }
            map.set(s[r],r);
            r++;
        }
        if(l===0)return s.length;
        len=Math.max(len,r-l);
        return len;
    }
}
