class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        function check(st1,st2){
            let map=new Map();
            for(let i=0;i<st1.length;i++){
                map.set(st1[i],1+(map.get(st1[i])||0));
            }
             for(let i=0;i<st2.length;i++){
                if(map.has(st2[i])){
                    if(map.get(st2[i])===1)map.delete(st2[i]);
                    else map.set(st2[i],map.get(st2[i])-1)
                }
            }

            if(map.size===0)return true;

            return false;
        }

        if(s1.length>s2.length)return false;
        else if(s1.length===s2.length){
            return check(s1,s2);
        }else{
            let r=s1.length-1;
            let l=0;
            while(r<s2.length){
                if(check(s1,s2.slice(l,r+1)))return true;
                else{
                    l++; r++;
                }
            }
        }

        return false;
    }
}
