/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i=0; i<nums.length; i++) {
        let remainNum = target - nums[i]
        for (let j = i+1; j < nums.length; j++) {
            if (remainNum === nums[j]) return [i,j]
        }
    }
};