/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let prev = null;
  let curr = head;

  while (curr !== null) {
    let nextTemp = curr.next; // 다음 노드 저장
    curr.next = prev;         // 방향 뒤집기
    prev = curr;              // prev 이동
    curr = nextTemp;          // curr 이동
  }

  return prev;
};