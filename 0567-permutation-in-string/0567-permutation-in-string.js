/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 // s1 길이 만큼 간격 -> s2 에서 간격만큼 잘라내서 밀면서 비교
 // 비교할 때 sort 해서 비교
var checkInclusion = function(s1, s2) {
    const s1Len = s1.length
    const s2Len = s2.length
    const sortedS1 = s1.split("").sort().join("")
    for (let i = 0; i <= s2Len - s1Len; i++) {
        const sortedParts = s2.substring(i, i+s1Len).split("").sort().join("")
        if (sortedS1 === sortedParts) return true
    }
    return false
};