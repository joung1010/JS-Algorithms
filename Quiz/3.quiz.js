/*
스트리밍 사이트에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시하려 합니다. 노래는 고유 번호로 구분하며, 노래를 수록하는 기준은 다음과 같습니다.
    1.속한 노래가 많이 재생된 장르를 먼저 수록합니다.
    2.장르 내에서 많이 재생된 노래를 먼저 수록합니다.
    3.장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.
노래의 장르를 나타내는 문자열 배열 genres와 노래별 재생 횟수를 나타내는 정수 배열 plays가 주어질 때, 베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 return 하도록 solution 함수를 완성하세요


제한사항
    genres[i]는 고유번호가 i인 노래의 장르입니다.
    plays[i]는 고유번호가 i인 노래가 재생된 횟수입니다.
    genres와 plays의 길이는 같으며, 이는 1 이상 10,000 이하입니다.
    장르 종류는 100개 미만입니다.
    장르에 속한 곡이 하나라면, 하나의 곡만 선택합니다.
    모든 장르는 재생된 횟수가 다릅니다.
    */
function solution(genres, plays) {
    const result = [];
    const genresTotal = {};

    const songs = genres.map((genre, idx) => {
        return {idx, genre, plays: plays[idx]};
    });
    for (const song of songs) {
        if (!genresTotal[song.genre]) {
            genresTotal[song.genre] = song.plays;
        } else {
            const plays = genresTotal[song.genre] + song.plays;
            genresTotal[song.genre] = plays;
        }
    }
     Object.keys(genresTotal).sort((a, b) => genresTotal[b] - genresTotal[a])
        .forEach((value) => {
            const arr = songs.filter(song => song.genre === value)
                .sort((a, b) => {
                    if (a.plays === b.plays) {
                        return a.idx - b.idx;
                    } else {
                        return b.plays - a.plays;
                    }
                }).filter((_,idx) => idx < 2);
            result.push(...arr.map(x => x.idx));
        });

     return result;
}

/*
*
* 테스트 1 〉	통과 (0.18ms, 33.5MB)
테스트 2 〉	통과 (0.19ms, 32.9MB)
테스트 3 〉	통과 (0.18ms, 32.8MB)
테스트 4 〉	통과 (0.15ms, 33.4MB)
테스트 5 〉	통과 (0.38ms, 33.5MB)
테스트 6 〉	통과 (0.39ms, 33.4MB)
테스트 7 〉	통과 (0.40ms, 33.5MB)
테스트 8 〉	통과 (0.33ms, 33.5MB)
테스트 9 〉	통과 (0.19ms, 33.3MB)
테스트 10 〉	통과 (0.41ms, 33.4MB)
테스트 11 〉	통과 (0.30ms, 33.5MB)
테스트 12 〉	통과 (0.38ms, 33.4MB)
테스트 13 〉	통과 (0.39ms, 33.5MB)
테스트 14 〉	통과 (0.41ms, 33.4MB)
테스트 15 〉	통과 (0.28ms, 33.4MB)
*
*
*
* */

console.log(solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]));

