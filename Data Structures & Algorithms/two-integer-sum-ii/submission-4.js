class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l=0; let r=1;
        while(l<numbers.length){
            r=l+1;
            while(r<numbers.length){
                if(numbers[l]+numbers[r]===target){
                    return [l+1,r+1];
                }
                r++;
            }
            l++;
        }
    }
}
