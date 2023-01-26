// 최단거리 힙 다시 풀기
// 1.heap 구현

class Heap {
    constructor() {
        this.heap = [null];
    }

    push(value) {
        this.heap.push(value);
        let currIndex = this.heap.length - 1;
        let parentIndex = Math.floor(currIndex / 2);

        while (parentIndex !== 0 && this.heap[parentIndex].cost < value.cost) {
            const temp = this.heap[parentIndex];
            this.heap[parentIndex] = value;
            this.heap[currIndex] = temp;

            currIndex = parentIndex;
            parentIndex = Math.floor(currIndex / 2);
        }
    }

    pop() {
        if (this.heap.length === 2) return this.heap.pop();

        const returnValue = this.heap[1];
        this.heap[1] = this.heap.pop();

        let currentIndex = 1;
        let leftIndex = 2;
        let rightIndex = 3;
        while (this.heap[currentIndex] < this.heap[leftIndex] || this.heap[currentIndex] < this.heap[rightIndex]) {
            if (this.heap[leftIndex] < this.heap[rightIndex]) {
                const temp = this.heap[currentIndex];
                this.heap[currentIndex] = this.heap[rightIndex]
                this.heap[rightIndex] = temp;
                currentIndex = rightIndex;
            } else {
                const temp = this.heap[currentIndex];
                this.heap[currentIndex] = this.heap[leftIndex];
                this.heap[leftIndex] = temp;
                currentIndex = leftIndex;
            }
            // 바뀐 정점을 기준으로 다시 오른쪽 정점과 왼쪽 정점을 다시 구한다.
            leftIndex = currentIndex * 2;
            rightIndex = currentIndex * 2 + 1;
        }
        return returnValue;
    }

    isEmpty() {
        return this.heap.length === 2;
    }

    _swap(a, b) {
        [this.heap[b], this.heap[a]] = [this.heap[a], this.heap[b]];
    }
}