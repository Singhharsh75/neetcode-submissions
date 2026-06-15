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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let head1=l1,head2=l2; let str1='';let str2='';
        while(head1&&head2){
            str1=head1.val.toString()+str1;
            str2=head2.val.toString()+str2;
            head1=head1.next;
            head2=head2.next;
        }
        if(head1){
            while(head1){
                str1=head1.val.toString()+str1;
                head1=head1.next;
            }
        }

        if(head2){
            while(head2){
                str2=head2.val.toString()+str2;
                head2=head2.next;
            }
        }
        const sum=Math.floor((+str1)+(+str2));
        if(sum===0)return new ListNode(0);
        let tot=sum; let node=new ListNode(''); const anchor=node;
        while(tot){
            const dig=tot%10;
            node.next=new ListNode(dig);
            node=node.next;
            tot=Math.floor(tot/10);
        }

        return anchor.next;

    }
}
