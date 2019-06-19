/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */

var preorder = function(root) {
  let out = [];
  let stack = [root];
  while (stack.length > 0) {
    let current = stack.shift();
    if (current) {
      out.push(current.val);
      if (current.children.length > 0) {
        current.children.reverse().forEach(function(value, index, array) {
          stack.unshift(value);
        });
      }
    }
  }

  return out;
};
