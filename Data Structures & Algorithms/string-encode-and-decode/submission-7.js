class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let resultStr="";

        for(let str of strs){
            resultStr+=String(str.length)+"#"+str;
        }

        return resultStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i=0;  
        let result=[];
        while(i<str.length){
            let j=i;
            while(str[j]!=='#'){
                j++;
            }
            const len=parseInt(str.substring(i,j));
            i=j+1;
            j=i+len;
            result.push(str.substring(i,j));
            i=j;
        }
        return result;
    }
}
