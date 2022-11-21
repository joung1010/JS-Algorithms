// 1. 인접행렬
// 1. 연결이 안된 상태로 초기화
// 2. 행 렬의 열 부분을 시작 정점 행부분을 도착 정점
const graph = Array.from(Array(5), () => Array(5).fill(false));
console.log(graph);
graph[0][1] = true;
graph[0][3] = true;
graph[1][2] = true;
graph[2][0] = true;
graph[2][4] = true;
graph[3][2] = true;
graph[4][0] = true;