/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let answer = []
    let [newStart, newEnd] = newInterval

    for (let [start, end] of intervals) {
        if (end < newStart || start > newEnd) {
            answer.push([start, end])
        }else {
            newStart = Math.min(start, newStart)
            newEnd = Math.max(end, newEnd)
        }
    }

    answer.push([newStart, newEnd])
    return answer.sort((a,b)=>a[0]-b[0])
};