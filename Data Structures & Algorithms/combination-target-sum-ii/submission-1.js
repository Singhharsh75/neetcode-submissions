class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combo(candidate,target,index,dum,res){
        if(target===0){
            res.push([...dum]);
            return;
        }
        if(target<0 || index===candidate.length)return;
        dum.push(candidate[index]);
        this.combo(candidate,target-candidate[index],index+1,dum,res);
        dum.pop();
        this.combo(candidate,target,index+1,dum,res);
    }
    combinationSum2(candidates, target) {
        let res=[]; let dum=[];
        this.combo(candidates.sort((a,b)=>a-b),target,0,dum,res);

        let arr=Array.from(new Set(res.map(re=>(re.join(''))))).map(ar=>Array.from(ar));
        return arr;
    }
}
