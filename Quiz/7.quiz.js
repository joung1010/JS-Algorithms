/*n개의 노드가 있는 그래프가 있습니다. 각 노드는 1부터 n까지 번호가 적혀있습니다.
1번 노드에서 가장 멀리 떨어진 노드의 갯수를 구하려고 합니다. 가장 멀리 떨어진 노드란 최단경로로 이동했을 때 간선의 개수가 가장 많은 노드들을 의미합니다.
노드의 개수 n, 간선에 대한 정보가 담긴 2차원 배열 vertex가 매개변수로 주어질 때, 1번 노드로부터 가장 멀리 떨어진 노드가 몇 개인지를 return 하도록 solution 함수를 작성해주세요.*/

/*
    제한사항
    노드의 개수 n은 2 이상 20,000 이하입니다.
    간선은 양방향이며 총 1개 이상 50,000개 이하의 간선이 있습니다.
    vertex 배열 각 행 [a, b]는 a번 노드와 b번 노드 사이에 간선이 있다는 의미입니다.*/

const BFS = (graph, startNode) => {
    const visited = [startNode];
    const queue = [];
    queue.push(startNode);

    while(queue.length){
        const node = queue.shift() - 1;
        // 주변탐색
        graph[node].forEach(line => {
            if (!visited[line - 1]) {
                queue.push(line);
                // 루트 노드에서 얼마나 떨어져있는지 확인
                visited[line - 1] = visited[node] + 1;
            }
        });
    }

    return visited;
}

function solution(n, edge) {
    const arr = Array.from(new Array(n), (_) => []);
    // 양방향
    for (const node of edge) {
        arr[node[0] - 1].push(node[1]);
        arr[node[1] - 1].push(node[0]);
    }
    console.log(arr);
    const res = BFS(arr, 1);
    console.log(res);
    const max = Math.max(...res);
    return res.filter(item => item === max).length;
}



console.log(solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]));
