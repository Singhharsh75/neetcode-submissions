// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {

        if(!head)return null
        let curr=head;
        while(curr){
            let copy=new Node(curr.val);
            copy.next=curr.next;
            curr.next=copy;

            curr=copy.next;
        }

        let copyHead=head.next;
        curr=head;
        while(curr){
            if(curr.random){
                curr.next.random=curr.random.next;
            }
            curr=curr.next.next;
        }
        curr=head;
        while(curr){
            let newHead=curr.next;
            curr.next=newHead.next;
            if(newHead.next){
                newHead.next=newHead.next.next
            }
            curr=curr.next
        }

        return copyHead;
    }
}
