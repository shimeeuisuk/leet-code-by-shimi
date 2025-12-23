/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const answer = new Array(temperatures.length).fill(0);
    const stack = [];

    for (let i = 0; i<temperatures.length; i++) {
        while (stack.length && temperatures[i] > temperatures[stack[stack.length-1]]) {
            const prev = stack.pop();
            answer[prev] = i - prev
        }
        stack.push(i)
    }

    return answer;
};