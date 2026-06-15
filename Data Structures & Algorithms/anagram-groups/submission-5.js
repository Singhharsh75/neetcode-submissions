class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    checkAnagram(str){
        let arr=Array(26).fill(0);
        for(let i=0;i<str.length;i++){
            arr[str.charCodeAt(i)-'a'.charCodeAt(0)]+=1;
        }

        return arr.join(',');
    }
    
    groupAnagrams(strs) {
        let strs2=[...strs]; let result=[];
        let set=new Set();
        for(let i=0;i<strs2.length;i++){
            let str1=this.checkAnagram(strs2[i]);
            if(set.has(str1))continue;
            set.add(str1);
            let res=[strs2[i]]
            for(let j=i+1;j<strs2.length;j++){
                if(this.checkAnagram(strs2[j])===str1){
                    res.push(strs2[j]);
                }
            }

            result.push(res);
        }

        return result;
    }
}
