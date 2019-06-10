// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/

// 1047. Remove All Adjacent Duplicates In String

// Given a string S of lowercase letters, a duplicate removal consists of choosing two adjacent and equal letters, and removing them.
//
//     We repeatedly make duplicate removals on S until we no longer can.
//
//     Return the final string after all such duplicate removals have been made.  It is guaranteed the answer is unique.
//
//
//
//     Example 1:
//
// Input: "abbaca"
// Output: "ca"
// Explanation:
//     For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".
//
//
//     Note:
//
// 1 <= S.length <= 20000
// S consists only of English lowercase letters.

/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
  let stringArray = S.split(""); //?

  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === stringArray[i + 1]) {
      stringArray.splice(i, 2);
      i = -1;
      continue;
    }
  }

  return stringArray.join("");
};

removeDuplicates("abbaca"); //?

//
// my_stack = []
// for i in range(len(S)):
// if my_stack and my_stack[-1]==S[i]:
// my_stack.pop()
// else:
// my_stack.append(S[i])
// return ''.join(my_stack)
