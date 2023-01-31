/**
 * Массив - array - тізім реттелген.
 * Массив элементтерден тұрады
 * Әр элементте өзінің индексі болады
 * Index 0-ден басталады
 */

let students = ["Asel", "Asem", "Diana", "Nurzhanat", "Ahmed"];

students.length; // 5
// Элементті тізімнен суырып алу
students[0]; // Asel
students[1];
students[2];

// Тізімдегі элементті өзгерту
students[0] = "Assel";
students.push("Aigul");
students.unshift("Nurasyl");

// Элементтерді өшіру
students.pop();
students.shift();
console.log(students);


