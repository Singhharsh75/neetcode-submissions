class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    backTracking(digit,map,index,str,res){
        if(index===digit.length){
            res.push(str);
            return;
        }
        for(let chr of map[digit[index]]){
            this.backTracking(digit,map,index+1,str+chr,res);
        }
        return;
    }
    letterCombinations(digits) {
        let res=[];
        if(digits.length===0)return res;
        const map={
    "2":['a','b','c'],
    "3":['d','e','f'],
    "4":['g','h','i'],
    "5":['j','k','l'],
    "6":['m','n','o'],
    "7":['p','q','r','s'],
    "8":['t','u','v'],
    "9":['w','x','y','z'],
}
     this.backTracking(digits,map,0,'',res);
     return res;
    }
}
