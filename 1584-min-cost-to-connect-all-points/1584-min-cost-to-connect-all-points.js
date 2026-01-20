/**
 * @param {number[][]} points
 * @return {number}
 */
/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
    let checked = Array(points.length).fill(0) 
    let minDistance = Array(points.length).fill(Number.MAX_SAFE_INTEGER)
    let answer = 0

    minDistance[0] = 0

    for (let i = 0; i < points.length; i++) {
        let distance = Number.MAX_SAFE_INTEGER
        let tempArrive = -1

        for (let j = 0; j < points.length; j++) {
            if (!checked[j] && minDistance[j] < distance) {
                distance = minDistance[j]
                tempArrive = j
            }
        }

        checked[tempArrive] = 1
        answer += distance

        for (let j = 0; j < points.length; j++) {
            if (!checked[j]) {
                let tempDis =
                    Math.abs(points[tempArrive][0] - points[j][0]) +
                    Math.abs(points[tempArrive][1] - points[j][1])

                if (tempDis < minDistance[j]) {
                    minDistance[j] = tempDis
                }
            }
        }
    }

    return answer
};