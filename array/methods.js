// Map - трансформация немесе өзгерту
let nums = [1, 2, 3, 4, 5, -1];
// let newNums = nums.map((n) => 'Javascript');

// let found = nums.find((n) => n == 6);
// console.log(found);

let students = ["Asel", "Asem", "Diana", "Nurzhanat", "Ahmed"];
// let student = students.find((s) => s == "Asem2");
// console.log(student);

// console.log(students.findIndex((x) => x == "Aslan")); // -1

// const all = students.fill("Student");
// let all = new Array(100).fill(0)
// console.log(all);

// Search
students.includes("Nurzhanat"); // true | false

let langs = ['en', 'kz', 'ru'];

let found = langs.some((x) => x == 'kz')
console.log(found);

let result = nums.every(n => n > 0)
console.log('Әрбір сан массивте 0-ден үлкен бе? ', result);