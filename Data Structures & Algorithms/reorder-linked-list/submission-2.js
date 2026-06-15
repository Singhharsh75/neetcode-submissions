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
     * @return {void}
     */
    reorderList(head) {
        let dummy_pointer=head;
        while(head && head.next){
            let prev=null;
            let curr=head;
            while(curr.next){
                prev=curr;
                curr=curr.next;
            }
            prev.next=null;
            curr.next=head.next;
            head.next=curr;
            head=curr.next;
        }

        return dummy_pointer;
    }
}
