let treeToArray = function(tree) {
  let queue = [tree];
  let output = [];

  while (queue.length > 0) {
    let current = queue.pop();
    if (current === null) {
      output.push(null);
    } else {
      output.push(current.val);
      if (current.left && current.right) {
        queue.unshift(current.left);
        queue.unshift(current.right);
      }
      if (current.left && current.right == null) {
        queue.unshift(current.left);
        queue.unshift(null);
      }
      if (current.right && current.left == null) {
        queue.unshift(null);
        queue.unshift(current.left);
      }
    }
  }
};
