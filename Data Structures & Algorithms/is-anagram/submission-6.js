class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!==t.length)return false;

        let map=new Map();
        for(let char of s){
            map.set(char, 1+(map.get(char)||0))
        }

        for(let char of t){
            if(!map.has(char))return false;

            let count=map.get(char);
            if(count===1){
                map.delete(char)
            }else{
                map.set(char,count-1);
            }
        }

        return map.size===0;
    }
}
