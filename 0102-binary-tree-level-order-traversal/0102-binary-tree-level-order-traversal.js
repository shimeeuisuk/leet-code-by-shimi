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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return []

    let queue = [root]
    let answer = []

    while (queue.length) {
        let levelSize = queue.length
        let temp = []

        for(let i = 0; i < levelSize; i++) {
            let node = queue.shift()
            temp.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }

        answer.push(temp)
    }
    return answer
};