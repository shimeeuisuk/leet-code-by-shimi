var KthLargest = function(k, nums) {
    this.limit = k;        // 몇 번째 큰 수인지
    this.minHeap = [];     // 작은 값이 위에 오는 힙

    for (const num of nums) {
        this.add(num);
    }
};

KthLargest.prototype.add = function(value) {
    // 값 추가
    this.minHeap.push(value);
    this.moveUp(this.minHeap.length - 1);

    // k개 초과하면 가장 작은 값 제거
    if (this.minHeap.length > this.limit) {
        this.removeMin();
    }

    // 루트 = k번째 큰 값
    return this.minHeap[0];
};

// ===== 힙 보조 함수 =====

// 아래 → 위로 올리기
KthLargest.prototype.moveUp = function(index) {
    while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);

        if (this.minHeap[parentIndex] <= this.minHeap[index]) break;

        [this.minHeap[parentIndex], this.minHeap[index]] =
        [this.minHeap[index], this.minHeap[parentIndex]];

        index = parentIndex;
    }
};

// 위 → 아래로 내리기
KthLargest.prototype.moveDown = function(index) {
    const size = this.minHeap.length;

    while (true) {
        let smallestIndex = index;
        const leftIndex = index * 2 + 1;
        const rightIndex = index * 2 + 2;

        if (leftIndex < size && this.minHeap[leftIndex] < this.minHeap[smallestIndex]) {
            smallestIndex = leftIndex;
        }

        if (rightIndex < size && this.minHeap[rightIndex] < this.minHeap[smallestIndex]) {
            smallestIndex = rightIndex;
        }

        if (smallestIndex === index) break;

        [this.minHeap[index], this.minHeap[smallestIndex]] =
        [this.minHeap[smallestIndex], this.minHeap[index]];

        index = smallestIndex;
    }
};

// 가장 작은 값 제거
KthLargest.prototype.removeMin = function() {
    const lastValue = this.minHeap.pop();

    if (this.minHeap.length === 0) return;

    this.minHeap[0] = lastValue;
    this.moveDown(0);
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */