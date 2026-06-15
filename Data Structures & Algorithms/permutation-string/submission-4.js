class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    permutation(s1,s2){
        let map=new Map();
        for(let i=0;i<s1.length;i++)map.set(s1[i],1+(map.get(s1[i])||0));

        for(let i=0;i<s2.length;i++){
            let count=map.get(s2[i]);
            if(count===1){
                map.delete(s2[i]);
            }else{
                map.set(s2[i],map.get(s2[i])-1);
            }
        }

        if(map.size===0)return true;

        return false;
    }
    checkInclusion(s1, s2) {
        if(s2.length<s1.length)return false;
        let windowLen=s1.length;

        for(let i=0;i<=s2.length-windowLen;i++){
            if(this.permutation(s1,s2.slice(i,i+windowLen)))return true;
        }
        return false;

    }
}
