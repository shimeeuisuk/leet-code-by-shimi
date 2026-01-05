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


        if (node1 === null && node2 === null) continue
        // 둘 중 하나라도 다음 노드가 없으면
        if (node1 === null || node2 === null) return false
        // 노드의 값이 다르면 
        if (node1.val !== node2.val) return false

        queue.push([node1.left, node2.left])
        queue.push([node1.right, node2.right])
    }

    return true
};