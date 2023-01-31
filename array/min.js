// Берілген саннан минимумды табу

let arr = [1, 2, 3, 4, 5, -1000, -1001];

let result = arr[0];

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  if (result > element) {
    result = element;
  }
}

console.log('Ең кішкентай сан: ', result);