function solution(phone_book) {
    const phoneSet = new Set();
    phone_book.sort((a, b) => a - b);

    for (const phoneNum of phone_book) {
        const keys = phoneSet.values();
        for (const prefix of keys) {
            if (phoneNum.slice(0, prefix.length) === prefix) {
                return false;
            }
        }
        phoneSet.add(phoneNum);
    }
    return true;
}

// console.log(solution(["119", "97674223", "1195524421"]));
// console.log(solution(["123", "456", "789"]));
console.log(solution(["12", "123", "1235", "567", "88"]));

// 채점 결과
// 정확성: 83.3
// 효율성: 8.3
// 합계: 91.7 / 100.0