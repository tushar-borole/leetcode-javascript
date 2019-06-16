// Given a binary tree, return the inorder traversal of its nodes' values.
//
// Example:
//
//     Input: [1,null,2,3]
// 1
//     \
//      2
//      /
//      3
//
// Output: [1,3,2]
// Follow up: Recursive solution is trivial, could you do it iteratively?

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  let out = [];

  var innerTravers = function(root) {
    if (root === null) {
      return;
    }

    innerTravers(root.left);
    out.push(root.val);
    innerTravers(root.right);
  };

  innerTravers(root);
  return out;
};

let node = new TreeNode(1);
node.left = new TreeNode(2);
node.right = new TreeNode(3);
node.left.left = new TreeNode(4);
node.left.right = new TreeNode(5);

inorderTraversal(node); //?
