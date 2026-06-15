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
     * @return {boolean}
     */
    hasCycle(head) {
        if(!head || !head.next){
            return false;
        }
        let hare=head.next; let tort=head;

        while(hare.next && tort){
            if(tort===hare)return true;
            tort=tort.next;
            hare=hare.next.next;
        }
        return false;
    }
}
