/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// start 오름차순으로 sort를 먼저해야 편할듯? -> 큰 배열일 땐.. 시간 복잡도 쉣 몰랑.....
// 그래서 다음 간격이 이전 간격이랑 겹치면 범위 확장 
// 안겹치면 새로운 간격
var merge = function(intervals) {
    intervals.sort((a,b)=>a[0]-b[0])
    
    let answer = []
    let tempStart = intervals[0][0]
    let tempEnd = intervals[0][1]

    for (let i = 1; i < intervals.length; i++) {
        const interval = intervals[i]
        const [start, end] = interval

        if (tempEnd >= start) {
            tempStart = Math.min(start, tempStart)
            tempEnd = Math.max(end, tempEnd)
        }else {
            // 지금까지 설정한 범위 넣기
            answer.push([tempStart, tempEnd])
            // 새로운 범위를 지금으로 바꾸기
            tempStart = start
            tempEnd = end
        }
    }
    answer.push([tempStart, tempEnd])
    return answer
};