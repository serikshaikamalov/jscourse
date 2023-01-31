let salaries = [50, 90, 120, 500, 1200];

let averageSalary = 0;

for (let i = 0; i < salaries.length; i++) {
  const salary = salaries[i];
  averageSalary = averageSalary + salary;
}

averageSalary = averageSalary / salaries.length;
console.log("Орта жалақы: ", averageSalary);
