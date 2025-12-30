/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
 // 차를 타겟까지 이동 시키면서 겹치는 위치가 있으면 카운트
 // 겹치는 위치는 어떻게 알까? -> 현재위치에서 타겟까지 몇분만에 가는가?
 // 만약 뒤에 있는 차가 앞에 있는 차보다 걸리는 시간이 적거나 같으면 겹침 (추월되는 것이기 때문에)
 // 그런데 뒤에 있는 차가 앞에 있는 차보다 걸리는 시간이 많이 걸리면 영원히 따라잡을 수 없으므로 다른 그룹
var carFleet = function(target, position, speed) {
    if (position.length === 1) return 1

    // 포지션 오름차순으로 걸리는 시간 배열 형태로 만듬
    const timeArrBySortedPostion = position.map((e, i) => [e, (target - e) / speed[i]]).sort((a,b) => a[0] - b[0]).map(e => e[1])

    let maxTime = Number.MIN_SAFE_INTEGER
    let answer = 0
    for (let i = position.length -1; i >= 0; i--) {
        if (timeArrBySortedPostion[i] > maxTime) {
            answer++
            maxTime = timeArrBySortedPostion[i]
        }
    }

    return answer
};