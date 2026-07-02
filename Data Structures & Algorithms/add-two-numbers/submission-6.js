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
        let node=new ListNode(); let dummy=node; let carry=0;
        while(l1 || l2 || carry){

            let sum=(l1&& l1.val ||0)+(l2&& l2.val ||0) +carry;

            if(sum > 9){
                node.next=new ListNode(sum-10);
                carry=1;
            }else{
                node.next=new ListNode(sum);
                carry=0;
            }
            if(l1)l1=l1.next;
            if(l2)l2=l2.next;
            node=node.next;
        }

        return dummy.next

    }
}
