let arr = [1, 2, 3, 4, 5];

let result = [];

if (arr.length > 0) {
/**
 * 4
 * 3
 * 2
 * 1
 * 0
*/
  for (let i = arr.length - 1; i >= 0; i--) {
    let num = arr[i];
    result.push(num);
  }
}

console.log("Reversed array: ", result);
