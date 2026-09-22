/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = []
    let check = Array.from({length: nums.length}, ()=>0)

    const DFS = (path, index) => {
        // 성공 조건
        if (path.length === nums.length) {
            result.push([...path])
            return
        }
        // 순회
        for (let i = 0; i < nums.length; i++) {
            path.push(nums[i])
            if (!check[i]) {
                check[i] = true
                DFS(path, i)
                check[i] = false
            }
            path.pop()
        }
    }

    DFS([],0)
    return result
};