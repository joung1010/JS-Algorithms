// 핵심 키워드는 "노두", "간선", "최단 경로"
// 최단 경로가 제일 큰 경우의 집합을 구하는 문제

function solution(n, edge) {
    const graph = Array.from(Array(n + 1), () => []);
    // 양 방향
    for (const [src,dest] of edge) {
        graph[src].push(dest);
        graph[dest].push(src);
    }

    const distance = Array(n + 1).fill(0);
    distance[1] = 1;

    // BFS
    const queue = [1];
    while (queue.length) {
        const src = queue.shift(); // shift는 O(n)이지만 요소가 적을 경우에는 자바스크립트 엔진에서 최적화를 해줘요.
        for (const dest of graph[src]) {
            if (!distance[dest]) {
                queue.push(dest);
                // 도착지는 출발지에 +1
                distance[dest] = distance[src] + 1;
            }
        }
    }
    console.log(distance);
    const max = Math.max(...distance);
    return distance.filter(item => item === max).length;
}


class Queue {
    constructor() {
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }

    enQueue(value) {
        this.queue[this.rear++] = value;
    }

    deQueue() {
        const value = this.queue[this.front];
        delete this.queue[this.front];
        this.front++;
        return value;
    }

    isEmpty() {
        return this.rear === this.front;
    }
}

function solution2(n, edge) {
    const graph = Array.from(Array(n + 1), () => []);
    // 양 방향
    for (const [src,dest] of edge) {
        graph[src].push(dest);
        graph[dest].push(src);
    }

    const distance = Array(n + 1).fill(0);
    distance[1] = 1;

    // BFS
    const queue = new Queue();
    queue.enQueue(1);
    while (!queue.isEmpty()) {
        const src = queue.deQueue(); // shift는 O(n)이지만 요소가 적을 경우에는 자바스크립트 엔진에서 최적화를 해줘요.
        for (const dest of graph[src]) {
            if (!distance[dest]) {
                queue.enQueue(dest);
                distance[dest] = distance[src] + 1;
            }
        }
    }
    console.log(distance);
    const max = Math.max(...distance);
    return distance.filter(item => item === max).length;
}


console.log(solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]));
console.log(solution2(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]));
