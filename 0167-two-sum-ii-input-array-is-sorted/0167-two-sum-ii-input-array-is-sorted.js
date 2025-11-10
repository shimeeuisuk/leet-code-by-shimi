/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0 
    let n = numbers.length
    let right = n - 1 
    let answer = []

    while (left < right) {
        let sum = numbers[left] + numbers[right]
        if (sum < target) left++
        if (sum > target) right--
        if (sum === target) {
            answer.push(left+1)
            answer.push(right+1)
            break;
        }
    }

    return answer
};