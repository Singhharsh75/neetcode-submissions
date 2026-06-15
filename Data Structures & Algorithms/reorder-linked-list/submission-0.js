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
        while(anchor&&anchor.next){
            let [prev,curr]=[anchor,anchor.next];
            while(curr.next){
                prev=curr;
                curr=curr.next;
            }
            prev.next=null;
            let temp=anchor.next;
            anchor.next=curr;
            curr.next=temp;
            anchor=temp;
        }

        return head;
    }
}
