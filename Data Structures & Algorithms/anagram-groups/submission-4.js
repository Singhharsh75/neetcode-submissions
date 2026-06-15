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
        let map=new Map()
        for(let str of strs){
            const str1=this.checkAnagram(str)
            console.log(str1);
            map.set(str1,[...(map.get(str1)||[]),str])
        }

        return [...map.values()]



    }
}
