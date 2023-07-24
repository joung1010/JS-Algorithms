function solution(files) {
    const regx = /([a-zA-Z-]{1,})|([0-9]{1,})|([.\w\s?]{1,})/g;
    const fileArr = files.map(file => {
        let [head,number,tail] = file.match(regx);
        head = head.replace("-", "").toUpperCase();
        number = Number(number);
        return {head, number, tail,file};
    }).sort((a,b) => {
        if (a.head !== b.head) {
            return a.head.localeCompare(b.head);
        }else if (a.head === b.head && a.number !== b.number) {
            return a.number - b.number;
        } else {
            return 0;
        }
    });
    return fileArr.map(file => file.file);
}

console.log(solution(["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"]));

// console.log(solution(["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"]));

// 채점 결과
// 정확성: 45.0
// 합계: 45.0 / 100.0