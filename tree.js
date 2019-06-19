class Node {
  constructor(val) {
    this.data = val;
    this.children = [];
  }

  add(data) {
    const newNode = new Node(data);
    this.children.push(newNode);
  }

  remove(data) {
    this.children = this.children.filter(node => node.data !== data);
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }

  traverseBFS() {
    let queue = [this.root];

    while (queue.length > 0) {
      let current = queue.shift();
      console.log(current.data);
      if (current.children.length > 0) {
        current.children.forEach(function(value, index, array) {
          queue.push(value);
        });
      }
    }
  }

  traverseDFS() {
    let stack = [this.root];
    while (stack.length > 0) {
      let current = stack.shift();
      if (current.children.length > 0) {
        current.children.reverse().forEach(function(value, index, array) {
          stack.unshift(value);
        });
      }
    }
  }
}

let root = new Node(1);
let firstNode = new Node(2);
firstNode.children = [new Node(90)];
root.children = [firstNode, new Node(45), new Node(47)];

const tree = new Tree(root);
tree.traverseDFS();
