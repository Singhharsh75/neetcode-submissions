class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let countT={};
        let windowS={};

        for(let c of t){
            countT[c]=1+(countT[c]||0)
        }

        let have=0;
        let need=Object.keys(countT).length;

        let l=0;
        let resLen=Infinity;
        let res=[-1,-1];

        for(let r=0;r<s.length;r++){
            windowS[s[r]]=1+(windowS[s[r]]||0);

            if(countT[s[r]]===windowS[s[r]])have++;

            while(have===need){
                if(r-l+1<resLen){
                    resLen=r-l+1;
                    res=[l,r]
                }

                windowS[s[l]]--;
                if(countT[s[l]]&& countT[s[l]]>windowS[s[l]])have--;

                l++;
            }
        }

        return t.length===0?"":s.slice(res[0],res[1]+1);
    }
}
