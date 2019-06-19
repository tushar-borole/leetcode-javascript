class Node {
  constructor(val) {
    this.data = val;
    this.children = [];
  }

  add(data) {
    const newNode = new Node(data);
    this.children.push(newNode);
  }
}

class Tree {}
