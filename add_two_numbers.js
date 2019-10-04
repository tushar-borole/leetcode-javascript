// https://leetcode.com/problems/add-two-numbers/
function ListNode(val) {
  this.val = val;
  this.next = null;
}

let arrayToList = function(totalArray) {
  let outNode = new ListNode(totalArray[0]);
  let current = outNode;

  for (let i = 1; i < totalArray.length; i++) {
    current.next = new ListNode(totalArray[i]);
    current = current.next;
  }
  return outNode;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let l1Array = [];
  const before = new ListNode();
  let tail = before;
  let c = 0;

  while (l1 || l2 || c) {
    const v1 = l1 ? l1.val : 0;
    const v2 = l2 ? l2.val : 0;
    const v = v1 + v2 + c;

    tail.next = new ListNode(v % 10);
    tail = tail.next;
    c = v >= 10 ? 1 : 0;
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }

  return before.next;
};

addTwoNumbers(
  arrayToList([
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1
  ]),
  arrayToList([5, 6, 4])
); //?
