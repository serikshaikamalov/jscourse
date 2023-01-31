/**
 * Map - әр элементті өзгерту үшін қолданылады
 */

let nums = [1, 2, 3, 4, 5];
let result = nums.map((n) => n * 2);
console.log("Жаңа массив: ", result);

let students = ["Aray", "Asel", "Diana"];

let studentsResult = students.map((s) => s.toUpperCase());
console.log(studentsResult);
