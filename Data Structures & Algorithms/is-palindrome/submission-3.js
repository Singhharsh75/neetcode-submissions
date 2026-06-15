class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s=s.replaceAll(" ",'');
        console.log(s);

        let l=0; let r=s.length-1;
        while(l<r){
            if(s[l] && (/[^A-Za-z0-9]/).test(s[l])){l++;continue;}
            if(s[r] && (/[^A-Za-z0-9]/).test(s[r])){r--;continue;}
            if(s[l].toLowerCase()!==s[r].toLowerCase())return false;
            l++; r--;
        }
        return true;
    }
}
