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
        let copyMap=new Map();
        copyMap.set(null,null);

        let curr=head;

        if(!curr)return null;


        while(curr){
            if(!copyMap.has(curr)){
                copyMap.set(curr,new Node(curr.val));
            }

            if(!copyMap.has(curr.next)){
                copyMap.set(curr.next,new Node(curr.next.val));
            }
            copyMap.get(curr).next=copyMap.get(curr.next);

            if(!copyMap.has(curr.random)){
                copyMap.set(curr.random,new Node(curr.random.val));
            }
            copyMap.get(curr).random=copyMap.get(curr.random);

            curr=curr.next;
        }

        return copyMap.get(head);
    }
}
