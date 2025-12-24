/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let half = Math.floor(nums.length/2)
    let left
    let right
    if (nums.length % 2 === 0) {
        left = half - 1
        right = half
    } else {
        left = half - 1
        right = half + 1
    }
    if (nums[half] === target) return half
    while (left >= 0 && right <= nums.length-1) {
        if (nums[left] === target) {
            return left
        }
        if (nums[right] === target) {
            return right
        }
        left--
        right++
    }
    return -1
   
};