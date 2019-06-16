// https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var preOrder = function(root) {
  if (root === null) {
    return;
  }
  //1,2,4,3,5
  console.log(root.val); //?
  preOrder(root.left);
  preOrder(root.right);
};

var Inorder = function(root) {
  if (root === null) {
    return;
  }

  Inorder(root.left);
  // 4,2,5,1,3
  console.log(root.val);
  Inorder(root.right);
};

var Postorder = function(root) {
  if (root === null) {
    return;
  }

  Postorder(root.left);
  Postorder(root.right);
  // 4,5,2,3,1
  console.log(root.val);
};
let node = new TreeNode(1);
node.left = new TreeNode(2);
node.right = new TreeNode(3);
node.left.left = new TreeNode(4);
node.left.right = new TreeNode(5);

preOrder(node);
Inorder(node);
Postorder(node);
