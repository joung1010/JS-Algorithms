const table = new Set();
table.add("key");
table.add("key2");
console.log(table.has("key")); // true
console.log(table.has("key3")); // false
table.add("key2"); // 중복값은 제거 된다.

console.log(table.size); // 2
table.clear();
console.log(table.size); //0