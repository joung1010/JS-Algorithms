/*
N개의 마을로 이루어진 나라가 있습니다.
    이 나라의 각 마을에는 1부터 N까지의 번호가 각각 하나씩 부여되어 있습니다.
    각 마을은 양방향으로 통행할 수 있는 도로로 연결되어 있는데,
    서로 다른 마을 간에 이동할 때는 이 도로를 지나야 합니다. 도로를 지날 때 걸리는 시간은 도로별로 다릅니다. 현재 1번 마을에 있는 음식점에서 각 마을로 음식 배달을 하려고 합니다.
    각 마을로부터 음식 주문을 받으려고 하는데, N개의 마을 중에서 K 시간 이하로 배달이 가능한 마을에서만 주문을 받으려고 합니다. 다음은 N = 5, K = 3인 경우의 예시입니다.*/


/*위 그림에서 1번 마을에 있는 음식점은 [1, 2, 4, 5] 번 마을까지는 3 이하의 시간에 배달할 수 있습니다. 그러나 3번 마을까지는 3시간 이내로 배달할 수 있는 경로가 없으므로 3번 마을에서는 주문을 받지 않습니다. 따라서 1번 마을에 있는 음식점이 배달 주문을 받을 수 있는 마을은 4개가 됩니다.
    마을의 개수 N, 각 마을을 연결하는 도로의 정보 road, 음식 배달이 가능한 시간 K가 매개변수로 주어질 때, 음식 주문을 받을 수 있는 마을의 개수를 return 하도록 solution 함수를 완성해주세요*/


/*
제한사항
마을의 개수 N은 1 이상 50 이하의 자연수입니다.
    road의 길이(도로 정보의 개수)는 1 이상 2,000 이하입니다.
    road의 각 원소는 마을을 연결하고 있는 각 도로의 정보를 나타냅니다.
    road는 길이가 3인 배열이며, 순서대로 (a, b, c)를 나타냅니다.
    a, b(1 ≤ a, b ≤ N, a != b)는 도로가 연결하는 두 마을의 번호이며, c(1 ≤ c ≤ 10,000, c는 자연수)는 도로를 지나는데 걸리는 시간입니다.
    두 마을 a, b를 연결하는 도로는 여러 개가 있을 수 있습니다.
    한 도로의 정보가 여러 번 중복해서 주어지지 않습니다.
    K는 음식 배달이 가능한 시간을 나타내며, 1 이상 500,000 이하입니다.
    임의의 두 마을간에 항상 이동 가능한 경로가 존재합니다.
1번 마을에 있는 음식점이 K 이하의 시간에 배달이 가능한 마을의 개수를 return 하면 됩니다.*/


// N = 5 ,Road: [[1,2,1],[2,3,3],[5,2,2],[1,4,2],[5,3,1],[5,4,2]] , k = 3, result = 4
/*1.시작점을 제외한 모든 정점의 거리를 무한으로 설정, 시작점은 0으로 설정
2.시작점을 선택
3.선택한 정점에서 갈수 있는 정점의 거리를
4.정점(해당 정점까지 최단 거리)값 + 간선(거리) 값으로 갱신한다.
5.선택한 정점을 방문 처리한다.
6.이미 방문한 정점과 무한인 정점을 제외하고 가장 최단 거리인 정점을 선택한다.
7.더 이상 방문할 수 있는 정점이 ㅇ벗을 때 까지 3~5를 반복한다.
8.도착점의 값을 확인한다.*/


/*
{
    node: "number", // 정점 번호
        cost: "number"  // 간선의 값
} 추가될 value 값은 객체 형태이다.
*/



class Heap {
    constructor() {
        this.heap = [null];
    }

    push(value) {
        this.heap.push(value);
        let currentIndex = this.heap.length - 1;
        let parentIndex = Math.floor(currentIndex / 2);

        while (parentIndex !== 0 && this.heap[parentIndex].cost > value.cost) {
            this._swap(parentIndex, currentIndex)

            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex / 2);
        }
    }

    pop() {
        if (this.isEmpty()) return;
        if (this.heap.length === 2) return this.heap.pop();

        const returnValue = this.heap[1];
        this.heap[1] = this.heap.pop();

        let currentIndex  = 1;
        let leftIndex = 2;
        let rightIndex = 3;
        while ((this.heap[leftIndex] && this.heap[currentIndex].cost > this.heap[leftIndex].cost) ||
        (this.heap[rightIndex] && this.heap[currentIndex].cost > this.heap[rightIndex].cost)) {
            if (this.heap[leftIndex] === undefined) { // 왼쪽 정점이 없을 경우
                this._swap(rightIndex, currentIndex)
            } else if (this.heap[rightIndex] === undefined) { // 오른쪽 정점이 없을 경우
                this._swap(leftIndex, currentIndex)
            } else if (this.heap[leftIndex].cost > this.heap[rightIndex].cost) {
                this._swap(rightIndex, currentIndex)
            } else if (this.heap[leftIndex].cost <= this.heap[rightIndex].cost) {
                this._swap(leftIndex, currentIndex)
            }
            leftIndex = currentIndex * 2;
            rightIndex = currentIndex * 2 + 1;
        }

        return returnValue;
    }

    isEmpty() {
        return this.heap.length === 1;
    }

    _swap(a, b) { // 편의를 위해 배열의 요소를 swap하는 함수 작성
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
}

/*다익스트라 알고리즘 구현
힙까지 구현했다면 다익스트라 알고리즘 자체는 크게 어렵지 않습니다.

    먼저 힙을 생성합니다.
    각 정점에 대한 최단 거리를 저장할 배열을 무한대로 초기화합니다.
    힙에 시작점을 추가합니다.
    힙이 비어있지 않을 때 까지 루프를 돕니다.
    선택된 정점에서 갈 수 있는 정점을 찾습니다.
    더 짧은 경로라면 값을 갱신합니다.
    루프가 종료되면 최단 거리 배열을 반환합니다.
    위와 같은 흐름으로 알고리즘을 작성한 코드는 다음과 같습니다.*/

function dijkstra(road, N) {
    const heap = new Heap(); // 우선순위 큐(힙)
    heap.push({ node: 1, cost: 0 }) // 1번 마을부터 시작

    const dist = [...Array(N + 1)].map(() => Infinity); // 계산하기 편하도록 N+1 길이만큼 리스트 생성
    dist[1] = 0; // 1번 마을은 무조건 거리가 0

    while (!heap.isEmpty()) { // heap이 비어있지 않다면
        // cost가 가장 낮은 정점을 뽑는다.
        const { node: current, cost: currentCost } = heap.pop();

        for (const [src, dest, cost] of road) { // 루프를 돌며 시작점, 도착점, 비용을 꺼낸다
            const nextCost = cost + currentCost; // 비용

            // 양방향을 고려하여 작성
            if (src === current && nextCost < dist[dest]) {
                // src가 현재 선택된 정점이면서 목적지까지 더 저렴할 경우
                dist[dest] = nextCost; // 거리를 갱신한다.
                heap.push({ node: dest, cost: nextCost }); // push
            } else if (dest == current && nextCost < dist[src]) {
                // dest가 현재 선택된 정점이면서 목적지까지 더 저렴할 경우
                dist[src] = nextCost; // 거리를 갱신한다.
                heap.push({ node: src, cost: nextCost }); // push
            }
        }
    }

    return dist; // 1번 마을부터 각 마을까지의 최단 거리
}


function solution(N, road, K) {
    const dist = dijkstra(road, N);
    console.log(dist);
    return dist.filter(x => x <= K).length;
}

console.log(solution(5, [[1, 2, 1], [2, 3, 3], [5, 2, 2], [1, 4, 2], [5, 3, 1], [5, 4, 2]],3));
