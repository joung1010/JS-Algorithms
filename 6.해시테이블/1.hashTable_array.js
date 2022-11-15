//1.
const table = [];
table["key1"] = 100;
table["key2"] = "Hello";
console.log(table["keh1"]); // 100
table["key1"] = 349;
console.log(table["key1"]); // 349
delete table["key1"];
console.log(table["key1"]); // undefined