/**
 * @param {number[]} cost
 * @return {number}
 */
// 정상까지 갈 때 n-1을 밝고 올거냐 n-2를 밟고 올거냐 -> 최소 비용을 밟고 올라와야지
// 배열 돌면서 각 인데스에 도착하기 위한 최소비용을 구한다.
var minCostClimbingStairs = function(cost) {
    const n = cost.length

    // 두칸 전까지 최소비용 
    let dp0 = 0
    // 한칸 전까지 최소비용
    let dp1 = 0

    for (let i = 2; i <= n; i++) {
       const curMinCost = Math.min(dp0 + cost[i-2], dp1 + cost[i-1])
       // 다음 인덱스에서 구할 최소비용을 위해 옮겨야함 저장 해놔야함.
       // 예를 들어, 지금 4인덱스에 도달하기 위한 최소비용이 curMinCost에 담겨있으니까
       // 이제 다음 5인덱스 입장에서는 4 인덱스가 i-1이고, 3인덱스가 i-2 임
       // 그래서 하나씩 밀어야함.
        dp0 = dp1
        dp1 = curMinCost
    }

    return dp1 
};