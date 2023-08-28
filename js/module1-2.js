'use strict';

// // ❗️❗️❗️ Розгалуження
// ❗️❗️❗️ Інструкція IF
// if (умова) {
//     // тіло if
// }
// вхідні данні, що приводяться до буля. Якщо true, то виконується те, що в фігурних дужках, якщо false - ігнорується та йде далі. Застосовуєтьсяя для перевірки лише однієї умови.

// let cost = 0;
// const subscription = 'pro';
// if (subscription === 'pro') {
//   cost = 100;
// }
// console.log(cost); // 100

// let cost = 0;
// const subscription = 'free';
// if (subscription === 'pro') {
//   cost = 100;
// }
// console.log(cost); // 0

// const num1 = Number(prompt('add number'));
// if (num1) {
//   console.log(num1);
// } else {
//   console.log("it's not a number");
// }

// ❗️❗️❗️ if...else
// if (умова) {
// тіло if
// } elser {
// тіло else
// }
// Розширення синтаксису if: якщо умова true, виконується тіло if, а тіло else - ігнорується, якщо умова false - тіло if ігнорується, виконується тіло else. Застосовуєтьсяя для перевірки лише однієї умови.
// let cost;
// const subscription = "free";
// if (subscription === "pro") {
//   cost = 100;
// } else {
//   cost = 0;
// }
// console.log(cost); // 0

// ❗️❗️❗️ else...if
// додаткова конструкція, яка дозволяє перевірити декілька умов. Перевірка припиняєть на першому true та виконується сценарій для цього true. Якщо true не було знайдено виконується останнє else.

// const spend = 1;
// let partner;
// if (spend >= 100 && spend < 500) {
//   partner = 'bronze';
// } else if (spend >= 500 && spend < 1000) {
//   partner = 'silver';
// } else if (spend >= 1000) {
//   partner = 'gold';
// } else {
//   partner = 'not a partner';
// }

// if (spend < 100) {
//   partner = 'not a partner';
// } else if (spend >= 100 && spend < 500) {
//   partner = 'bronze';
// } else if (spend >= 500 && spend < 1000) {
//   partner = 'silver';
// } else {
//   partner = 'gold';
// }
// console.log(partner);

// // ❗️❗️❗️ Тернарний оператонр
// Застосовується, коли є лише одна умова, як скорочена конструкція if...else.
// (умова) ? (вираз при true) : (вираз при false)
// // if...else
//let type;
// const age = 20;
// if (age >= 18) {
//   type = 'adult';
// } else {
//   type = 'child';
// }
// console.log(type);
// // тернарний запис
// const age = 16;
// const type = age >= 18 ? 'adult' : 'child';
// console.log(type);

// const num1 = Number(prompt('Enter a number'));
// const num2 = Number(prompt('repeat the entered number'));
// num1 === num2 ? console.log('true') : console.log('false');

// // ❗️❗️❗️ Інструкція swith
// // Застосовується для строго порівняння значень та виконання дій у відповідності до цього значення. Після кожного порівняння має бути break - для преривання обчислень, також на прикінці має бути default для виконання інструкції, якщо співпадіння не знайдено. Виконується лише строрге порівняння цйисла з числом або рядка з рядком (іх зміст).
// // swith(значення для порівняння) {
// //     case значення1:
// //         інструкція;
// //         break;
// //     case значення2:
// //         інструкція;
// //         break;
// //     default:
// //         інструкція;
// // }

// let discount;
// const partner = 'gold'; // gold, silver, bronze, free
// switch (partner) {
//   case 'gold':
//     discount = 0.1;
//     break;
//   case 'silver':
//     discount = 0.05;
//     break;
//   case 'bronze':
//     discount = 0.02;
//     break;
//   default:
//     discount = 0;
// }
// console.log(`You have a discount ${discount * 100}%!`);

// // ❗️❗️❗️ Область видимості
// // Глобальна
// // Блочна
// // Функцыональна
// // бвчимо наружу, не бачимо внутрь
// // змінні шукаються спочатку в своєї области видимості, якщо не знайдено - рівнем вище и т. і. Все що в фігурних дужках - це локальна область видимості, змінні оголошені в локальної обюласті видимості не бачано за ії межами. Принцип: область видимості має доступ до всіх змінних, оголошених внеї та вище за іерархією, але не може отримати доступу до змінних, яки оголошени у вкладенних областях нижче або у сусідніх.

// // ❗️❗️❗️ ❗️❗️❗️ Цикли
// // ❗️❗️❗️ Цикл while - цикл з передумовою - виконуєтьсмя доки правдива якась умова (true) ,коли умова стає false цикл запиняється. Спочатку перевіряється умова (condition), якщо true - виконується тіло цикла (statement).
// let i = 0;
// while (i <= 5) { // condition
//   console.log(i); // statement
//   i += 1;
// }

// // ❗️❗️❗️ Цикл do...while - цикл, в якомсу умова перевіряється після виконнання тіла ціклу. Спочатку робіться statement, потім перевіряються наслідки - в такомцу випадку statement виконується завжди хоча один раз.

// let i = 0;
// do {
//   console.log(i);
//   i += 1;
// } while (i <= 5);

// // ❗️❗️❗️ Цикл for - цикл з лічильником. При кожної ітерації виконується зміна лічильника за зазначеним кроком.

// for (initialization; condition; post-expression) {
//   // statements
// }
// initialization - створення змінної лічильника з початковим значенням
// condition - умова зі змінної личильника в який виконується порівняння значень (констант), та якщо отримається true - продовження циклу, або false - завершення циклу
// post-expression - виконується оновлення зміфнної лічильника на заданий крок в кінці коженої ітерації
// statement - тіло цикла

// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }

// const target = 5;
// let sum = 0;
// for (let i = 0; i <= target; i += 1) {
//   sum += 1;
// }
// console.log(sum);

// Виведення остачи від дилення значення змінної на хначчення лічильника
// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// // ❗️❗️❗️ Опеератор break - виконує преривання циклу за певними умовами

// for (let i = 1; true; i += 1) {
//   let num3 = Number(prompt('Enter 3'));
//   if (num3 === 3) {
//     console.log('Yes!');
//     console.log(i);
//     break;
//   }
// }

// // ❗️❗️❗️ Опеератор continue - перериває поточну ітераціє, але не перериває цикл. Наприкладпереривання розрахунків за певною умовою.
// // Вивести тільки парні чісла
// const num1 = 10;
// for (let i = 0; i < num1; i += 1) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   console.log('Парне i', i);
// }

// // Вивести тільки чісла кратні 3-м
// const num1 = 30;
// for (let i = 0; i <= num1; i += 1) {
//   if (i % 3 !== 0) {
//     continue;
//   }
//   console.log('Ділиться на 3', i);
// }

// // ❗️❗️❗️ Цикл в циклі - переривання попереднього цмклу: потрібно брейком звернутися до назви попередньго циклу:
// a: for (let i = 0; i < 3; i += 1) {
//   console.log('i', i);
//   b: for (let j = 0; j < 3; j += 1) {
//     console.log('  j', j);
//     if (i === 1 && j === 1) {
//       break a;
//     }
//   }
// }
