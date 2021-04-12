/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  let current = l;
  let prev = current;
  const arr = current;
  while (current.value !== k) {
    prev = current;
    current = current.next;
  }
  prev.next = current.next;
  return arr;
}
/* let arr = l;
  while (arr) {
    if (arr.value === k) {
      arr.value = arr.next.value;
      arr.next = arr.next.next;
    }
    arr = arr.next;
  }
  return arr;
} */
/* let it = l;
  while (it !== null && it.value === k) {
    it = it.next;
  }
  const top = it;
  let prev = it;
  it = it.next;
  while (it !== null) {
    if (it.value === k) {
      if (it.next !== null) {
        prev.next = it.next;
      } else {
        prev.next = null;
      }
    }
    it = it.next;
    prev = prev.next;
  }
  return top;
} */
module.exports = removeKFromList;
