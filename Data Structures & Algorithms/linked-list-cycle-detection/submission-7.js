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
        let map= new Map();
        let tort=head; let hare=head;

        while(hare && hare.next){
            tort=tort.next;
            hare=hare.next.next;
            if(tort===hare)return true;
        }

        return false;
    }
}
