class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    permutation(s,stk,res){
        if(stk.length===s.length){
            res.push(stk);
            return;
        }
        for(let i=0;i<s.length;i++){
            if(stk.includes(s[i])){
                continue;
            }else{
                this.permutation(s,stk+s[i],res);
            }
        }
        return;
    }

    compare(s1,s2){
        let map1=new Map();
        for(let i=0;i<s1.length;i++){
            map1.set(s1[i],1+(map1.get(s1[i])||0));
        }
        for(let i=0;i<s2.length;i++){
            if(map1.has(s2[i])){
                let size=map1.get(s2[i]);
                if(size-1===0){
                    map1.delete(s2[i])
                }
                else{
                    map1.set(s2[i],size-1)
                }
            }
        }
        if(map1.size===0)return true;
        return false;
        
    }
    checkInclusion(s1, s2) {
        // let res=[];
        // this.permutation(s1,"",res);
        // console.log(res);
        let l=0; let r=s1.length-1; 
        while(r<s2.length){
            let str=s2.slice(l,r+1);
            console.log(str);
            if(this.compare(s1,str))return true;
            r++; l++;
        }
        return false;
    }
}
