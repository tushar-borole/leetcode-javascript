// https://leetcode.com/problems/merge-two-binary-trees/

// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
  if (!t1 && !t2) {
    return null;
  }

  if (!t1 || !t2) {
    return t1 || t2;
  }

  let root = new TreeNode(t1.val + t2.val);
  root.left = mergeTrees(t1.left, t2.left);
  root.right = mergeTrees(t1.right, t2.right);

  return root;
};

// let root = new TreeNode(1);
// let left = new TreeNode(3);
// let right = new TreeNode(2);
// left.left = new TreeNode(5);
// root.left = left;
// root.right = right;
// mergeTrees(root, root);
