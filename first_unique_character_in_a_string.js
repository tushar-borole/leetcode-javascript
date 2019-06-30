/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let store = {};
  for (let i = 0; i < s.length; i++) {
    let currentLetter = s[i];
    let storeVal = store[currentLetter];
    if (typeof storeVal === "undefined") store[currentLetter] = [0, i];
    store[currentLetter] = [store[currentLetter][0] + 1, i];
  }

  for (let val in store) {
    if (store[val][0] === 1) {
      return store[val][1];
    }
  }

  return -1;
};

firstUniqChar("dddccdbba"); //?
