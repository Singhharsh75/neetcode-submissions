class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    //nums = [1,2,1,0,4,2,6], k = 3
    maxSlidingWindow(nums, k) {
        let n=nums.length;
        let result= Array(n-k+1);
        const q=new Deque();
        let l=0;
        let r=0;
        while(r<n){
            while(q.size() && nums[q.back()]<nums[r]){
                q.popBack();
            }
            q.pushBack(r);
            if(l>q.front()){
                q.popFront();
            }
            if(r+1>=k){
                result[l]=nums[q.front()];
                l++;
            }
            r++;
        }

        return result;


    }
}
