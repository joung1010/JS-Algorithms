// 1, 단순 루프로 풀기
function isPrime(num) {
    for (let i = 2; i < num; i += 1) {
        if (num % i == 0) {
            return false;
        }
    }

    return true;
}

function solution(n) {
    let answer = 0;
    for (let i = 2; i <= n; i += 1) {
        if (isPrime(i)) {
            answer += 1;
        }
    }

    return answer;
}
/*
* 정확성  테스트
테스트 1 〉 통과 (0.08ms, 30.2MB)
테스트 2 〉 통과 (0.13ms, 30.4MB)
테스트 3 〉 통과 (1.22ms, 31.8MB)
테스트 4 〉 통과 (2.41ms, 32.1MB)
테스트 5 〉 통과 (1.46ms, 32.2MB)
테스트 6 〉 통과 (14.73ms, 33MB)
테스트 7 〉 통과 (3.50ms, 32.9MB)
테스트 8 〉 통과 (9.60ms, 32.8MB)
테스트 9 〉 통과 (19.14ms, 32.9MB)
테스트 10 〉    실패 (시간 초과)
테스트 11 〉    실패 (시간 초과)
테스트 12 〉    실패 (시간 초과)
효율성  테스트
테스트 1 〉 실패 (시간 초과)
테스트 2 〉 실패 (시간 초과)
테스트 3 〉 실패 (시간 초과)
테스트 4 〉 실패 (시간 초과)
*
*
* */

// 2. 효율 개선하기 제곱근근
// O(sqrt(n))
function isPrime(num) {
    for (let i = 2; i * i <= num; i += 1) { // 이 부분이 변경됩니다.
        if (num % i == 0) {
            return false;
        }
    }

    return true;
}

function solution(n) {
    let answer = 0;
    for (let i = 2; i <= n; i += 1) {
        if (isPrime(i)) {
            answer += 1;
        }
    }

    return answer;
}

/*
* 정확성  테스트
테스트 1 〉 통과 (0.16ms, 30.3MB)
테스트 2 〉 통과 (0.07ms, 30.3MB)
테스트 3 〉 통과 (0.16ms, 30.4MB)
테스트 4 〉 통과 (0.24ms, 30MB)
테스트 5 〉 통과 (0.16ms, 30.4MB)
테스트 6 〉 통과 (2.82ms, 32.2MB)
테스트 7 〉 통과 (1.28ms, 32.7MB)
테스트 8 〉 통과 (2.59ms, 32.8MB)
테스트 9 〉 통과 (3.18ms, 32.3MB)
테스트 10 〉    통과 (47.35ms, 32.2MB)
테스트 11 〉    통과 (227.66ms, 32.1MB)
테스트 12 〉    통과 (53.82ms, 32.1MB)
효율성  테스트
테스트 1 〉 실패 (시간 초과)
테스트 2 〉 실패 (시간 초과)
테스트 3 〉 실패 (시간 초과)
테스트 4 〉 실패 (시간 초과)
*
*
* */

// 3.에라토스테네스의 체
// O(n log log n)
function get_primes(num) {
    const prime = [false, false, ...Array(num - 1).fill(true)]; // 0과 1은 소수가 아니기에 미리 false로 체크합니다.

    for (let i = 2; i * i <= num; i += 1) {
        if (prime[i]) {
            for (let j = i * 2; j <= num; j += i) {
                prime[j] = false;
            }
        }
    }

    return prime.filter(Boolean); // true만 필터링하고 싶을 경우 이런 방식으로 쓸 수 있습니다.
}

function solution(n) {
    return get_primes(n).length;
}