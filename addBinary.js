/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let carry = 0;
  let out = "";
  if (a.length !== b.length) {
    if (a.length < b.length) {
      a = "0".repeat(b.length - a.length) + a;
    } else {
      b = "0".repeat(a.length - b.length) + b;
    }
  }
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0) {
    let aval = a[i];
    let bval = b[j];
    out = String(aval ^ bval ^ String(carry)) + out;
    if (aval === bval && aval !== String(carry)) {
      carry = Number(!carry);
    }
    i--;
    j--;
  }

  return carry ? String(carry) + out : out;
};
addBinary("101111", "10"); //?
