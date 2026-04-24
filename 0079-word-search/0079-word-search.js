/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const m = board.length
    const n = board[0].length
    const DFS = (r,c,i) => {
        // DFS 끝나는 조건 
        if (i === word.length) return true
        if (r<0 || r>=m || c<0 || c>=n || board[r][c] !== word[i]) return false

        const temp = board[r][c]
        // 지나온 자리 다시 안가도록
        board[r][c] = 'checked'

        const matched = DFS(r+1,c,i+1) || DFS(r-1,c,i+1) || DFS(r,c+1,i+1) || DFS(r,c-1,i+1)
        board[r][c] = temp

        return matched
    }
    
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (DFS(r, c, 0)) return true;
        }
  }

  return false;
};