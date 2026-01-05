/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    const queue = [[p, q]]

    while (queue.length) {
        // 각 노드 선출로 뽑아냄
        const [node1, node2] = queue.shift()

        // 둘 다 노드가 없으면 그냥 넘어감
        if (node1 === null && node2 === null) continue
        // 둘 중 하나라도 다음 노드가 없으면 false
        if (node1 === null || node2 === null) return false
        // 노드의 값이 다르면 false
        if (node1.val !== node2.val) return false

        // 큐에 다음 비교할 애들을 넣는다. 노드의 left와 right 
        queue.push([node1.left, node2.left])
        queue.push([node1.right, node2.right])
    }

    // 다 돌았을 때 false로 안빠지면 true
    return true
};