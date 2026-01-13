/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 // 일단 인덱스로 생각해야하니까 m-1, n-1에 도달한다고 생각하자.
 // grid[m-1][n-1]에 도달하려면 두가지 방법 밖에 없음 i-1, j-1 방향에서 오는거.
 // 행 순회 열 순회 이중 for문 이겠지?? i:행, j:열
var uniquePaths = function(m, n) {
    // grid[m-1][n-1] 까지 도달 할 경우의 수
    let grid = Array.from({ length: m }, () => Array(n).fill(0));

    grid[0][0] = 1

    for(let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++ ) {
                if (i === 0 && j === 0) continue
                const fromLeft = j-1 >= 0 ? grid[i][j-1] : 0
                const fromTop = i-1 >= 0 ? grid[i-1][j] : 0

                grid[i][j] = fromLeft + fromTop
        }
    }

    return grid[m-1][n-1]
};