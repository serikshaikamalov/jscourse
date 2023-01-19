/**
 * Стринг типімен жұмыс
 * Жалпы ұғым
 *
 * Ұзындықты алу үшін
 * - length;
 *
 * Басты методтары:
 * Трансформация:
 * - toUpperCase()
 * - toLowerCase()
 * - trim()
 *
 * Іздеу методтары:
 * includes()
 * startWith()
 * endsWith()
 *
 *
 * Бөліп алу:
 * slice(start, end)
 *
 * Мәтінді басқа мәтінге алмастыру
 * replace("this", "that")
 *
 * Concatination
 *
 * Additional
 * - split(comma); // , - _
 */

let studentName = "Assel";

studentName.length; // 5

studentName.toLocaleUpperCase(); // ASSEL
studentName.toLocaleLowerCase(); // assel

let bookName = " Abai ";
bookName.trim(); // Abai

let text = "I love Javascript";
let search = "Javascript";

// text.includes(search); // true

// console.log(text.includes(search));
console.log(text.startsWith("I"));
console.log(text.endsWith(search));

// Slice
console.log(text.slice(2, 6));

// Replace
console.log(text.replace("Javascript", "HTML"));

// split
let fruits = "apple, banana";
console.log(fruits.split(","));
