class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const map=new Map();
        for(let i=0;i<numbers.length;i++){
            if(map.has(target-numbers[i])){
                return [i+1,map.get(target-numbers[i])+1].sort()
            }
            map.set(numbers[i],i)
        }
    }
}
