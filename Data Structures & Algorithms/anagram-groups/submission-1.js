class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    isAnagram(s,t){
        if(s.length!==t.length)return false;
        let map1=new Map();
        for(let i=0;i<s.length;i++){
            if(map1.has(s[i])){
                map1.set(s[i],map1.get(s[i])+1)
            }else{
                map1.set(s[i],1);
            }
        }
        for(let i=0;i<t.length;i++){
            if(map1.has(t[i])){
                let count=map1.get(t[i]);
                if(count===1){
                    map1.delete(t[i])
                }else{
                    map1.set(t[i],count-1);
                }
            }
        }
        if(map1.size===0)return true;
        return false;
    }

    groupAnagrams(strs) {
        const arr_sol=[];
        for(let i=0;i<strs.length;i++){
            if(strs[i]==='_')continue;
            const dummy=[strs[i]];
            for(let j=i+1;j<strs.length;j++){
                if(this.isAnagram(strs[i],strs[j])){
                    dummy.push(strs[j])
                    strs[j]='_'
                }
            }

            arr_sol.push(dummy);
        }

        return arr_sol;
    }
}
