/**
 * Сан типі: Number
 * Бүтін сандар
 * Бөлшек сандар
 * Positive and negative numbers
 * Math.min() - берілген саннан ең кішкентай санды табу
 * Math.max() - берілген саннан ең үлкен санды табу
 * Math.abs() - Негативті санды позитив санға аудару: Мысалы: -5 => 5
 * Math.pow() - дәреже: Мысалы: 2^3 = 8
 * Math.sqrt() - түбір: 16 түбірі 4
 *
 * parseInt() - бүтін санды қайтару
 * Math.random() - 0 ден бастап 1 бірге дейің бөлшек сандарды қайтару
 */

/**
 * Бүтін сандар: 0,1,2,3,4,5
 * Бөлшек сандар: 0.5, 1.2...
 * 1,2 ~
 * -1, -2, ~
 */

Math.min(1, 2, 3, 4, 5); // 1
Math.max(1, 2, 3, 4, 5); // 5
Math.abs(-5); // 5
Math.pow(2, 3); // 8
Math.sqrt(16); // 4

parseInt("5");
5;
parseInt(5.5);
5;

let randomNumber = Math.random();
console.log(parseInt(randomNumber * 300));
