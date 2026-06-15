class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphaNumeric(ch){
        return (/[a-zA-z0-9]/).test(ch)
    }

    isPalindrome(s) {
        let l=0; let r=s.length-1;
        while(l<r){
            if(!this.isAlphaNumeric(s[l])){
                l++;
                continue;
            }
            if(!this.isAlphaNumeric(s[r])){
                r--;
                continue;
            }
            if(s[l].toLowerCase()!==s[r].toLowerCase())return false;
            l++; r--;
        }
        return true;
    }
}
