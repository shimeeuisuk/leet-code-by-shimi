/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let n = height.length
    let answer = 0
    let l = 0
    let r = n-1

        while (l<r) {
            let tempAnswer = (r-l) * Math.min(height[l], height[r])
            answer = Math.max(answer, tempAnswer)
         
            if (height[l]>height[r] && l<r) {
                r--
            }else {
                l++
            }
        }

    return answer
};