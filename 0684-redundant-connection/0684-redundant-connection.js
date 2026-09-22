/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    const n = edges.length
    // 처음엔 자기 자신이 부모 노드
    const parent = Array.from({length: n+1},(_,i)=>i)

    // find 함수 : x가 속한 그룹을 찾는 함수
    const find = (x) => {
        // 자기 자신이 부모라면 x가 그룹의 대표라는 뜻
        if (parent[x] === x) return x

        // 자기 자신이 부모가 아니라면 쭉 올라가서 최종 부모를 찾는다.
        parent[x] = find(parent[x])
        return parent[x]
    }

    // union 함수 : a와 b가 속한 그룹을 합친다
    const union = (a, b) => {
        const rootA = find(a)
        const rootB = find(b)

        if (rootA === rootB) return false
        parent[rootB] = rootA

        return true
    }

    for (const [a, b] of edges) {
        if(union(a, b) === false) {
            return [a, b]
        }
    }

    return []
};