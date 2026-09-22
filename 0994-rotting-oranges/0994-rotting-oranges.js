/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let minute = 0
    let fresh = 0
    let directions = [[0,1],[1,0],[0,-1],[-1,0]]

    // 처음 썪은 오렌지 큐에 넣고, 
    // fresh 오렌지 갯수를 센다(<- 다 썪었는지 볼려고)
    const queue = []
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if(grid[r][c] === 2) queue.push([r,c,0])
            if(grid[r][c] === 1) fresh++
        }
    }

    // 썪은 오렌지를 큐에 넣고, 큐에서 뺄때 다음 오렌지에 퍼트린다.
    // 큐에서 뺀 현재 썪은 오렌지 주변의 fresh를 발견하면 썪히고 fresh 갯수를 뺸다
    // 썪은 다음 오렌지는 큐에 넣는다.
    while (queue.length) {
        const [r,c,time] = queue.shift()
        minute = Math.max(minute, time)
        for (let i = 0; i < directions.length; i++) {
            const [dr,dc] = directions[i]
            const nr = r + dr
            const nc = c + dc
            if (nr>=0 && nr < grid.length && nc < grid[0].length && nc >=0 && grid[nr][nc] === 1) {
                grid[nr][nc] = 2
                fresh--
                queue.push([nr,nc,time+1])
            }
        }
    }

    return fresh === 0 ? minute : -1
};