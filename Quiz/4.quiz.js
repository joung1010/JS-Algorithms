/*
OO 조선소에서는 태풍으로 인한 작업지연으로 수주한 선박들을 기한 내에 완성하지 못할 것이 예상됩니다.
    기한 내에 완성하지 못하면 손해 배상을 해야 하므로 남은 일의 작업량을 숫자로 매기고 배상비용을 최소화하는 방법을 찾으려고 합니다.
    배상 비용은 각 선박의 완성까지 남은 일의 작업량을 제곱하여 모두 더한 값이 됩니다.

    조선소에서는 1시간 동안 남은 일 중 하나를 골라 작업량 1만큼 처리할 수 있습니다.
    조선소에서 작업할 수 있는 N 시간과 각 일에 대한 작업량이 담긴 배열(works)이 있을 때 배상 비용을 최소화한 결과를 반환하는 함수를 만들어 주세요.
    예를 들어, N=4일 때, 선박별로 남은 일의 작업량이 works = [4, 3, 3]이라면 배상 비용을 최소화하기 위해 일을 한 결과는 [2, 2, 2]가 되고 배상 비용은 22 + 22 + 22 = 12가 되어 12를 반환해 줍니다.*/

// 1.남은 일의 작업량을 숫자로 매기고 배상비용을 최소화하는 방법을 찾으려고 합니다.
// 2.배상 비용은 각 선박의 완성까지 남은 일의 작업량을 제곱하여 모두 더한 값이 됩니다.
// 3. 조선소에서는 1시간 동안 남은 일 중 하나를 골라 작업량 1만큼 처리할 수 있습니다.

class MaxHeap {
    constructor() {
        this.heap = [null];
    }

    push(value) {
        this.heap.push(value);
        let currIndex = this.heap.length - 1;
        let parentIndex = Math.floor(currIndex / 2);

        while (parentIndex !== 0 && this.heap[parentIndex] < value) {
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

    get maxHeap() {
        return [...this.heap];
    }
}




function solution(no, works) {
    if(works.reduce((a, b) => a+b,0) <= no) return 0;

    const heap = new MaxHeap();
   for(let i =0; i<works.length; i++){
       heap.push(works[i]);
    }
    for (let i = 0; i < no; i++) {
        heap.push(heap.pop() - 1);
    }
    return heap.maxHeap.reduce((acc,cur)=>acc+cur*cur,0);
}
//효율성 테스트 실패 (시간 초과)

console.log([2, 3, 3].sort((a, b) => b - a));
console.log(solution(4, [4, 3, 3]));
console.log(solution(2, [3, 3, 3]));