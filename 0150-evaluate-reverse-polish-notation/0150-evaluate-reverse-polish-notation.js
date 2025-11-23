/**
 * @param {string[]} tokens
 * @return {number}
 */
const calculate = (n1, n2, sign) => {
    num1 = Number(n1)
    num2 = Number(n2)
    switch(sign) {
        case '+':
        return num1+num2
        case '-':
        return num1-num2
        case '*':
        return num1*num2
        case '/':
        return Math.trunc(num1/num2)
    }
}

var evalRPN = function(tokens) {
    const sign = ['+', '-', '*', '/']
    let stack = []
    tokens.forEach((token,index) => {
        stack.push(token)
        console.log(stack)
        if (sign.includes(token)) {
            let result = calculate(stack[stack.length-3], stack[stack.length-2], token)
            stack.pop()
            stack.pop()
            stack.pop()
            stack.push(result.toString())
        }
        console.log(stack)
    })

    return Number(stack[0])
};