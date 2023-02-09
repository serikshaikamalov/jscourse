/**
 * Random
 * Passing default value for parameter
 * NaN - Not a number
 * Method
 * Стрелочные функция = Array function
 */

// function sum(a, b) {
//   return a + b;
// }

// let result = sum(1, 3);

// function random(max = 100) {
//   return Math.round(Math.random() * max);
// }

// let randomNumber = random(200);
// console.log('Random number is ', randomNumber)

// Стрелочная функция = Arrow function
// let sum = (a, b) => a + b;
// let sum2 = (a, b) => {
//   console.log(a, b);
//   return a + b;
// };

let num = [1, 2, 3, 4, 5];
num.filter((x) => {
  return x * x;
});

let person = {
  name: "Assel",
  age: 25,
  sayHello: () => {
    console.log("Hello");
  },
};

person.sayHello();

// Обменник
// 2000 => 4
// 4 => 2000