class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        if(!wordList.includes(endWord))return 0;
        let map={}
        wordList.push(beginWord)
        for(let word of wordList){
            for(let j=0;j<word.length;j++){
                let pattern = word.substring(0,j)+'#'+word.substring(j+1)
                if(!map[pattern]){
                    map[pattern]=[]
                }
                map[pattern].push(word)
            }
        }
        const visit=new Set([beginWord])
        let q=[beginWord]
        let res=1;
        while(q.length){
            let len=q.length
            for(let i=0;i<len;i++){
                const word=q.shift();
                if(word===endWord)return res

                for(let j=0;j<word.length;j++){
                    let nword=word.substring(0,j)+"#"+word.substring(j+1)

                    for(let nei of map[nword]){
                        if(!visit.has(nei)){
                            q.push(nei)
                            visit.add(nei)
                        }
                    }
                }
            }
            res++;
        }

        return 0;

    }
}
