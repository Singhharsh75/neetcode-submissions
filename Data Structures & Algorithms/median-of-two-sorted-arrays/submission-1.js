class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    
    findMedianSortedArrays(nums1, nums2) {
        let A=nums1;
        let B=nums2;

        if(A.length>B.length){
            [A,B]=[B,A];
        }

        const half=Math.floor((A.length+B.length+1)/2);

        let l=0; let r=A.length;
        while(l<=r){
            const i=Math.floor((l+r)/2);
            const j=half-i;
            const ALeft=i>0?A[i-1]:-Infinity;
            const ARight=i<A.length?A[i]:Infinity;
            const BLeft=j>0?B[j-1]:-Infinity;
            const BRight=j<B.length?B[j]:Infinity;


            if(ALeft<=BRight && BLeft<=ARight){
                if((A.length+B.length)%2===0){
                    return (Math.max(ALeft,BLeft)+Math.min(BRight,ARight))/2;
                }else{
                    return Math.max(ALeft,BLeft);
                }
            }else if(ALeft>BRight){
                r=i-1;
            }else{
                l=i+1
            }
        }
        return -1;
    }
}
