// 단어 퍼즐은 주어진 단어 조각들을 이용해서 주어진 문장을 완성하는 퍼즐입니다.
// 이때, 주어진 각 단어 조각들은 각각 무한개씩 있다고 가정합니다.
// 예를 들어 주어진 단어 조각이 [“ba”, “na”, “n”, “a”]인 경우 "ba", "na", "n", "a" 단어 조각이 각각 무한개씩 있습니다.
// 이때, 만들어야 하는 문장이 “banana”라면 “ba”, “na”, “n”, “a”의 4개를 사용하여 문장을 완성할 수 있지만, “ba”, “na”, “na”의 3개만을 사용해도 “banana”를 완성할 수 있습니다.
// 사용 가능한 단어 조각들을 담고 있는 배열 strs와 완성해야 하는 문자열 t가 매개변수로 주어질 때, 주어진 문장을 완성하기 위해 사용해야 하는 단어조각 개수의 최솟값을 return 하도록 solution 함수를 완성해 주세요.
// 만약 주어진 문장을 완성하는 것이 불가능하면 -1을 return 하세요.

// 제한사항
//      strs는 사용 가능한 단어 조각들이 들어있는 배열로, 길이는 1 이상 100 이하입니다.
//     strs의 각 원소는 사용 가능한 단어조각들이 중복 없이 들어있습니다.
//     사용 가능한 단어 조각들은 문자열 형태이며, 모든 단어 조각의 길이는 1 이상 5 이하입니다.
//     t는 완성해야 하는 문자열이며 길이는 1 이상 20,000 이하입니다.
//     모든 문자열은 알파벳 소문자로만 이루어져 있습니다.

// 가장 작은 문제를 정의할 수 있는가??

// ["ba","na","n","a"]
//i = 1 -> b 1                                  [0,Infinity,0,0,0,0,0]
//i = 2 -> a 1, ba 2                            [0,Infinity,Infinity,0,0,0,0], [0,Infinity,1,0,0,0,0]
//i = 3 -> n 1, an 2, ban 3                     [0,Infinity,Infinity,1,Infinity,0,0]  [0,Infinity,Infinity,1,2,0,0]
//i = 4 -> a 1, na 2, ana 3,bana 4              [0,Infinity,Infinity,1,Infinity,Infinity,0]  [0,Infinity,Infinity,1,2,3,0]
//i = 5 -> n 1, an 2, nan 3, anan 4,banan 5
//i = 6 -> a 1, na 2, ana 3, nana 4,anana 5,banana 6

function solution(strs, t) {
    const res = new Array(t.length + 1).fill(0);
    const wordSet = new Set(strs);
    for (let i = 1; i < t.length+1; i++) {
        // 일단 해당 문자열의 최솟값은 무한으로 설정한다.
        res[i] = Infinity;
        for (let j = 1; j < Math.min(i + 1, 6); j++) {
            // 처음에는 해당 인덱스번째 단어와
            // 루프를 통해 단어를 반복하면서 조합함
            const str = i - j;
            const end = i;
            const word = t.slice(str, end);
            // 조합된 단어가 단어조각Set안에 존재하는지 확인
            if (wordSet.has(word)) {
                // 단어조각안에 존재하면 이전 조합과 더해서 최솟값인지 체크 후 대입
                //DP[i] : i번째 단계에서 사용한 단어조각의 최솟값
                // DP[현재 문자의 위치 - 단어조각 길이] : 이전에 조합된 단어를 기억했다가 다시 꺼내온다.
                // DP[i] = Math.min(DP[i], DP[현재 문자의 위치 - 단어조각 길이] + 1)
                res[i] = Math.min(res[i], res[i - j] + 1);
            }
        }
    }
    return res[res.length - 1] === Infinity ? -1 : res[res.length - 1];
}




console.log(solution(["ba", "na", "n", "a"], "banana"));
// console.log(new Set(["ba", "na", "n", "a"]).has("ban"));