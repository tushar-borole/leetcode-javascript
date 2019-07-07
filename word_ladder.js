// Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:
//
// Only one letter can be changed at a time.
//     Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
//     Note:
//
// Return 0 if there is no such transformation sequence.
//     All words have the same length.
//     All words contain only lowercase alphabetic characters.
//     You may assume no duplicates in the word list.
//     You may assume beginWord and endWord are non-empty and are not the same.
//     Example 1:
//
// Input:
//     beginWord = "hit",
//         endWord = "cog",
//         wordList = ["hot","dot","dog","lot","log","cog"]
//
// Output: 5
//
// Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
// return its length 5.
// Example 2:
//
// Input:
//     beginWord = "hit"
// endWord = "cog"
// wordList = ["hot","dot","dog","lot","log"]
//
// Output: 0
//
// Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

var ladderLength = function(beginWord, endWord, wordList) {
  let dic = new Set(wordList);
  if (!dic.has(endWord)) return 0;
  let alphabets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  let visited = new Set();
  visited.add(beginWord);
  let bfs = [beginWord, null];
  let res = 0;

  while (bfs.length) {
    let n = bfs.shift();
    if (n === endWord) {
      return res + 1;
    }
    if (n === null) {
      if (!bfs.length) return 0;
      bfs.push(null);
      res++;
    } else {
      for (let i = 0; i < n.length; i++) {
        for (let j = 0; j < alphabets.length; j++) {
          let temp =
            n.substring(0, i) + alphabets[j] + n.substring(i + 1, n.length);
          if (dic.has(temp) && !visited.has(temp)) {
            bfs.push(temp);
            visited.add(temp);
          }
        }
      }
    }
  }
  return 0;
};
ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]); //?
