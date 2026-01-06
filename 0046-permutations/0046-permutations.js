/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let answer = []
    let checked = Array(nums.length).fill(false)

    const backTracking = (tempArr) => {
        if (tempArr.length === nums.length) {
            answer.push([...tempArr])
            return
        }

        for (let i = 0; i < nums.length; i++) {
            if (checked[i]) continue

            checked[i] = true
            tempArr.push(nums[i])
            backTracking(tempArr)
            tempArr.pop()
            checked[i] = false
        }
    }

    backTracking([])
    return answer
};