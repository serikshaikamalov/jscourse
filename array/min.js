// 1
let arr = [1, 2, 3, -23232, 4, 5, -1, -10000, 5];

let result = Number.POSITIVE_INFINITY;
console.log("result: ", result);

for (let i = 0; i < arr.length; i++) {
  const num = arr[i];
  if (result > num) {
    result = num;
  }
}

console.log("The most min number is: ", result);


let students = ['aygul', 'diana', 123, true, undefined]
// ['Aygul', 'Diana']