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
 * @return {number}
 */
var minDiffInBST = function(root) {
  let queue = [root];
  let min = Infinity;

  while (queue.length > 0) {
    let current = queue.shift();

    if (current) {
      if (current.left) {
        queue.push(current.left);
        let diff = Math.abs(current.left.val - current.val);
        min = Math.min(diff, min);
      }
      if (current.right) {
        queue.push(current.right);
        let diff = Math.abs(current.right.val - current.val);
        min = Math.min(diff, min);
      }
    }
  }
  return min;
};

const tree = new TreeNode(90);
tree.left = new TreeNode(69);
tree.left.left = new TreeNode(49);
tree.left.right = new TreeNode(89);
tree.left.left.right = new TreeNode(52);

minDiffInBST(tree); //?
