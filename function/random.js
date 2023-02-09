// Кездейсоқ санды қайтар

function randomNumber(max = 100) {
  return Math.round(Math.random() * max);
}

let number = randomNumber();
console.log("Кездейсоқ сан: ", number);
