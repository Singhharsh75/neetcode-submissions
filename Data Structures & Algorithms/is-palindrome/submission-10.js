class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isAlphaNumeric(char){
        const ch=char.charCodeAt(0);
        if((ch>=48 && ch<=57)||(ch>=65 && ch<=90)||(ch>=97 && ch<=122)){
            return true;
        }
        return false;
    }
    isPalindrome(s) {
        let l=0; let r=s.length-1;

        while(l<r){
            while(!this.isAlphaNumeric(s[l]) && l<r)l++;
            while(!this.isAlphaNumeric(s[r]) && l<r)r--;

            if(s[l].toLowerCase()!==s[r].toLowerCase())return false;
            l++;
            r--;
        }

        return true;
    }
}
