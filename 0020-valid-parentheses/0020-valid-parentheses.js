/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    const standard = {
        ')' : '(',
        ']' : '[',
        '}' : '{'
    }
    for (let char of s) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char)
        }else if (char === ')' || char === '}' || char === ']') {
            if (stack[stack.length-1] === standard[char]) {
                stack.pop()
            }else{
                stack.push(char)
            }
        }
    }

    if (stack.length === 0) {
        return true
    }else {
        return false
    }
};