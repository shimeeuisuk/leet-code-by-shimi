/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const set = new Set();  
    let left = 0;           
    let maxLen = 0;          

    for (let right = 0; right < s.length; right++) {
        const char = s[right]; 

        // 중복이 있으면 left를 이동시키며 set에서 제거
        while (set.has(char)) {
            set.delete(s[left]); 
            left++; 
        } 
        set.add(char); 

        // 현재 윈도우 길이 갱신
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};