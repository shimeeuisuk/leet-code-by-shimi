/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
const result = [];

  function backtrack(current, openCount, closeCount) {
    // 완성된 문자열이면 결과에 추가
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }

    // '(' 추가 가능하면 추가
    if (openCount < n) {
      backtrack(current + "(", openCount + 1, closeCount);
    }

    // ')' 추가 가능하면 추가
    if (closeCount < openCount) {
      backtrack(current + ")", openCount, closeCount + 1);
    }
  }

  backtrack("", 0, 0);
  return result;
};