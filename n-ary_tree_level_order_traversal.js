function Node(val, children) {
  this.val = val;
  this.children = children;
}
//
// https://leetcode.com/problems/n-ary-tree-level-order-traversal/

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return [];

  let queue = [root];
  let result = [];

  while (queue.length > 0) {
    let size = queue.length; //?
    let levelArray = [];
    for (let i = 0; i < size; i++) {
      let current = queue.shift();
      if (current) {
        levelArray.push(current.val);
        if (current.children.length > 0) {
          queue.push(...current.children);
        }
      }
    }

    result.push(levelArray);
  }

  return result;
};

let root = new Node(1, [
  new Node(3, [new Node(5, []), new Node(6, [])]),
  new Node(2, []),
  new Node(4, [])
]);

levelOrder(root); //?
