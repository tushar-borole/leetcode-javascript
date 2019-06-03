// https://leetcode.com/problems/same-tree/

// 100. Same Tree

// Given two binary trees, write a function to check if they are the same or not.
//
//     Two binary trees are considered the same if they are structurally identical and the nodes have the same value.
//
//     Example 1:
//
// Input:     1         1
// / \       / \
//          2   3     2   3
//
//     [1,2,3],   [1,2,3]
//
// Output: true
// Example 2:
//
// Input:     1         1
// /           \
//          2             2
//
//     [1,2],     [1,null,2]
//
// Output: false
// Example 3:
//
// Input:     1         1
// / \       / \
//          2   1     1   2
//
//     [1,2,1],   [1,1,2]
//
// Output: false

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let traverse = function(tree) {
  let queue = [tree];
  let node = [];

  while (queue.length) {
    let currentNode = queue.shift();

    if (currentNode.left) {
    }
  }
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

var isSameTree = function(p, q) {
  if (p === null && q === null) {
    return true;
  }

  if (p === null || q === null) {
    return false;
  }

  if (p.val !== q.val) {
    return false;
  }

  const compareLeft = isSameTree(p.left, q.left);
  const compareRight = isSameTree(p.right, q.right);

  return compareLeft && compareRight;
};

const tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(3);

const tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(3);

isSameTree(tree1, tree2); //?

console.log(false && false);
