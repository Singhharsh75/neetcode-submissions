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
        let [prev,curr,another]=[{val:'',next:null},list1,list2];
        const anchor=prev;
        if(!list1)return list2;  if(!list2)return list1;

        while(another&& curr){
            if(curr.val<another.val){
                prev=curr;
                curr=curr.next
            }else{
                const temp={val:another.val,next:null};
                prev.next=temp;
                temp.next=curr;
                prev=prev.next;
                another=another.next;
            }
        }
        if(another!==null){
            prev.next=another;
        }

        if(list1.val<list2.val)return list1
        return anchor.next;
    }
}
