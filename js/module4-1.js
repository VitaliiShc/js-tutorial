// ❗️❗️❗️ Колбек-функції
// Функція - особливий тип даних, об'єкт вищого порядку, який можна зберігати у змінну або передавати в іншу функцію, використовуючи загальний синтаксис передачі аргументу.
// Колбек-функція - це функція, яка передана в якості параметра в іншу функцію.
// Колбек-функція - це посилання на функцію, яка лежить десь в глобальної області видимості. В виклик одної функції передається посилання на іншу функцію
// Колбек-функції використовуються у випадках:
// 1. виклик функції за умовою (виконується одна з запропонованих функцій)
// 2. виклик функції по подією (наприклад, клік по кнопці на фронт-енде)
// 3. виклик відкладеної функції - якщо її необхідно виконати через якийсь час
// 4. функція виконується за результатом роботи функції, яка викликає її, наприклад по обробці/отримані даних з бек-енду

// function hello(name) {
//   return `Hello, ${name}`;
// }

// console.log(hello('Vitalii')); // 'Hello, Vitalii' - виклик функції
// console.log(hello); // вивід тіла функції в консоль без її виклику - передається посилання на функцію

// Функція зворотного виклику (callback) - функція яка передається в іншу функцію в якості аргументу, та приймаюча функція виконує виклик колбек-функції.
// Функція вищого порядку (haigh order function) - функція, яка приймає інші функції (колбек-функції) в якості параметра, та виконує її та повертає результат виконання, або використовує цей результат для виконання своїх інструкцій. В функцію вищого порядку передається посилання на колбек функцію (зберігається в пам'яті, як об'єкт) для запуску її за умовою.

// function hello(name) { // колбек-функція
//   console.log(`Hello, ${name}`);
// }

// function greeting(name, callback) { // функція вищого порядку
//   console.log(`Greet ${name}`);
//   callback(name);
// }

// greeting('Vitalii', hello); // передавання функції hello як аргумент для функції greeting, та вона використовується при виконанні функції

// inline-функція: маленьку функцію можна передати як параметр:
// function greeting(name, callback) {
//   console.log(`Greet ${name}`);
//   callback(name);
// }

// greeting('Vitalii', function hello(name) { // інлайн функція - вся функція записана у вигляді параметра.
//   console.log(`Hello, ${name}`);
// });

// Декілька колбеків - функція може отримувати в якості аргументів кілька колбек-функцій, наприклад у випадку. якщо потрібно виконати різні функції при різних ситуаціях - різних умовах

// function sendMessage(user, userStatusActive, userStatusNonActive) {
//   // тіло функції
// }
// function userStatusActive() { };
// function userStatusNonActive() {};

// // Приклади-практика:

// const doMath = function (a, b, c, callback) {
//     const result = callback(a, b) * c;
//     console.log(result)
// }

// const add = function (x, y) {
//     return x + y;
// }

// const sub = function (x, y) {
//     return x - y;
// }

// doMath(2, 3, 7, add); // 35 - передали аргументом колбек-функцію підсумування
// doMath(5, 4, 10, sub); // 10 - передали аргументом колбек-функцію віднімання

// Абстрагування повторень. Абстракція

// function printValue(value) {
//   console.log(value);
// }

// function prettyPrint(value) {
//   console.log("Logging value: ", value);
// }

// function repeat(n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// }

// // Передаємо printValue як callback-функцію
// repeat(3, printValue);
// // 0
// // 1
// // 2

// // Передаємо prettyPrint як callback-функцію
// repeat(3, prettyPrint);
// // Logging value: 0
// // Logging value: 1
// // Logging value: 2

// за допомогою колбек-функції можна забезпечити синхронне (у встановленому порядку) виконання скрипта (доречно, коли функція, яка виконується з затримкою по причині великої інструкції, або за очікуванням відповіді з бек-енд, - то наступна коротка функція може бути виконана скоріше, але повинна бути виконана ПІСЛЯ виконання попередньої функції)
// класичний приклад: якщо функція first буде виконуватися довго, то коротша функція second виведе відповідь раніше
// function first() {
//   console.log(1);
// }

// function second() {
//   console.log(2);
// }

// first(); // 1
// second(); // 2

// // завдання послідовності виконання функції:
// function first(y) { // передаємо в функцію змінну
//     console.log(1); // відпрацьовує вивід 1
//     y() // для змінної використовується функція second (як аргумент зі рядка виклику функції first) - повертає ще й вивід 2
// }

// function second() {
//   console.log(2);
// }

// first(second); //  в якості аргументу передаємо другу функцію

// // ❗️❗️❗️ Стрілочні функції - використовуються якщо потрібно отримати змінну як результат виконання функції. Після стрілки ( => ) ставиться її тіло. Стрілочні функції не можуть використовуватися як метод об'єкту

// // Звичайне оголошення функції
// function classicAdd(a, b, c) {
//   return a + b + c; // явне повернення
// }

// // Те саме стрілочною функцією
// const addNumbers = (a, b, c) => {
//   // використовуємо круглі дужки для оголошення кількох параметрів
//   return a + b + c; // явне повернення
// };

// const add = a => {
//   // якщо параметр один - дужки не потрібні
//   return (a += 5); // явне повернення
// };

// const hello = () => {
//   // якщо параметрів немає, пусти дужки обов'язкові
//   return `Hello!`; // явне повернення
// };

// console.log(classicAdd(1, 2, 3)); // 6
// console.log(addNumbers(1, 2, 3)); // 6
// console.log(add(2)); // 7
// console.log(hello()); // Hello!

// // Тіло функції може бути як в дужках літерала ( {} ) так ы без:

// const sum1 = (a, b) => { // якщо дужки використані, то потрібно ставити return
//   return a + b; // явне повернення
// };

// const sum2 = (a, b) => a + b; // неявне повернення. повертається результат виразу. Використовується тільки коли функції не потрібне виконувати додаткових інструкцій, а потрібно повернути якесь значення

// console.log(sum1(1, 2)); // 3
// console.log(sum2(1, 2)); // 3

// // якщо потрібно зібрати кілька аргументів в масив, то використовується операція ...rest
// // звичайна функція
// const arr = function (a, b, c) {
//   console.log(arguments); // повернення псевдо масиву аргументів
// };

// // стрілочна функція
// const arrArrow = (...args) => {
//   console.log(args); // повернення масиву аргументів
// };

// arr(1, 2, 3); // [1, 2, 3]
// arrArrow(1, 2, 3); // [1, 2, 3]

// ❗️❗️❗️ Стрілочні функції - колбеки
// Анонімні (без назви) стрілочні функції використовуються як колбеки для перебираючих методів масиву у випадках якщо не потрібне тіло цієї функції

// const numbers = [5, 10, 15, 20, 25];

// // Оголошення функції
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// // Анонімна стрілочна функція
// numbers.forEach((number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// можливе окреме оголошення стрілочної функції

// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => { // оголошення стрілочної функції з виконанням інструкції в тілі
//   console.log(`Індекс ${index}, значення ${number}`);
// };

// numbers.forEach(logMessage); // виклик методу forEach з переданням виконання стрілочної функції в аргументі

// ❗️❗️❗️ Замикання
// функція може приймати в себе іншу функцію як аргумент, або повертати з себе іншу функцію як результат виконання (тіло функції, об’явленої всередині виконуваної функції). Можливість виклику функції як значення змінної, при цьому повернена функція буде мати доступ до всіх локальних параметрів та змінних (області видимості) в тілі батьківської функції.
//  Це можливість іншої функції отримувати доступ до локальних змінних повернутої функції, незалежно від того, де була викликана ця функція.
// Використовується, щоб закрити доступ до змін приватних змінних, да повертати тільки методи (вкладені функції) для роботи за вихідними приватними даними - область дій з даними огранічена тільки доступними (оголошеними) методами/функціями

// ❗️❗️❗️ Різновиди коду
// Імперативне програмування - описує процес обчислення в заданої послідовності виконання інструкцій.
// Декларативне програмування - описує результат, порядок та спосіб не важливі. Вказуємо, що хочемо отримати, використовуючи методи та функції. Імперативність виконання методів та функцій - під капотом.
// Імперативний підхід
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = [];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > 3) {
//     filteredNumbers.push(numbers[i]);
//   }
// }

// console.log(filteredNumbers); // [4, 5]

// // Декларативний підхід
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(value => value > 3); // використано метод filter() (Array.prototype.filter())
// console.log(filteredNumbers); // [4, 5]
