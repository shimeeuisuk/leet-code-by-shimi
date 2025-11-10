/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let length = s.length
    let left = 0
    let right = length - 1

    const isStr = (char) => {
        if (char >= 'a' && char <= 'z') return true
        if (char >= 'A' && char <= 'Z') return true
        if (char >= '0' && char <= '9') return true
        return false
    }

    while (left < right) {
        while (!isStr(s[left]) && left < right) left++
        while (!isStr(s[right]) && left < right) right--
        if (s[left].toLowerCase() !== s[right].toLowerCase()) return false
        left++
        right--
    }

    return true
};
