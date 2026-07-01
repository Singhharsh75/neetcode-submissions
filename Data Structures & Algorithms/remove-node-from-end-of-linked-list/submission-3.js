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
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let count=n;
        let slow=new ListNode(0,head); let fast=head; let dummy=slow;
        while(count){
            fast=fast.next;
            count-=1;
        }

        while(fast){
            slow=slow.next;
            fast=fast.next;
        }
        slow.next=slow.next.next;

        return dummy.next;
    }
}
