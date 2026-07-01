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
        let slow=head;
        let fast=head;
        while(fast && fast.next){
            slow=slow.next;
            fast=fast.next.next;
        }
        let second=slow.next;

        slow.next=null;

        let prev=null;
        let curr=second;
        let next;

        while(curr){
            next=curr.next;
            curr.next=prev;

            prev=curr;
            curr=next;
        }

        let node=new ListNode();
        let dummy=node; let toss=false;

        while(prev){
            if(toss){
                node.next=prev;
                prev=prev.next;
            }else{
                node.next=head;
                head=head.next;
            }
            node=node.next;
            toss=!toss;
        }
        if(head){
            node.next=head
        }

        return dummy.next;
    }
}
