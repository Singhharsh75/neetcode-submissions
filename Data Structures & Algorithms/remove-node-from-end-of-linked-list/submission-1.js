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
        let count=0;
        let counterNode=head;
        while(counterNode){
            count+=1;
            counterNode=counterNode.next;
        }
        let target=count-n+1;
        if(target===1){
            if(head.next){
                return head.next;
            }else{
                return null;
            }
        }
        let anchor=head; let prev=null; let delCounter=0;
        while(head){
            delCounter+=1;
            if(delCounter===target){
                prev.next=head.next;
                head=prev.next;
            }else{
               prev=head;
               head=head.next; 
            }
        }

        return anchor;
    }
}
