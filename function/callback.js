/**
 * Callback - кейің орындалу
 * Функция аргумент ретінде басқа функцияны қабылдай алады
 * Javascript тілі браузерде және NodeJS платформасында орындалады
 */

// let b = () => {
//   console.log("B");
// };

// let a = (callback) => {
//   console.log("A");

//   callback();
// };

// a(b);

let arr = [1, 2, 3, 4, 5];
// let result = arr.filter((x) => x > 2); // [3,4,5]

const filter = (arr, callback) => {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (callback(element)) {
      result.push(element);
    }
  }
  return result;
};

let result = filter(arr, (x) => x > 2);
console.log(result);
