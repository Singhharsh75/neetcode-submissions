class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res={};
        for(let str of strs){
            let arr=Array(26).fill(0);
            for(let char of str){
                arr[char.charCodeAt(0)-'a'.charCodeAt(0)]+=1;
            }

            let key=arr.join(',');

            if(!res[key]){
                res[key]=[]
            }
            res[key].push(str);
        }

        return Object.values(res)
    }
}
