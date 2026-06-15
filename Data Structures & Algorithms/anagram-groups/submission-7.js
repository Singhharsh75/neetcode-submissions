class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map={}
        for(let str of strs){
            const arr=Array(26).fill(0)
            for(let char of str){
                arr[char.charCodeAt(0)-'a'.charCodeAt(0)]+=1
            }
            const hashStr=arr.join(',');
            if(!map[hashStr]){
                map[hashStr]=[str]
            }else{
                map[hashStr].push(str)
            }
        }

        return Object.values(map)
    }
}
