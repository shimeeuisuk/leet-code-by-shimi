// 시작 노드
var Trie = function() {
    this.root = {}
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root

    for (const char of word) {
        if(!node[char]) node[char] = {}
        node = node[char]
    }
    // 다 돌고 마지막인걸 알려주기
    node.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.root

    for (const char of word) {
        // 단어가 노드 경로에 있는지 보기
        if (!node[char]) return false
        // 노드를 다음 경로로 옮기기
        node = node[char]
    }
    // 다 돌고 트루인지 체크
    return node.isEnd === true
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.root;
    for (const char of prefix) {
        // char가 경로에 없으면 false
        if (!node[char]) return false;
        // 노드 경로 옮기기
        node = node[char];
    }
    // 끝까지 안봐도 됨 위에서 안걸러졌으면 됨
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */