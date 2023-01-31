/**
 * Объектіде кілт және оның мәні болады
 */
let person = {
  name: "Askar",
  age: 25,
  isStudent: false,
  work: {
    location: "Almaty",
    phone: 87772003131,
  },
  sayHello: () => {
    alert("Hello! ");
  },
};

person.isStudent = true;
delete person.work;

let phone = {
  name: "iPhone",
  model: "12 Pro",
  date: 2020,
};

let students = [
  {
    name: "Asel",
    age: 29,
    phone: 123444,
  },
  {
    name: "Diana",
    age: 20,
    phone: 77723013,
  },
];

// students.filter((s) => s.age > 25);
let ages = [18, 19, 20];
let studentNames = ["Diana", "Asel", "Nurzhanat"];
console.log(students[0]);

person.sayHello();
