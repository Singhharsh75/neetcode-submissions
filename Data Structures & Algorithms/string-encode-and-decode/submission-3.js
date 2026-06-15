class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(strs.length===0) return 'empty';
        let s='';
        for(let i=0;i<strs.length;i++){
            if(i!==strs.length-1) s+=strs[i]+'/';
            else s+=strs[i];
        }
        if(s==='')
          return '/'
        else  
          return s;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str==='empty')
          return [];
        else if(str==='/') return [""];  
        else  
          return str.split('/');
    }
}
