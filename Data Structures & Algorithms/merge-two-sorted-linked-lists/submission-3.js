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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let dummyNode=new ListNode(null); let anchor=dummyNode;
        while(list1 && list2){
            if(list1.val<=list2.val){
                dummyNode.next=list1;
                list1=list1.next;
            }
            else{
                dummyNode.next=list2;
                list2=list2.next;
            }

            dummyNode=dummyNode.next;
        }
            if(!list2 && list1){
                dummyNode.next=list1
            }
            if(!list1 && list2){
                dummyNode.next=list2
            }

        return anchor.next;
        
    }
}
