class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l=0; let r=numbers.length-1; let res=[];
        while(l<r){
            let sum=numbers[l]+numbers[r];
            if(sum===target){
                res.push(...[l+1,r+1]);
                l++;r--;
            }else if(sum>target){
                r--;
            }else{
                l++;
            }
        }

        return res;
    }
}
