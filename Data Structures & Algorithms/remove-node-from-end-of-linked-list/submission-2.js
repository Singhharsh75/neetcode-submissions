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
        if(!head)return head;
         
        let dummy_pointer=new ListNode(0,head); 
        let left=dummy_pointer; let right=head;
        while(n>0){
            right=right.next;
            n--;
        }
        while(right){
            left=left.next;
            right=right.next;
        }

        left.next=left.next.next;

        return dummy_pointer.next;
        
    }
}
