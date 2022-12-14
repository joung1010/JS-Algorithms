// N이 백만이면 O(N), O(N log N)
// 큰 값이 나오면 이전 값 중 더 작은 값은 전부다 삭제한다.
// 즉, 스택의 바닥에서부터 탑은 큰 수 부터 작은 수로 나열이 되어야한다.

function solution(number, k) {
    const stack = [];
    let count = 0;

    for (const item of number) {
        while (count < k && stack[stack.length - 1] < item) {
            stack.pop();
            count++;
        }
        stack.push(item);
    }
    // "9876543" <- stack에 하나도 pop이 발생하지 않는 경우
    while (count < k) {
        stack.pop();
        count++;
    }
    return stack.join("");
}

console.log(solution("4177252841", "4177252841".length - 1));