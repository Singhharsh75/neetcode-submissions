class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let resultStr="";
        for(const str of strs){
            resultStr+=str+"$#"
        }
        return resultStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result=[]; let st=""; let i=0;
        while(i<str.length){
            if((str[i]+str[i+1])=="$#"){
                result.push(st);
                st="";
                i+=2;
            }else{
                st+=str[i];
                i+=1;
            }
        }

        return result;
    }
}
