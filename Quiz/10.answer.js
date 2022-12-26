/*
단순히 숫자 중 2개를 뽑은 조합을 구하면 되는 문제입니다.
    단, 중복을 제거하고 오름차순으로 정렬하는 것을 잊으면 안됩니다.
    위에서 작성한 조합 함수를 이용하면 쉽게 풀 수 있습니다.*/
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
    // 1. 조합을 구한다. n 개중 2개
    // 2. 조합의 합을 구한다.
    // 3. 중복을 제거한다.
    // 4. 오름차순 정렬한다.
    return [...new Set(combinations(numbers, 2).map(combi => combi[0] + combi[1]))].sort((a, b) => a - b);
}

