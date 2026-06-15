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
        let tort=head;
        let hare=head?.next||null;
        while(tort&&hare){
            if(tort===hare){
                return true;
            }

            tort=tort?.next||null;
            hare=hare?.next?.next||null;
        }
        return false;
    }
}
