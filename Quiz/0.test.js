// 라디오에서 방금 나왔던 음악이 무슨 음악인지 궁금해질 때가 많다
// 네오는 자신이 기억한 멜로디를 가지고 방금그곡을 이용해 음악을 찾는다
// 디오 방송에서는 한 음악을 반복해서 재생할 때도 있어서 네오가 기억하고 있는
// 멜로디는 음악 끝부분과 처음 부분이 이어서 재생된 멜로디일 수도 있다.
// 반대로, 한 음악을 중간에 끊을 경우 원본 음악에는 네오가 기억한 멜로디가 들어있다 해도 그 곡이 네오가 들은 곡이 아닐 수도 있다.
// CDEFGABCDEFGAB
// [3차] 방금그곡

function solution(m, musicinfos) {
    let titles = [];
    for (let i = 0; i < musicinfos.length; i++) {
        let [str, end, musicTitle, musicInfo] = musicinfos[i].split(',');
        let times = 0;
        let music;

        musicInfo = musicInfo.match(/([a-zA-z]#)|([A-Z]|)/g).filter(v => v);
        str = Number(str.replace(":", ""));
        end = Number(end.replace(":", ""));
        for (let j = str; j <= end; j++) {
            if (times === musicInfo.length) times = 0;
            if (!music) music = musicInfo[times];
            else music += musicInfo[times];

            times++;
        }
        if (music.indexOf(m) !== -1) {
            titles.push({title: musicTitle, idx: music.indexOf(m)});
        }
    }
    return !titles.length ? '(None)' : titles.reduce((acc,curr)=> {
        if (acc.idx < curr.idx) {
            return acc;
        } else {
            return curr;
        }
    }).title;
}

console.log(solution("ABCDEFG", ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"]));
console.log(solution("CC#BCC#BCC#BCC#B", ["03:00,03:30,FOO,CC#B", "04:00,04:08,BAR,CC#BCC#BCC#B"]));
console.log(solution("ABC", ["12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"]));


// console.log(Number("12:00".replace(":","")))
// console.log("CC#BCC#BCC#BCC#BCC#BCC#BCC#BCC#BCC#BCC#BC".indexOf("CC#BCC#BCC#BCC#B"))
// console.log("CC#BCC#BCC#B".indexOf("CC#BCC#BCC#BCC#B"))

console.log("C#DEFGABC#DEFGABC#".indexOf("ABC"));
console.log("ABCDEF".indexOf("ABC"));


// 정확성: 86.7
// 합계: 86.7 / 100.0