class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let st=[];
        for(let i=0;i<tokens.length;i++){
            if(tokens[i]==='+'){
                st.push((+st.pop())+(+st.pop()));
            }else if(tokens[i]==='-'){
                let fir=+st.pop();
                let sec=+st.pop();
                st.push(sec-fir);
            }else if(tokens[i]==='*'){
                st.push((+st.pop())*(+st.pop()));
            }else if(tokens[i]==='/'){
                let fir=+st.pop();
                let sec=+st.pop();
                st.push(Math.trunc(sec/fir));
            }else{
                st.push(tokens[i]);
            }
        }

        return st[0];
    }
}
