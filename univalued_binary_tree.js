function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
// https://leetcode.com/problems/univalued-binary-tree/
//
// binary tree is univalued if every node in the tree has the same value.
//
//     Return true if and only if the given tree is univalued.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
  let set = new Set();
  let innerFunction = function(root) {
    if (root) {
      set.add(root.val);
    }
    if (root.left) {
      innerFunction(root.left);
    }
    if (root.right) {
      innerFunction(root.right);
    }
  };
  innerFunction(root);

  return set.size === 1;
};

let root = new TreeNode(1);
root.left = new TreeNode(1);
root.right = new TreeNode(1);

isUnivalTree(root); //?
