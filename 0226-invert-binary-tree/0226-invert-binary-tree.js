/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root === null) return null
    
    // 노드 전체 트리 담아둠
    const queue = [root]
    // 큐가 빌때까지 선출 할거임
    while (queue.length) {
        // 노드 뽑아냄
        const node = queue.shift()
        // 노드의 왼쪽과 오른쪽 변경
        ;[node.left, node.right] = [node.right, node.left]

        // 그리고 아래로 쭉 순회 변경하고 left 쭉 순회하면서 변경, right 쭉 순회하면서 변경
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
    }

    return root
};