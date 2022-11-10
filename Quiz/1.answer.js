function solution(s){
    // Stack
    // ['(','(']
    //( 가 나오면 stack push ) 가 나오면 pop 해준다
    const stack = [];
    for (const c of s) {
        if (c === '(') {
            stack.push(c);
        } else {
            if (stack.length === 0) {
                return false;
            }
            stack.pop();
        }
    }
    return stack.length === 0;
}

function solution2(s) {
    let count = 0;
    for (const c of s) {
        if (c === '(') {
            count++;
        } else {
            if (count === 0) {
                return false;
            }
            count --;
        }
    }
    return count === 0;
}