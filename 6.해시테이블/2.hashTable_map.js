const table = new Map();
table.set("key", 100);
table.set("key2", "Hello");
console.log(table["key"]); // undefined
console.log(table.get("key"));

const object = {a: 1};
table.set(object, "A1"); // Map은 Object도 Keh로 사용할 수 있다.
console.log(table.get(object)); // A1
delete object;

console.log(table.keys()); // {"key","key2"}
console.log(table.values()); // {100,"Hello"}
table.clear();
console.log(table.values()); //{}