// 개발자 출신으로 세계 최고의 갑부가 된 어피치는 스트레스를 받을 때면 이를 풀기 위해 오프라인 매장에 쇼핑을 하러 가곤 합니다
// 어피치는 쇼핑을 할 때면 매장 진열대의 특정 범위의 물건들을 모두 싹쓸이 구매하는 습관이 있습니다.
// 어느 날 스트레스를 풀기 위해 보석 매장에 쇼핑을 하러 간 어피치는 이전처럼 진열대의 특정 범위의 보석을 모두 구매하되 특별히 아래 목적을 달성하고 싶었습니다.
// 진열된 모든 종류의 보석을 적어도 1개 이상 포함하는 가장 짧은 구간을 찾아서 구매
// 예를 들어 아래 진열대는 4종류의 보석(RUBY, DIA, EMERALD, SAPPHIRE) 8개가 진열된 예시입니다.
/*
*1      2       3       4       5       6           7             8
*DIA    RUBY    RUBY    DIA     DIA     EMERALD     SAPPHIRE      DIA
*
* */

// 진열대의 3번부터 7번까지 5개의 보석을 구매하면 모든 종류의 보석을 적어도 하나 이상씩 포함하게 됩니다.
// 진열대의 3, 4, 6, 7번의 보석만 구매하는 것은 중간에 특정 구간(5번)이 빠지게 되므로 어피치의 쇼핑 습관에 맞지 않습니다.
//진열대 번호 순서대로 보석들의 이름이 저장된 배열 gems가 매개변수로 주어집니다.
//이때 모든 보석을 하나 이상 포함하는 가장 짧은 구간을 찾아서 return 하도록 solution 함수를 완성해주세요.
// 가장 짧은 구간의 시작 진열대 번호와 끝 진열대 번호를 차례대로 배열에 담아서 return 하도록 하며,
// 만약 가장 짧은 구간이 여러 개라면 시작 진열대 번호가 가장 작은 구간을 return 합니다.

// [제한사항]
// gems 배열의 크기는 1 이상 100,000 이하입니다.
// gems 배열의 각 원소는 진열대에 나열된 보석을 나타냅니다.
// gems 배열에는 1번 진열대부터 진열대 번호 순서대로 보석이름이 차례대로 저장되어 있습니다.
// gems 배열의 각 원소는 길이가 1 이상 10 이하인 알파벳 대문자로만 구성된 문자열입니다.

// 구간합 문제
/*
포인터	    P1	P2
진열대 번호	1	2	      3	     4	5	    6	7	        8
보석 이름	DIA	RUBY	RUBY	DIA	DIA	EMERALD	SAPPHIRE	DIA

포인터	    P1	          P2
진열대 번호	1	2	      3	     4	5	    6	7	        8
보석 이름	DIA	RUBY	RUBY	DIA	DIA	EMERALD	SAPPHIRE	DIA

포인터	    P1	                 P2
진열대 번호	1	2	      3	     4	5	    6	7	        8
보석 이름	DIA	RUBY	RUBY	DIA	DIA	EMERALD	SAPPHIRE	DIA

포인터	    P1	                    P2
진열대 번호	1	2	      3	     4	5	    6	7	        8
보석 이름	DIA	RUBY	RUBY	DIA	DIA	EMERALD	SAPPHIRE	DIA

포인터	    P1	                            P2
진열대 번호	1	2	      3	     4	5	    6	7	        8
보석 이름	DIA	RUBY	RUBY	DIA	DIA	EMERALD	SAPPHIRE	DIA

포인터	    P1	                                P2
진열대 번호	1	2	      3	     4	5	    6	7	        8
보석 이름	DIA	RUBY	RUBY	DIA	DIA	EMERALD	SAPPHIRE	DIA

포인터	        P1	                            P2
진열대 번호	1	2	      3	     4	5	    6	7	        8
보석 이름	DIA	RUBY	RUBY	DIA	DIA	EMERALD	SAPPHIRE	DIA

포인터	                  P1	                P2
진열대 번호	1	2	      3	     4	5	    6	7	        8
보석 이름	DIA	RUBY	RUBY	DIA	DIA	EMERALD	SAPPHIRE	DIA


포인터	                         P1	           P2
진열대 번호	1	2	      3	     4	5	    6	7	        8
보석 이름	DIA	RUBY	RUBY	DIA	DIA	EMERALD	SAPPHIRE	DIA

*/


function solution(gems) {
    const gemmKinds = new Set(gems).size;
    const gemsLength = gems.length;

    let answer = [0, gemsLength]; // 모든 보석을 구매하는 경우
    const collect = new Map();  // 구간합 집계
    collect.set(gems[0], 1);              // -> 첫번째 보석, 진열대 번호
    let str = 0;    // point 1
    let end = 0;   // point 2

    // 두 포인터 모두 배열의 마지막 인덱스 도착하면 종료
    while (str < gemsLength && end < gemsLength) {
        // 즉 구간합의 기준은 gemmKinds 이다
        if (collect.size === gemmKinds) {
            if (end + str < answer[1] + answer[0]) {
                answer = [str + 1, end + 1]; // 더 적은 값의 진열대로 갱신
            }
            const gem = gems[str];
            collect.set(gem, collect.get(gem) - 1); // 기존 보석을 하나 제거
            if (collect.get(gem) === 0) {// 보석이 없으면 collect에서 제거
                collect.delete(gem)
            }
            str += 1; // 첫 번째 포인터 증가
        } else {
            // 구간합이 gemmKinds 보다 작기때문에 end 포인터를 증가시주고 구간합을 더해준다.
            end += 1;
            collect.set(gems[end], 1 + (collect.get(gems[end]) || 0));
        }
    }
    return answer;
}
/*테스트 1 〉	통과 (0.29ms, 33.4MB)
테스트 2 〉	실패 (0.29ms, 33.4MB)
테스트 3 〉	실패 (0.36ms, 33.6MB)
테스트 4 〉	통과 (0.45ms, 33.3MB)
테스트 5 〉	통과 (0.55ms, 33.5MB)
테스트 6 〉	통과 (0.11ms, 33.4MB)
테스트 7 〉	실패 (0.26ms, 33.7MB)
테스트 8 〉	실패 (0.34ms, 33.5MB)
테스트 9 〉	실패 (0.69ms, 33.6MB)
테스트 10 〉	통과 (0.46ms, 33.5MB)
테스트 11 〉	통과 (0.62ms, 33.6MB)
테스트 12 〉	실패 (0.67ms, 33.5MB)
테스트 13 〉	실패 (1.22ms, 33.5MB)
테스트 14 〉	통과 (0.68ms, 33.6MB)
테스트 15 〉	실패 (7.50ms, 36.8MB)
효율성  테스트
테스트 1 〉	실패 (5.02ms, 36.9MB)
테스트 2 〉	실패 (4.14ms, 37.3MB)
테스트 3 〉	실패 (5.87ms, 37.3MB)
테스트 4 〉	통과 (4.38ms, 38.9MB)
테스트 5 〉	실패 (7.17ms, 38MB)
테스트 6 〉	실패 (7.37ms, 38MB)
테스트 7 〉	실패 (7.62ms, 38.6MB)
테스트 8 〉	실패 (9.16ms, 39MB)
테스트 9 〉	실패 (10.17ms, 38.9MB)
테스트 10 〉	실패 (10.00ms, 39.2MB)
테스트 11 〉	실패 (13.63ms, 40.1MB)
테스트 12 〉	통과 (12.82ms, 42MB)
테스트 13 〉	실패 (15.53ms, 43.4MB)
테스트 14 〉	실패 (16.99ms, 39.4MB)
테스트 15 〉	통과 (16.77ms, 40.4MB)
*
*
* */


console.log(solution(["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"]));
console.log(solution(["AA", "AB", "AC", "AA", "AC"]));
console.log(solution(["XYZ", "XYZ", "XYZ"]));
console.log(solution(["ZZZ", "YYY", "NNNN", "YYY", "BBB"]));