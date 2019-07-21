// https://www.youtube.com/watch?v=WWysBX-N2Ak

/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
  let i = 0;
  let out = true;

  if (A.length < 3) {
    return false;
  }

  while (i < A.length && A[i] < A[i + 1]) {
    i++;
  }

  if (i === 0 || i >= A.length - 1) {
    return false;
  }

  while (i < A.length) {
    if (A[i + 1] >= A[i]) {
      out = false;
      break;
    }
    i++;
  }

  return out;
};

//validMountainArray([2, 1]); //?
validMountainArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]); //?
//validMountainArray([0, 3, 2, 1]); //?
