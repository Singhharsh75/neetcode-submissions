class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length>s2.length)return false;


        let s1Count=Array(26).fill(0);
        let s2Count=Array(26).fill(0);

        for(let i=0;i<s1.length;i++){
            s1Count[s1[i].charCodeAt(0)-'a'.charCodeAt(0)]++;
            s2Count[s2[i].charCodeAt(0)-'a'.charCodeAt(0)]++;
        }

        let matches=0;

        for(let i=0;i<26;i++){
            if(s1Count[i]===s2Count[i])matches++;
        }

        let l=0;

        for(let r=s1.length;r<s2.length;r++){
            if(matches===26)return true;

            let indexR=s2[r].charCodeAt(0)-'a'.charCodeAt(0);
            s2Count[indexR]++;

            if(s2Count[indexR]===s1Count[indexR])matches++;
            else if(s1Count[indexR]+1===s2Count[indexR])matches--;

            let indexL=s2[l].charCodeAt(0)-'a'.charCodeAt(0);
            s2Count[indexL]--;

            if(s2Count[indexL]===s1Count[indexL])matches++;
            else if(s1Count[indexL]-1===s2Count[indexL])matches--;

            l++;
        }

        return matches===26;
    }
}
