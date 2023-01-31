let arr = [50, 60, 90, 500]; // 15

let result = 0;
let averageSalary = 0;

for (let i = 0; i < arr.length; i++) {
  let num = arr[i];

  result += num;
}

averageSalary = result / arr.length;

// console.log("Сумма осыған тең: ", result);
console.log('Орташа жалақы: ', averageSalary);
