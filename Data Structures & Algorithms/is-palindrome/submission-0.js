class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphaNum(character){
        const code= character.charCodeAt(0);
        return(
            code>=65&&code<=90||code>=97&&code<=122||code>=48&&code<=57
        );
    }

    isPalindrome(s) {
        let r=s.length-1; let l=0;
        while(r>l){
            while(r>l&&!this.isAlphaNum(s[r]))r--;
            while(l<r&&!this.isAlphaNum(s[l]))l++;
            if(s[r].toLowerCase()!==s[l].toLowerCase())return false;
            r--; l++;
        }

        return true;
    }
}
