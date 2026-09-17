/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    // s2를 s1 길이만큼 subString으로 보면서 s1을 다 가지고 있는지 보면 된다 

    if (s1.length > s2.length) return false

    const s1Map = new Map()
    for (let char of s1) {
        s1Map.set(char, (s1Map.get(char) || 0) + 1 )
    }

    const windowLength = s1.length
    let left = 0
    for (let right = 0; right < s2.length ; right++) {
        const rightChar = s2[right]

        // 오른쪽 문자 하나씩 넘기면서 있으면 지움
        if(s1Map.has(rightChar)) {
            s1Map.set(rightChar, s1Map.get(rightChar)-1)
        }

        // 윈도우가 비교군 길이 보다 커지면
        if (right - left + 1 > windowLength) {
            const leftChar = s2[left]

            if(s1Map.has(leftChar)) {
                s1Map.set(leftChar, s1Map.get(leftChar)+1)
            }

            left++
        }
    if (right - left + 1 === windowLength && [...s1Map.values()].every(value => value === 0)) return true
    }
return false
}