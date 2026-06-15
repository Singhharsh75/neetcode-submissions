class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let map=new Map();
        for(let ch of s){
            map.set(ch,(map.get(ch)||0)+1);
        }

        for(let ch of t){
            let count=map.get(ch);
            if(count===1){
                map.delete(ch);
            }else{
                map.set(ch,count-1);
            }
        }
        if(map.size===0)return true;

        return false;
    }
}
