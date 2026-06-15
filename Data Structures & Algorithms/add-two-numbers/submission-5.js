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
        let node= new ListNode();let dummy=node; let carry=0;
        while(l1 || l2 || carry){

            let sum=(l1?.val||0)+(l2?.val||0)+carry;

            if(sum>9){
                carry=1;
                sum-=10;
            }else{
                carry=0;
            }
            l1 && (l1=l1.next); 
            l2 && (l2=l2.next);
            node.val=+sum;
            (l1 || l2 || carry)&&(node.next=new ListNode());
            node=node.next;
        }


        return dummy;

    }
}
