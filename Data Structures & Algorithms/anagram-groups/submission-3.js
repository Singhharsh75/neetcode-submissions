class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    anagrams(s1,s2){
        let map=new Map();
        for(let ch of s1){
            map.set(ch,(map.get(ch)||0)+1);
        }

        for(let ch of s2){
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
    groupAnagrams(strs) {

        let res=[];
        for (let i=0;i<strs.length;i++){
            if(strs[i]==="*()")continue;
            let dummy=[strs[i]];
            for(let j=i+1;j<strs.length;j++){
                if(strs[j]==="*()")continue;
                if(this.anagrams(strs[i],strs[j])){
                    dummy.push(strs[j]);
                    strs[j]="*()";
                }
            }
            res.push(dummy);
        }

        return res;
    }
}
