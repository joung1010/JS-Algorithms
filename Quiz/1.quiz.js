/*
*   괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어

"()()" 또는 "(())()" 는 올바른 괄호입니다.
")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
'(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.

제한사항
문자열 s의 길이 : 100,000 이하의 자연수
문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.
*
*
*
* */


/*function solution(s){
    if (s.length >= 100000) {
        return false;
    }
    if (!/[\(\)]/gm.test(s)) {
        return false;
    }

    let cnt = 0;
    for (const value of s) {
        if (value === '(') {
            cnt++;
        } else {
            cnt--;
            if(cnt<0) return false;
        }

    }

    return cnt === 0;
}*/

/*function solution(s){
    if (s.length >= 100000) {
        return false;
    }
    if (!/[\(\)]/gm.test(s)) {
        return false;
    }
    const stack = [];
    for (const value of s) {
        if (stack.length=== 0 && value === ')') {
            return  false;
        }
        if (value === '(') {
            stack.push(value);
        } else {
            stack.pop(value);
        }
    }

    return stack.length === 0;
}*/
/*
*
테스트 1 〉	실패 (0.02ms, 33.9MB)
테스트 2 〉	통과 (0.02ms, 33.5MB)
* */

/*
*   function solution(s){
    var answer = true;
    let stack = [];

    for (let char of s) {
        if (stack.length === 0 && char === ")") {
            return false
        } else {
            if (char === "(") {
                stack.push("(");
            } else {
                stack.pop();
            }
        }
    }

    return stack.length === 0;
}
*
*
* 
*
* */



function solution(s){
    let cnt = 0;
    if(s.length > 100000) return false;
    for (const value of s) {
        if (value === '(') {
            cnt++;
        } else if (value === ')') {
            cnt--;
            if(cnt<0) return false;
        }else{
            return false;
        }

    }

    return cnt === 0;
}

/*
* 정확성: 69.5
효율성: 30.5
합계: 100.0 / 100.0
*
* */
console.log(solution('()()'));
console.log(solution("(())()"));
console.log(solution(")()("));
console.log(solution("(()("));
console.log(solution("(()(sss"));