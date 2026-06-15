class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set=new Set(nums)
        let max=0;
        for(let num of set){
                let count=0; let seq=num;
                while(set.has(seq--)){
                    count+=1;
                }
                max=Math.max(max,count);
        }

        return max;
    }
}
