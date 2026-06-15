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
    mergerLists(list1,list2){
        let newNode=new ListNode();
        let dummy_pointer=newNode;

        while(list1 && list2){
            if(list1.val<=list2.val){
                newNode.next=list1;
                list1=list1.next;
            }else{
                newNode.next=list2;
                list2=list2.next;
            }
            newNode=newNode.next;
        }

        if(list1 && !list2){
            newNode.next=list1;
        }

        if(list2 && !list1){
            newNode.next=list2;
        }

        return dummy_pointer.next;
    }

    mergeTwoLists(list1, list2) {
        if(list2?.val>list1?.val){
            return this.mergerLists(list2,list1);
        }
        return this.mergerLists(list1,list2);
    }
}
