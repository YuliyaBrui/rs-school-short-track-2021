/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  /* const arr = str.split('');
  const obj = {};
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === undefined) { obj[arr[i]] = 1; } else { obj[arr[i]]++; }
  }
  for (let i = 0; i < Object.entries(obj).length; i++) {
    const [elem, count] = Object.entries(obj)[i];
    if (count === 1) { result += elem; } else { result += (count + elem); }
  }
  /* for (const [elem, count] of Object.entries(obj)) {
    if (count === 1) { result += elem; } else { result += (count + elem); }
  }  return result; */
  let result = '';
  if (str.length === 0) {
    return result;
  }
  let prev = str[0];
  let i = 0;
  let count = 0;
  while (i < str.length) {
    if (str[i] !== prev) {
      result += (count > 1 ? count : '') + prev;
      count = 0;
      prev = str[i];
    }
    i++;
    count++;
  }
  result += (count > 1 ? count : '') + prev;
  return result;
}

module.exports = encodeLine;
