// LZW 압축은 다음 과정을 거친다.

// 길이가 1인 모든 단어를 포함하도록 사전을 초기화한다.
// 사전에서 현재 입력과 일치하는 가장 긴 문자열 w를 찾는다.
// w에 해당하는 사전의 색인 번호를 출력하고, 입력에서 w를 제거한다.
// 입력에서 처리되지 않은 다음 글자가 남아있다면(c), w+c에 해당하는 단어를 사전에 등록한다.
// 단계 2로 돌아간다.
// 압축 알고리즘이 영문 대문자만 처리한다고 할 때, 사전은 다음과 같이 초기화된다. 사전의 색인 번호는 정수값으로 주어지며, 1부터 시작한다고 하자.

/*[...msg].reduce((acc, curr,idx,msgArr) => {
    arr.includes(acc) && result.push(arr.indexOf(acc) + 1);
    const char = acc + curr;

    if (arr.includes(char)) {
        return char;
    } else {
        arr.push(char);
        idx === msg.length - 1 && result.push(arr.indexOf(curr) + 1);
        return arr.includes(curr + msgArr[idx + 1]) ? curr + msgArr[idx + 1] : curr;
    }

});*/
function solution(msg) {
    const arr = Array.from({length: 26}, (v, i) => String.fromCharCode(i + 65));
    const result = [];
    const msgArr = msg.split("");
    while (msgArr.length) {
        let char = msgArr.shift();
        let char2 = char + msgArr[0];

        if (arr.includes(char)) {
            if (arr.includes(char2)) {
                msgArr.shift();
                result.push(arr.indexOf(char2) + 1);
            } else {
                result.push(arr.indexOf(char) + 1);
            }
            arr.push(char2);
        }
    }

    return result;
}

// console.log(solution("KAKAO"));
console.log(solution("TOBEORNOTTOBEORTOBEORNOT"));
//[
//   20, 15,  2,  5, 15, 18, 14,
//   15, 20, 27, 29, 31,  여기부터 오류  27, 29,
//   31, 33, 20
// ]