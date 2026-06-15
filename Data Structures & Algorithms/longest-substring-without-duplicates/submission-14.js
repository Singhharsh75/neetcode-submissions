class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    //abcabcbb
    //bbbbb
    //dvdf
    //pwwkew
    lengthOfLongestSubstring(s) {
        let l=0; let r=0; let len=0; let map=new Map();
        while(r<s.length){
            
            if(map.has(s[r])){
                // l=Math.max(map.get(s[r])+1,l);
                while(l<=map.get(s[r])){
                    map.delete(s[l])
                    l++;
                }
            }
                len=Math.max(len,r-l+1);
                map.set(s[r],r);
                r++;
        }

        return len;
    }
}
