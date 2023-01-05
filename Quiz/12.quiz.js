// n개의 섬 사이에 다리를 건설하는 비용(costs)이 주어질 때, 최소의 비용으로 모든 섬이 서로 통행 가능하도록 만들 때 필요한 최소 비용을 return 하도록 solution을 완성하세요.
// 다리를 여러 번 건너더라도, 도달할 수만 있으면 통행 가능하다고 봅니다. 예를 들어 A 섬과 B 섬 사이에 다리가 있고, B 섬과 C 섬 사이에 다리가 있으면 A 섬과 C 섬은 서로 통행 가능합니다.
// 제한사항
/*
    섬의 개수 n은 1 이상 100 이하입니다.
    costs의 길이는 ((n-1) * n) / 2이하입니다.
    임의의 i에 대해, costs[i][0] 와 costs[i] [1]에는 다리가 연결되는 두 섬의 번호가 들어있고, costs[i] [2]에는 이 두 섬을 연결하는 다리를 건설할 때 드는 비용입니다.
    같은 연결은 두 번 주어지지 않습니다. 또한 순서가 바뀌더라도 같은 연결로 봅니다. 즉 0과 1 사이를 연결하는 비용이 주어졌을 때, 1과 0의 비용이 주어지지 않습니다.
    모든 섬 사이의 다리 건설 비용이 주어지지 않습니다. 이 경우, 두 섬 사이의 건설이 불가능한 것으로 봅니다.
    연결할 수 없는 섬은 주어지지 않습니다.
 */


// n = 섬의 개수
// cost의 배열 [[0,1,1],[0,2,2],[1,2,5],[1,3,1],[2,3,8]]
// [시작섬, 도착섬, 건설비용]
/*
*
[                                 0 1
{ src: 0, dest: 1, cost: 1 },     [0,1,2,3]   [0,0,2,3]
*                                   1   3
{ src: 1, dest: 3, cost: 1 },     [0,1,2,3]   [0,0,2,1]
*                                  0   2
{ src: 0, dest: 2, cost: 2 },     [0,1,2,3]   [0,0,0,1]
*                                   1 2
{ src: 1, dest: 2, cost: 5 },    [0,1,2,3]   [0,0,0,1]
*                                 1 ->  0 , 2 -> 0
*                                                 -> 최상위 부모가 같다 -> 같은 그룹이다.
*                                      2 3
{ src: 2, dest: 3, cost: 8 }      [0,1,2,3]   [0,0,0,1]
*                                     2-> 0, 3-> 1
*                                                1 -> 0
*                                                     -> 최상위 부모가 같다 -> 같은 그룹이다.
]

*   -> 같은 그룹으로 인해 발생한 Cycle을 제외하고 cost 비용의 합을 구한다.
*
* */

function find(node,array) {
    if (array[node] === node) return node;
    return  array[node] = find(array[node], array);
}


const kruskal = (n, cost) => {
    const disJoin = Array.from(new Array(n), (_, idx) => idx);
    const degrees = [];

    cost.forEach((item) => {
        const [src,dest,cost] = item
        degrees.push({src,dest,cost});
    });

    return  degrees.sort((a, b) => a.cost - b.cost)
        .filter(item => {
            const {src, dest, cost} = item;
            const srcNode = find(src, disJoin);
            const destNode = find(dest, disJoin);
            if (srcNode === destNode) {
                return false;
            }
            // 더 작은 비용 작은 쪽으로 병합
            if(srcNode < destNode) disJoin[destNode] = srcNode
            else disJoin[srcNode] = destNode
            return true;
        });
};


function solution(n, costs) {
    if(n === 1) return costs[0][2];
    return kruskal(n,costs).reduce((acc,cur) => acc + cur.cost,0);
}


// console.log(kruskal(4, [[0, 1, 1], [0, 2, 2], [1, 2, 5], [1, 3, 1], [2, 3, 8]]));
console.log(solution(4, [[0, 1, 1], [0, 2, 2], [1, 2, 5], [1, 3, 1], [2, 3, 8]]));
// console.log(solution(1, [[0, 1, 1]]));