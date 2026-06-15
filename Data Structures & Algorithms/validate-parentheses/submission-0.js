class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        const openers=['[','{','('];  
        // const closers=[']','}',')'];
        const pairs={
            '}':'{',
            ']':'[',
            ')':'('
        }
        let st=[];
        for(let i=0;i<s.length;i++){
            if(openers.includes(s[i]))st.push(s[i]);
            else{
                if(st[st.length-1]===pairs[s[i]]){
                    st.pop();
                }else return false;
            }
        }

        if(st.length===0)return true;
        return false;
    }
}
