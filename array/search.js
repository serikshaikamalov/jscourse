/**
 * filter - шартқа сайт жаңа табылған массивті қайтарады яғни тізім
 * find - шартқа сайт бір элементті массивтен қайтарады
 * findIndex - табылған элементтің индексін қайтарады
 * includes - егер элемент табылса true ал табылмаса false қайтарады
 * some - егерде бір элемент шартқа сайт келсе true қайтарады
 * every - барлық элемент шартты орындаса true қайтарады
 */

let students = ["Asel", "Diana", "Nurzhanat", "Askar"];
// let result = students.find(s => s.toLowerCase() == 'diana'); // Diana
// console.log(result);

// let result = students.findIndex(s => s == 'Diana'); // 1
// console.log(result);

let nums = [1, 2, 3, 4, 5];
let result = nums.includes(33);
// console.log(result);

let ages = [20, 18, 31, 40];
// let hasTeenger = ages.some((s) => s < 18);
// console.log("Тізімде жасы 18-ден кіші адам бар ма? ", hasTeenger);

let adult = ages.every(s => s >= 18)
console.log('Тізімде барлығы 18-ден үлкен бе? ', adult);