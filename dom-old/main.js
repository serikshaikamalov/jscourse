/**
 * document.body.style.background = 'red'; // сделать фон красным
 * Косоль разработчика
 * HTML элементті таңдаудың жолдары:
 * - querySelector
 */

// document.body.style.backgroundColor = "red";
const h1Element = document.querySelector("h1");
// console.log(h1Element.innerHTML);
// h1Element.style.color = "yellow";

const random = () => {
  return Math.random();
};
const randomNumber = random();
h1Element.innerHTML = randomNumber;
