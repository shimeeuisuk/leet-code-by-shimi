/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let n = nums.length
    let answer = []
    let temp =[]

    for (let i=0; i<n-2; i++) {
        let standard = nums[i]
        const target = -standard
        const extraArray = nums.slice(i+1).sort((a,b)=>a-b)
        let l = 0
        let r = extraArray.length-1
        while (l<r) {
            const sum = extraArray[l] + extraArray[r]
            if (sum < target) l++
            if (sum > target) r--
            if (sum === target) {
                temp = [nums[i], extraArray[l], extraArray[r]]
                temp.sort((a,b)=>a-b)
                answer.push(temp)
                temp = []
                l++
            }
        }
    }
    return Array.from(new Set(answer.map(JSON.stringify))).map(JSON.parse);
};