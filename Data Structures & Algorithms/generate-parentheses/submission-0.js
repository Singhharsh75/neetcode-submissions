class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let res=[];
        this.gen(n,0,0,'',res);
        return res;
    }

    gen(n,ln,rn,s,res){
        if(ln===rn && n===ln){
            res.push(s);
            return;
        }

        if(ln<n){
            this.gen(n,ln+1,rn,s+'(',res);
        }

        if(rn<ln){
            this.gen(n,ln,rn+1,s+')',res);
        }
    }
}
