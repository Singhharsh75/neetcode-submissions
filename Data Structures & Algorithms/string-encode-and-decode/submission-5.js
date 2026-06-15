class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let str="";
        for(let st of strs){
            str+=st+"#()";
        }
        return str
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let strs=[]; let l=0; let r=0;
        while(r<str.length){
            if(str.slice(r,r+3)==='#()'){
                strs.push(str.slice(l,r));
                l=r+3;
                r=r+3;
            }else{
            r+=1;
            }
        }

        return strs;
    }
}
