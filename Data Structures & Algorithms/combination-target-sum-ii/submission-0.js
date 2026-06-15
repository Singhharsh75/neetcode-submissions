class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates=candidates.sort((a,b)=>a-b);
        let summed=candidates.reduce((prev,curr)=>prev+curr,0);
        let res=[];

        function backTracking(candidates,target,index,stk,arr){
            if(arr[0]===target){
                // let str=stk.join('').toString();
                // console.log(str);
                res.push([...stk]);
                return;
            }
            if(arr[0]>target||index>=candidates.length||arr[0]>arr[1])return;

            const [total,sum]=arr;
            let st=[...stk];
            st.push(candidates[index]);
            backTracking(candidates,target,index+1,st,[total+candidates[index],sum-candidates[index]]);
            st.pop();
            backTracking(candidates,target,index+1,st,[total,sum-candidates[index]]);
            return;
        }
        backTracking(candidates,target,0,[],[0,summed]);

        res=res.map((arr,index)=>{
            return arr.join('').toString();
        })
        res=Array.from(new Set(res));
        res=res.map((arr,index)=>{
            return Array.from(arr);
        })
        return res;
    }
}
