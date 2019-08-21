// https://www.youtube.com/watch?v=YGZuDSs8fQo

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  if (root === null) {
    return "null,";
  }
  let leftString = serialize(root.left);
  let rightString = serialize(root.right);
  return root.val + "," + leftString + rightString;
  serialize(root);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  const list = data.split(",");
  let recur = function(list) {
    let val = list.shift();
    if (val === "null") return null;
    let newNode = new TreeNode(parseInt(val));
    newNode.left = recur(list);
    newNode.right = recur(list);
    return newNode;
  };
  return recur(list);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(5);

deserialize(serialize(root)); //?
