/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let answer = [];

    const backTracking = (sum, startIndex, tempAnswer) => {
        if (sum > target) return;
        if (sum === target) {
            answer.push([...tempAnswer]);
            return;
        }

        for (let i = startIndex; i < candidates.length; i++) {
            tempAnswer.push(candidates[i]);                 
            backTracking(sum + candidates[i], i, tempAnswer); 
            tempAnswer.pop();                              
        }
    };

    backTracking(0, 0, []);
    return answer;
};