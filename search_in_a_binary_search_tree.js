/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  if (root == null) return null;
  if (root.val === val) {
    return root;
  }
  if (val < root.val) {
    return searchBST(root.left, val);
  } else {
    return searchBST(root.right, val);
  }
};

const root = new TreeNode(4);
const left = new TreeNode(2);
const right = new TreeNode(7);
left.left = new TreeNode(1);
left.right = new TreeNode(3);
root.left = left;
root.right = right;

searchBST(root, 7); //?
