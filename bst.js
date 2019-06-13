class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
  insert(val) {
    if (val < this.val && this.left) {
      this.left.insert(val);
    } else if (val < this.val) {
      this.left = new Node(val);
    } else if (val > this.val && this.right) {
      this.right.insert(val);
    } else if (val > this.val) {
      this.right = new Node(val);
    }
  }
}

let search = function(node, val) {
  if (!node) {
    return null;
  }

  if (node.val === val) {
    return node;
  }

  if (val < node.val) {
    return search(node.left, val);
  } else if (val > node.val) {
    return search(node.right, val);
  }
  //return out;
};

let node = new Node(10);
node.insert(0);
node.insert(12);
node.insert(-1);
node.insert(4);
node.insert(12);
node.insert(11);
node.insert(20);
node.insert(3);

search(node, 7); //?
