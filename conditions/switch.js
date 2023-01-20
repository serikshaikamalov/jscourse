/**
 * switch case - шартты операторы
 * Практика: Банкомат қосымшасы
 */

let lang = prompt("Select a language:");

switch (lang) {
  default:
  case "kz": {
    alert("Қош келдіңіз!");
    break;
  }
  case "ru": {
    alert("Добро пожаловать!");
    break;
  }
  case "en": {
    alert("Welcome!");
    break;
  }
}
