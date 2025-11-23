/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];

    const backtrack = (str, open, close) => {
        // 완성된 괄호 문자열이면 저장
        if (str.length === n * 2) {
            result.push(str);
            return;
        }

        // 여는 괄호 추가 가능
        if (open < n) {
            backtrack(str + "(", open + 1, close);
        }

        // 닫는 괄호 추가 가능 (닫는 괄호는 항상 여는 괄호보다 많을 수 없음)
        if (close < open) {
            backtrack(str + ")", open, close + 1);
        }
    };

    backtrack("", 0, 0);
    return result;
};