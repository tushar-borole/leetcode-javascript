// https://leetcode.com/problems/swap-nodes-in-pairs/submissions/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (head === null || head.next === null) {
    return head;
  }

  let node = head.next; //?
  head.next = swapPairs(head.next.next); //4, 2
  node.next = head;
  return node;
};

let node = new ListNode(1);
node.next = new ListNode(2);
node.next.next = new ListNode(3);
node.next.next.next = new ListNode(4);

swapPairs(node); //?
