/**
 * Conditions - Шартты операторлар
 * if else
 * switch
 *
 * Салыстыру операторлаы: > == <
 *
 * Практика:
 * 1. Нөлден үлкен санды еңгізіңіз. prompt()
 *
 */

const num = prompt("Кел келген санды еңгіз: ");

if (num > 0) {
  console.log(num + " нөлден үлкен");
} else if (num == 0) {
  console.log("Терілген сан нөлге тең");
} else {
  console.log(num + " нөлден кіші");
}
