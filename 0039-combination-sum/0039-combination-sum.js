/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = []
    const DFS = (path, start, sum) => {
        // 성공 조건
        if (sum === target) {
            result.push([...path])                     
            return
        }
        // 실패 조건
        if (sum > target) {
            return
        }
        // 순회
        for (let i = start; i < candidates.length; i++) {
            path.push(candidates[i])
            sum=sum+candidates[i]
            DFS(path, i, sum)
            path.pop()
            sum=sum-candidates[i]
        }
    }
    
    DFS([],0,0)
    return result
};