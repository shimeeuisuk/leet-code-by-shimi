/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const start = 0
    let maxReachIndex = start

    if (nums.length === 1) return true

    for (let i = 0; i < nums.length; i++) {
        if (i > maxReachIndex) return false;
        maxReachIndex = Math.max(i + nums[i], maxReachIndex)
    }

    return true
};