/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const n = nums.length
    const middle = Math.floor(n / 2)

    for (let i = 0; i <= middle; i++) {
        let left = i
        let right = n - i - 1

        if (nums[left] === target) return left
        if (nums[right] === target) return right
    }

    return -1
};