// 가로, 세로 길이가 n인 정사각형으로된 체스판이 있습니다. 체스판 위의 n개의 퀸이 서로를 공격할 수 없도록 배치하고 싶습니다.
// 예를 들어서 n이 4인경우 다음과 같이 퀸을 배치하면 n개의 퀸은 서로를 한번에 공격 할 수 없습니다.

// 체스판의 가로 세로의 세로의 길이 n이 매개변수로 주어질 때, n개의 퀸이 조건에 만족 하도록 배치할 수 있는 방법의 수를 return하는 solution함수를 완성해주세요.

// 제한사항
//     퀸(Queen)은 가로, 세로, 대각선으로 이동할 수 있습니다.
//     n은 12이하의 자연수 입니다.

// n -> 4
// 4 * 4 체스판 위에 4개의 퀸이 서로 공격 하지 않게 배치
//      (0,0),(0,1),(0,2),(0,3)
//      (1,0),(1,1),(1,2),(1,3)
//      (2,0),(2,1),(2,2),(2,3)
//      (3,0),(3,1),(3,2),(3,3)

// const queen[0] = 0 -> 첫번째 칸에 퀸을 둠
//   queen[0] = 1, queen[0] = 2, queen[0] = 3 퀸을 둔 그줄은 둘 수 없다
//   queen[1] = 0, queen[2] = 0, queen[3] = 0, 퀸을 둔 밑에 줄
//   queen[1] = 1 , queen[2] =  2 , queen[3] = 3 퀸을 둔 대각선
//   대각선 : (0,0),(1,1), (2,2), (3,3)

// queen[0] = 1
// queen[1] = 0  왼쪽 대각선
// queen[1] =2 , queen[2] = 3

// 0 1 2 3

// 대각선 인덱스는  (현재위치  - 퀸을둔 위치)
//                  0              1        -1
//                  1              1        0 (현재 퀸위치와 같아서 제외)
//                  2              1        1
//                  3              1        2


//  체스판[퀸을둔 위치] === 체스판[현재위치]
//           체스판[현재 위치]  -    체스판[퀸을둔 위치]                (현재위치  - 퀸을둔 위치)

//0:1===0             0                   1                         0             1

//0:2===0             0                   2                         0             2
//1:2===1             1                   2                         1             2

//0:3===0             0                   3                         0             3
//1:3===1             1                   3                         1             3
//2:3===2             2                   3                         2             3


// 대각선 위치는
// 0 1 2 3
//

const checkChessBoard = (board, row) => {
    for (let i = 0; i < row; i++) {
        // 같은 줄                     대각 선 길이가 같다는 것은 행 과 열의 길이가 같다는 뜻
        if (board[row] === board[i] || Math.abs(board[row] - board[i]) === Math.abs(row - i)) return false;
    }
    return true;
};


const setQueen = (chessboard, row) => {
    const n = chessboard.length;
    // 퀸을 체스판에 서로 공격하지 않게 전부 둠
    if (n === row) return 1;
    let cnt = 0;
    // 퀸을 n개 만큼 둔다
    for (let i = 0; i < n; i++) {//옆칸으로 이동
        // 체스판의 첫번째 줄에 하나씩 둔다.
        chessboard[row] = i; //체스판의 row행의 i번째에 퀸을 둔다.
        // 퀸을 둘 수 있다면 행을 이동 -> 1줄 내려감
        if (checkChessBoard(chessboard, row)) cnt += setQueen(chessboard, row + 1);
    }
    return cnt;
};


function solution(n) {
    return setQueen(new Array(n).fill(0), 0);
};

console.log(solution(4));
