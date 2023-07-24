function solution(files) {
    const regx = /([a-zA-Z\s-]+)|([0-9]{1,5})/g;
    return  files.map(file => {
        let [head, number] = file.replace('-',"").match(regx);
        head = head.toUpperCase();
        number = Number(number);
        return {head, number, file};
    }).sort((a,b)=> {
        if (a.head !== b.head) {
            return a.head.localeCompare(b.head);
        } else {
            return a.number - b.number;
        }
    }).map(file => file.file);
}

// console.log(solution(["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"]));

console.log(solution(["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"]));

// 정확성: 85.0
// 합계: 85.0 / 100.0