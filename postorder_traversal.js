// https://leetcode.com/problems/n-ary-tree-postorder-traversal/submissions/

// function Node(val, children) {
//   this.val = val;
//   this.children = [];
// }

//
// Given an n-ary tree, return the postorder traversal of its nodes' values.
//
// For example, given a 3-ary tree:
//
//
//     Return its postorder traversal as: [5,6,3,2,4,1].
//
//
//     Note:
//
// Recursive solution is trivial, could you do it iteratively?

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
  let out = [];
  let stack = [root]; //?
  while (stack.length > 0) {
    let current = stack.shift();
    if (current) {
      out.unshift(current.val);
      if (current.children.length > 0) {
        current.children.forEach(function(value, index, array) {
          stack.unshift(value);
        });
      }
    }
  }

  return out;
};

let root = new Node(1);
let firstNode = new Node(3);
firstNode.children = [new Node(5), new Node(6)];
root.children = [firstNode, new Node(2), new Node(4)];

postorder(root); //?
