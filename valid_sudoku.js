// 36. Valid Sudoku
// https://leetcode.com/problems/valid-sudoku/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
let isValidSudoku = function(board) {
  let rows = {};
  let colums = {};
  let boxex = {};

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const current = board[i][j];
      if (current !== ".") {
        const boxIndex = Math.floor(i / 3 ) * 3 + Math.floor(j / 3);
        if (!rows.hasOwnProperty(i)) rows[i] = new Set();
        if (!colums.hasOwnProperty(j)) colums[j] = new Set();
        if (!boxex.hasOwnProperty(boxIndex)) boxex[boxIndex] = new Set();

        if(rows[i].has(current) || colums[j].has(current) || boxex[boxIndex].has(current)){
          return false
        }

        rows[i].add(current)
        colums[j].add(current)
        boxex[boxIndex].add(current)

      }
    }
  }

  return true
};

isValidSudoku([
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]);
