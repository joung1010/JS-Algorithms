/*정수 배열 numbers가 주어집니다.
    numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.*/

/*
제한사항
numbers의 길이는 2 이상 100 이하입니다.
    numbers의 모든 수는 0 이상 100 이하입니다.*/

function combinations(arr, n) {
    if (n === 1) return arr.map((v) => [v]);
    const result = [];

    arr.forEach((fixed, idx, arr) => {
        const rest = arr.slice(idx + 1);
        const combis = combinations(rest, n - 1);
        const combine = combis.map((v) => [fixed, ...v]);
        result.push(...combine);
    });
    return result;
}


function solution(numbers) {
    return [...new Set(combinations(numbers, 2).map(item => item[0] + item[1]))].sort((a, b) => a - b);
}

console.log(solution([2, 1, 3, 4, 1]));