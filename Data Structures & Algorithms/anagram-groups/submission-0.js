class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        function isAnagram(s,t){
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
                        if(count===0)return false;
                        else{
                            newMap.set(t[i],count-1)
                        }
                    }else return false;
                }
                return true;
            }



        let final_arr=[];
        for(let i=0;i<strs.length;i++){
            if(!final_arr.flat().includes(strs[i])){
                let curr_arr=[strs[i]];
                for(let j=i+1;j<strs.length;j++){
                    if(isAnagram(strs[i],strs[j])){
                        curr_arr.push(strs[j])
                    }
                }
                final_arr.push(curr_arr);
            }
        }
        return final_arr;
    }

}
