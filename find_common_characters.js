// 1002. Find Common Characters

// Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.
//
//     You may return the answer in any order.
//
//
//
//     Example 1:
//
// Input: ["bella","label","roller"]
// Output: ["e","l","l"]
// Example 2:
//
// Input: ["cool","lock","cook"]
// Output: ["c","o"]
//
//
// Note:
//
//     1 <= A.length <= 100
// 1 <= A[i].length <= 100
// A[i][j] is a lowercase letter

/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
  let formattedArray = A.map(val => val.split(""));
  let start = formattedArray[0];
  const commonCharacter = [];
  for (let val of start) {
    const foundArray = [];
    for (let i = 1; i < formattedArray.length; i++) {
      const index = formattedArray[i].indexOf(val);
      const foundStatus = index > -1;
      foundArray.push(foundStatus);
      if (foundStatus) {
        // this is done so that on next itteration, character in not searchable
        formattedArray[i][index] = "found";
      }
    }
    if (!foundArray.includes(false)) {
      commonCharacter.push(val);
    }
  }

  return commonCharacter;
};
