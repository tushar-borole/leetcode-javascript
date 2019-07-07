// 64. Minimum Path Sum
// Medium
//
// 1437
//
// 41
//
// Favorite
//
// Share
// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.
//
//     Note: You can only move either down or right at any point in time.
//
//     Example:
//
// Input:
//     [
//         [1,3,1],
//         [1,5,1],
//         [4,2,1]
//     ]
// Output: 7
// Explanation: Because the path 1→3→1→1→1 minimizes the sum.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  let row = grid.length;
  let column = grid[0].length;

  //first row
  for (let i = 1; i < column; i++) {
    grid[0][i] += grid[0][i - 1];
  }

  //first column
  for (let i = 1; i < row; i++) {
    grid[i][0] += grid[i - 1][0];
  }

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < column; j++) {
      let min = Math.min(grid[i - 1][j], grid[i][j - 1]);
      grid[i][j] = min + grid[i][j];
    }
  }

  return grid[row - 1][column - 1];
};

minPathSum([[1, 3, 1, 2], [1, 5, 1, 1]]);
