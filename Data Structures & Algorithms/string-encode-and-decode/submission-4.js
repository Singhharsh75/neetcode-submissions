class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let s='';
        for(let i=0;i<strs.length;i++){
            s+=strs[i]+'/'
        }
        return s;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const response=[];
        let l=0; 
        for(let i=0;i<str.length;i++){
            if(str[i]==='/'){
                response.push(str.slice(l,i));
                l=i+1
            }
        }

        return response;
    }
}
