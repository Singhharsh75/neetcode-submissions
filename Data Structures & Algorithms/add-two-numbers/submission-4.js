/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let node=new ListNode(null);let anchor=node;let rem=0;
        while(l1 || l2){
            let sum=(l1?.val||0)+(l2?.val||0)+rem;rem=0;
            l1=l1?.next||null; l2=l2?.next||null;
            if(sum>9){
                node.val=sum-10;
                rem=1;
            }else{
                node.val=sum
            }
            if(!l1 &&!l2 && rem===0){
                node.next=null;
            }else{
                node.next=new ListNode(null);
            }
            node=node.next;
        }
        if(rem!==0)
          node.val=rem;
        return anchor;
    }
}
