/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  /* let start = 0;
  let end = array.length;
  let half = Math.floor((start + end) / 2);
  let i = 0;
  while (start < end) {
    if (array[half] !== value) {
      if (value < array[half]) start = half + 1;
      else end = half - 1;
      half = Math.floor((start + end) / 2);
      i++;
    }
  }
  return i;
} */
  let i = 0;
  while (i < array.length) {
    if (array[i] === value) { return i; }
    i++;
  }
  return i;
}

module.exports = findIndex;
