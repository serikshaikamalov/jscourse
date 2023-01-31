/**
 * Массивпен танысу - реттілігі сақталған тізім. Товарлар тізімі, студенттің тізімі...
 */

let students = ["Asel", "Diana", "Nurzhant"];
students.length; // 3
students[0]; // 'Asel'
students[1]; // 'Diana'

// let studentGrades = [30, 50, 80];

students[0] = "Asem";

// push()
students.push("Aslan");

// unshift()
students.unshift('Saule');

// pop() - соңғы элементті тізімнен алып тастайды
students.pop()

// shift()
students.shift();

console.log("Students: ", students);