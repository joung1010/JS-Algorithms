/*
어떤 숫자에서 k개의 수를 제거했을 때 얻을 수 있는 가장 큰 숫자를 구하려 합니다.

    예를 들어, 숫자 1924에서 수 두 개를 제거하면 [19, 12, 14, 92, 94, 24] 를 만들 수 있습니다. 이 중 가장 큰 숫자는 94 입니다.

    문자열 형식으로 숫자 number와 제거할 수의 개수 k가 solution 함수의 매개변수로 주어집니다.
    number에서 k 개의 수를 제거했을 때 만들 수 있는 수 중 가장 큰 숫자를 문자열 형태로 return 하도록 solution 함수를 완성하세요.*/


/*
제한 조건
number는 2자리 이상, 1,000,000자리 이하인 숫자입니다.
    k는 1 이상 number의 자릿수 미만인 자연수입니다.*/
// k = 2
// 1 9 2 4
//  1: [1]
//  2 : 9 < [1] -> [9]
// 3 : 2 < [9] -> [9, 2]
// 4 :4  < [9,2]:2 -> [9,4]






function solution(number, k) {
    if(number.length - 1 ===k) return [...number].sort((a, b) => parseInt(b) - parseInt(a))[0];
    const res = [];
    for (const num of number) {
        while (k > 0 && res[res.length - 1] < num) {
            res.pop();
            k--;
        }
        res.push(num);
    }
    return res.join('');
}

// console.log(solution("1924", 2));
// console.log(solution("1231234", 3));
console.log(solution("4177252841", "4177252841".length - 1));
// console.log(solution("4177252841", 4));