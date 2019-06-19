// Given a Binary Search Tree and a target number, return true if there exist two elements in the BST such that their sum is equal to the given target.
//
//     Example 1:
//
// Input:
//     5
//     / \
//   3   6
// / \   \
// 2   4   7
//
// Target = 9
//
// Output: True
//
//
// Example 2:
//
// Input:
//     5
//     / \
//   3   6
// / \   \
// 2   4   7
//
// Target = 28
//
// Output: False

// function TreeNode(val) {
// //   this.val = val;
// //   this.left = this.right = null;
// // }

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  const values = new Set();
  let found = false;
  function inorder(node) {
    if (!node) {
      return;
    }
    inorder(node.left);
    if (values.has(k - node.val)) {
      found = true;
      return;
    }
    values.add(node.val);
    inorder(node.right);
  }
  inorder(root);
  return found;
};

let root = new TreeNode(1);
// root.left = new TreeNode(1);
// root.right = new TreeNode(3);

findTarget(root, 2); //?
