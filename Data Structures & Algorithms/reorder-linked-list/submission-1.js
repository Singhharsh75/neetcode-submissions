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
        let anchor=head;
        while(head.next){
            if(!head.next.next){
                return anchor;
            }
            let prev=head;
            let curr=head.next;
            while(curr.next){
                prev=curr;
                curr=curr.next;
            }
            prev.next=null;
            let dum=head.next;
            head.next=curr;
            curr.next=dum;
            head=dum;
        }

        return anchor;
    }
}
