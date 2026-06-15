class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if(s.length!==t.length)return false;
        let map1=new Map();
        for(let i=0;i<s.length;i++){
            if(map1.has(s[i])){
                map1.set(s[i],map1.get(s[i])+1)
            }else
                map1.set(s[i],1);
        }

        for(let i=0;i<t.length;i++){
            if(map1.has(t[i])){
                let count=map1.get(t[i]);
                if(count===1)
                   map1.delete(t[i])
                else{
                    map1.set(t[i],count-1);
                }   
            }
        }

        if(map1.size===0)return true;

        return false;
    }
}
