/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let temp = {}
    let answer = 0
    let start = 0

    for (let i = 0; i < s.length; i++) {
        if (s[i] in temp) {
            start = Math.max(start, temp[s[i]] + 1)
        }
        temp[s[i]] = i
        answer = Math.max(answer, i-start+1)
    }

    return answer
};