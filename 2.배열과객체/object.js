// 객체 생성

// const obj1 = new Object();
// const obj2 = {};
const obj = {name:'mason',age:'22',};

// 객체에 추가 삭제
/*
obj['email'] = 'test@test.com';
obj.phone = '00000';
console.log(obj);

delete obj.phone;
console.log(obj);*/

obj['email'] = 'test@test.com';

/*console.log('email' in obj); // 객체안에 키가 있는지 확인
console.log('phone' in obj);

console.log(Object.keys(obj)); // 객체의 key 배열 [ 'name', 'age', 'email' ]
console.log(Object.values(obj)); // 객체의 value 배열 [ 'mason', '22', 'test@test.com' ]*/

// 객체의 순회
for (const key in obj) {
    console.log(key,obj[key]);
}


