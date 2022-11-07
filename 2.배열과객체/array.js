// 배열 생성
/*const arr1 = new Array();
const arr2 = [];
const arr3 = [1, 2, 3, 4, 5];
const arr4 = new Array(5);
// fill : 입력받은 값으로 배열을 모두 초기화
const arr5 = new Array(5).fill(5);
// console.log(arr5);
const arr6 = Array.from(Array(5), (_, index) => index + 1);*/
// console.log(arr6); // [ 1, 2, 3, 4, 5 ]

const arr = [1, 2, 3, 4, 5];
/*console.log(arr.length);
// 배열의 길이를 정할 수 있다
arr.length = 3;
console.log(arr); //[ 1, 2, 3 ]
arr.length = 10;
console.log(arr); // [ 1, 2, 3, <7 empty items> ]*/

// 1. join 배열을 문자열로 합친다.
// console.log(arr.join(', '));
//2. reverse
// console.log(arr.reverse()); //[ 5, 4, 3, 2, 1 ]
// console.log(arr); // 기존에 원본 배열에도 영향을 준다.



//3. 배열 합치기
// const concatArr = [6, 7, 8, 9];
// console.log(arr.concat(concatArr));//[1, 2, 3, 4, 5,6, 7, 8, 9]

// 배열의 마지막 요소를 추가 삭제 push, pop
/*
arr.push(6);
arr.push(7,8,9);
console.log(arr);

arr.pop(); // 9
arr.pop(); // 8
console.log(arr.pop()); //7*/

// 배열의 첫번째 요소에 추가 삭제 shift, unshift
/*
arr.shift();
arr.shift();
console.log(arr); //[ 3, 4, 5 ]

arr.unshift(1);
arr.unshift(2);
console.log(arr)*/

// slice 요소를 자르기 (원본 배열은 변하지 않는다)
// console.log(arr.slice(2, 4)); //[ 3, 4 ]

// splice 중간 요소 삭제
// arr.splice(2, 2)
// console.log(arr);//[ 1, 2, 5 ]

// 배열의 순회
// 기본

/*for (let i = 0; i < 5; i++) {
    console.log(arr[i]);
}*/

/*
for (const item of arr) {
    console.log(item);
}
*/

/*
arr.forEach((value)=>{
    console.log(value);
})
*/
/*

console.log(typeof arr); //object

arr["key"] = "value";
console.log(arr); //[ 1, 2, 3, 4, 5, key: 'value' ]
console.log(arr.length); // key 가 추가됬어도 배열의 길이는 그대로 5이다.*/


