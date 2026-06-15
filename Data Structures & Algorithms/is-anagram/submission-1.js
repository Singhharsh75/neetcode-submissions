class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!==t.length)return false;
        let newMap=new Map();

        for(let i=0;i<s.length;i++){
            if(newMap.has(s[i])){
                let count=newMap.get(s[i]);
                newMap.set(s[i],count+1);
            }else{
                newMap.set(s[i],1);
            }
        }

        for(let i=0;i<t.length;i++){
            if(newMap.has(t[i])){
                let count=newMap.get(t[i]);
                if(count===0) return false;
                else{
                    newMap.set(t[i],count-1);
                }
            }else return false;
        }

        for(let i=0;i<s.length;i++){
            if(newMap.get(s[i])!==0)return false;
        }

        return true;

    }
}
