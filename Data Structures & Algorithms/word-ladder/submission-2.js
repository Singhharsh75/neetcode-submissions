class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
      if(!wordList.includes(endWord) || beginWord ===endWord)return 0
      wordList.push(beginWord)
      let patterns={}
      for(let word of wordList){
        for(let i=0;i<word.length;i++){
            let pattern = word.substring(0,i) + "#" + word.substring(i+1)
            if(!patterns[pattern]){
                patterns[pattern]=[]
            }
            patterns[pattern].push(word)
        }
      }
      let q=[[beginWord,1]]
      const visited=new Set([beginWord])
      while(q.length){
        let n=q.length;
        for(let i=0;i<n;i++){
            let [word,dis]=q.shift()
            visited.add(word)
            if(word===endWord)return dis;
            for(let j=0;j<word.length;j++){
                let patt = word.substring(0,j) + "#" + word.substring(j+1)
                console.log(patt)
                for(let pt of patterns[patt]){
                    if(!visited.has(pt))q.push([pt,dis+1])
                } 
            }
        }
      }

      return 0;  
    }
}
