/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */


var checkInclusion = function(s1, s2) {
    const s1Len = s1.length
    const s2Len = s2.length
    // s1이 s2보다 긴거 먼저 걸러냄
    if (s1Len > s2Len) return false

    const s1Count = {}
    const windowCount = {}
    // s1Count 세팅
    for (let char of s1) {
        s1Count[char] = (s1Count[char] || 0 ) + 1
    }

    // 윈도우 밀면서 윈도우의 왼쪽은 out 오른쪽은 in 하면서 windowCount 세팅
    // s1Count와 같은지 비교
    let left = 0
    for (let right = 0; right < s2Len; right++) {
        // 배열 돌면서 오른쪽 in
        const inChar = s2[right]
        windowCount[inChar] = (windowCount[inChar] || 0) + 1

        // 왼쪽 out (오른쪽 넣다가 윈도우가 s1 길이보다 커지게 될때)
        // 만약 count 뺐는데 0이면 그냥 지우기, 나중에 키 비교해야하니까
        // 왼쪽 out 시키고 left 올리기
        if (right - left + 1 > s1Len) {
            const outChar = s2[left]
            windowCount[outChar] --
            if (windowCount[outChar] === 0) delete windowCount[outChar]
            left++
        }

        if (isSame(s1Count, windowCount)) {
            return true;
        }

    }
    return false
};

// count 같은지 비교
// 파라미터는 두 객체
const isSame = (a, b) => {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) return false;

    // count 비교
    for (let k of keysA) {
        if (a[k] !== b[k]) return false;
    }

    return true
}