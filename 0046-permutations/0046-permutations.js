/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = []
    let check = Array.from({length: nums.length}, ()=>0)

    const DFS = (path) => {
        // 성공 조건
        if (path.length === nums.length) {
            result.push([...path])
            return
        }
        // 순회
        for (let i = 0; i < nums.length; i++) {
            if(check[i]) continue
            path.push(nums[i])
            check[i] = true
            DFS(path)
            path.pop()
            check[i] = false
        }
    }

    DFS([],0)
    return result
};