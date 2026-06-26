/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 // 브루토 포스
// var twoSum = function(nums, target) {
//     for (let i=0; i<nums.length; i++) {
//         let remainNum = target - nums[i]
//         for (let j = i+1; j < nums.length; j++) {
//             if (remainNum === nums[j]) return [i,j]
//         }
//     }
// };

// 해시맵
var twoSum = function(nums, target) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i)
    }

    for (let j = 0; j < nums.length; j++) {
        const remain = target - nums[j];
        if (map.has(remain) && map.get(remain) !== j) {
            return [j, map.get(remain)]
        }
    }
};