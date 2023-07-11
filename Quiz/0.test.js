function solution(m, n, board) {
    const gameBoard = Array.from({length: m}, (_, i) => [...board[i]]);
    for (let i = 0; i < m; i++) {
        findBingo(gameBoard, n, m);
    }
    return gameBoard.flatMap(v => v).filter(v => !v).length
}

const findBingo = (board, width, height) => {
    const binggo = Array.from({length: height}, () => Array(height).fill(false));
    for (let i = 1; i < height; i++) {
        for (let j = 1; j < width; j++) {
            if (!board[i][j] || !board[i][j - 1] || !board[i - 1][j - 1] || !board[i - 1][j]) continue;
            if (board[i][j] === board[i][j - 1] && board[i][j] === board[i - 1][j - 1] && board[i][j] === board[i - 1][j]) {
                binggo[i][j] = true;
                binggo[i][j - 1] = true;
                binggo[i - 1][j - 1] = true;
                binggo[i - 1][j] = true;
            }
        }
    }
    makeBoard(board, binggo);
};


const makeBoard = (board, binggo) => {
    binggo.forEach((binggo, i) => {
        for (let j = 0; j < binggo.length; j++) {
            if (binggo[j]) {
                board[i][j] = null;
            }
        }
    });
    for (let i = 0; i < board.length - 1; i++) {
        // null 처리 후에 한칸 식 이동하는 것이 아니라 전부 옮겨 보자
        board[i].forEach((item, idx) => {
            if (!item) return;
            if (!board[i + 1][idx]) [board[i + 1][idx], board[i][idx]] = [item, null];
        });
    }
};

// console.log(solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"]));
// console.log(solution(6, 6, ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"]));
console.log(solution(5, 6, ["AAAAAA",
    "BBAATB",
    "BBAATB",
    "JJJTAA",
    "JJJTAA"]));


// 채점 결과
// 정확성: 81.8
// 합계: 81.8 / 100.0