class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s=s.split(" ").join(""); let w='';
        for(let i=0;i<s.length;i++){
            if(!(/[^A-Za-z0-9]/).test(s[i])){
                w+=s[i].toLowerCase();
            }
        }
        let l=0;let r=w.length-1;
        console.log(w);
        while(l<r){
            if(w[l]!==w[r])return false;
            l++;r--;
        }
        return true;
    }
}
