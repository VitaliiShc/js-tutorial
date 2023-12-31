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
// функція може приймати в себе іншу функцію як аргумент, або повертати з себе іншу функцію як результат виконання (тіло функції, об'явленої всередині виконуваної функції). Можливість виклику функції як значення змінної, при цьому повернена функція буде мати доступ до всіх локальних параметрів та змінних (області видимості) в тілі батьківської функції.
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

// // ❗️❗️❗️ Чисти функції
// // Функції з побічними ефектами - ті, які використовують або змінюють глобальні змінні, змінюють аргументи, виконують операції введення-виведення. Це мутуючи функції.
// // Чисти функції - ті, які не змінюють аргументів, та не мутують вхідні значення та повертають нові набори значень.

// // ❗️❗️❗️ Перебираючи методи масиву
// // В свої більшості перебираючи методи масиву є чисти функції, та мають схожий синтаксис:
// // array.method(callback(item, idx, array)) {};
// // де:
// // array0 - вхідний масив
// // method - назва методу
// // callback - колбек-функція, як аргумент методу, та своїми параметрами:
// // item - значення елемента
// // idx - індекс елемента
// // array - посилання на вхідний масив для колбека, якщо в тілі колбек-функції необхідно використовувати таке посилання (наприклад, виконати мутування)

// // Для кожного перебираючого методу масиву потрібно розуміти:
// // 1. що він робіть
// // 2. що приймає
// // 3. що повертає

// // ❗️❗️❗️ Метод forEach(). Метод масиву.  Перебирає абсолютно всі елементи масиву без лічильника, та виконує передану колбек функцію.Умовно мутуючий - може змінювати масив, з котрим працює (але не обов'язково) - це залежить від передаваємої колбек функції

// // 1. Поелементо перебирає масив.
// // 2. Викликає колбек-функцію для кожного елемента масиву.
// // 3. Нічого не повертає.

// // forEach() має 2 параметри: колбек-функція та об'єкт, в контексті котрого буде викликатися цей колбек (або тільки 1 параметр - колбек функція). А в колбек-функції використовуються 3 параметри: значення (обов'язкове), індекс, масив (посилання на початковий масив - якщо всередині forEach'а необхідно звертатися до нього). Якщо в роботі колбек-функції немає потреби використовувати значення елементів масиву, а лише індекси елементів, то замість параметра значення необхідно використовувати нижне підкреслення ( _ ) - це тому, що слінтер видасть помилку о том, що застосовується невикористанна змінна, тому підкреслення, це обхід попереджень слінтера.

// const numbers = [5, 10, 15, 20, 25];

// // Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// }

// // Метод перебирання forEach
// numbers.forEach(getNumbers);
// function getNumbers(number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// }

// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// // Метод forEach неможливо перервати, тому якщо потрібно перервати перебирання масиву значень в якийсь момент (знайдено потрібне число) то варто використовувати класичний for

// // Приклад: помножити на 2 кожен елемент масиву
// const arr = [1, 2, 3]
// arr.forEach(function (item, idx, arr) {
//   arr[idx] = item * 2; // вказуємо, що в вихідному масиві для кожного елементу ( arr[idx] - звернення по індексу) виконуємо операцію - перевизначаємо елемент
// })

// console.log(arr); // [2, 4, 6] - мутований масив

// // ❗️❗️❗️ Метод map(). Метод масиву. Використовується для трансформації масиву. Приймає масив, повертає новий масив по результату виконання колбек-функції. Вхідний масив залишається незмінним. Метод перебирає вхідний масив, виконує передану колбек-функцію та повертає новий масив.
// // 1. Перебирає всі елементи вхідного масиву
// // 2. Не змінює оригінальний масив
// // 3. Повертає новий масив
// // 5. Результат колбек-функції записується в новий масив
// // 6. Вихідний масив має таку ж довжину, що і вхідний

// const names = ['Vitalii', 'Inna', 'Denys'];
// const namesToUppertCase = names.map(name => name.toUpperCase());
// const namesToLowerCase = names.map(name => name.toLowerCase());

// console.log(namesToUppertCase); // ['VITALII', 'INNA', 'DENYS'];
// console.log(namesToLowerCase); // ['vitalii', 'inna', 'denys'];
// console.log(names); // ['Vitalii', 'Inna', 'Denys'] - вхідний масив не змінено

// // перебір масиву об'єктів:
// const family = [
//   { name: 'Vitalii', age: 46 },
//   { name: 'Inna', age: 27 },
//   { name: 'Denys', age: 0 },
// ];

// const familyNames = family.map(person => person.name);
// console.log(familyNames); // ['Vitalii', 'Inna', 'Denys']

// // ❗️❗️❗️ Метод flatMap()
// // Метод також перебирає масив та вкладений масив, та повертає масив значень вкладеного масиву (тільки на глибину однієї вкладеності, тобто дочірнего (значення масиву в масиві)):

// const children = [
//     { name: 'Vitalii', ownChildren: ['Myroslava', 'Denys'] },
//     { name: 'Ann', ownChildren: ['Anastasia'] },
// ];
// const grandChildren = children.flatMap(child => child.ownChildren);

// console.log(grandChildren); // ['Myroslava', 'Denys', 'Anastasia']

// // ❗️❗️❗️ Метод flat() возвращает новый массив, в котором все элементы вложенных подмассивов были рекурсивно "подняты" на указанный уровень depth (по дефолту = 1, якщо 'Infinity' - то розгладжує до одного масиву без вкладенності).
// const arr1 = [1, 2, 3, [4, 5]];
// console.log(arr1.flat()); // [1, 2, 3, 4];

// const arr2 = [1, 2, 3, [4, [5, 6]]];
// console.log(arr2.flat()); // [1, 2, 3, 4, [5, 6]];
// console.log(arr2.flat(2)); // [1, 2, 3, 4, 5, 6];

// const arr3 = [1, 2, 3, [4, [5, 6], [7, 8, [9]]]];
// console.log(arr3.flat(Infinity)); // [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // ❗️❗️❗️ Метод filter(callback)
// // Використовується для фільтрації масиву - коли необхідно обрати кілька елементів вхідного масиву за певними критеріями/умовами
// // array.filter(item, idx, array) => { тіло колбек-функції }
// // 1. Не змінює оригінальний масив
// // 2. Перебирає всі елементи вхідного масиву
// // 3. Повертає новий масив
// // 4. Додає в вихідний масив ті елементи, що відповідають умові колбек-функції: якщо колбек функція повертає true - елемент додається в новий масив, якщо false - ні; якщо жоден елемент не відповідає умові - повертає порожній масив

// const numbers = [1, 2, 3, 4, 5, 6];
// const multipleOfTwo = numbers.filter(number => !(number % 2));
// const multipleOfThree = numbers.filter(number => !(number % 3));

// console.log(multipleOfTwo); // [2, 4, 6]
// console.log(multipleOfThree); // [3, 6]

// // ✅ ❗ Пошук та відбір унікальних елементів
// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ];

// // отримаємо масив всіх курсів
// const allCourses = students.flatMap(student => student.courses);
// console.log(allCourses);
// // ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];

// // відбіраємо уникальні курси:

// const uniqueCourses = allCourses.filter(
//     (course, index, array) => {
//       console.log('iteration', index + 1); // виводимо номер ітераціїї
//       console.log('course', course); // виводимо нвзву курсу
//       console.log('index', index); // виводимо індекс курсу на поточній ітераціі
//       console.log(array.indexOf(course)); // виводмимо результат отримання індексу курсу - перше співпадіння!
//       return array.indexOf(course) === index; // виконуємо порівняння індексу першого співпадіння з індексом поточної ітерації - якщо true - курс додаэться в новий масив, а якщо false, то в новий масив курс не додається (не відповідає умові фільтрації)
//     }
// );

// в лаконычному вигляді:
// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index
// );

// console.log(uniqueCourses);

// // ❗️❗️❗️ Метод filter() для масиву об'єктів
// // При роботі з масивом об'єктів метод filter() створює новий масив об'єктів, відфільтрованих за певною умовою

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best); // Масив об'єктів з іменами Манго і Ківі

// const worst = students.filter(student => student.score < LOW_SCORE);
// console.log(worst); // Масив з одним об'єктом Аякс

// // В колбек-функції зручно деструктуризувати властивості об'єкта
// const average = students.filter(
//   ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
// );
// console.log(average); // Масив об'єктів з іменами Полі і Х'юстон

// // ❗️❗️❗️ Метод find()
// // Метод виконує пошук першого збігу в масиві. Повертає елемент (не масив!), для якого колбек-функція повернула true, після чого припиняє пошук. Якщо не знайдено жодного елемента, відповідаючого умові, то повертається undefind.
// // 1. Не змінює оригінальний масив.
// // 2. Поелементо перебирає оригінальний масив.
// // 3. Повертає перший елемент (не масив!), що задовольняє умову, тобто коли колбек повертає true.
// // 4. Якщо жоден елемент не задовольнив умову, тобто для всіх елементів колбек повернув false, метод повертає undefined.
// // Найчастіше використовується для пошуку по унікальної властивості.
// // array.find((item, idx, array) => { тіло колбек-функції })

// const users = [
//   { name: 'Jonh', status: 'active' },
//   { name: 'Joody', status: 'snooze' },
//   { name: 'Tom', status: 'active' },
//   { name: 'Mary', status: 'snooze' },
// ];

// console.log(users.find(user => user.status === 'snooze')); // { name: 'Joody', status: 'snooze' } - повернув тільки перший збіг

// // ❗️❗️❗️ Метод findIndex()
// // Використовується як аналог indexOf. Дозволяє задати складні умови, ніж рівність. Повертає індекс першого елемента, який відповідає (true) умовам колбек-функції, або -1, якщо для всіх елементів колбек повернув false. Працює як з примітивами, так і з об'єктами в масиві.
// // array.findIndex((item, idx, array) => { тіло колбек-функції })
// console.log(users.findIndex(user => user.status === 'snooze')); // 1

// // ❗️❗️❗️ Метод every()
// // Перевіряє, чи проходять всі елементи перевірку колбек функції, та повертає true або false.
// // Усі елементи більші або дорівнюють нулю? - так
// [1, 2, 3, 4, 5].every(value => value >= 0); // true

// // Усі елементи більші або дорівнюють нулю? - ні
// [1, 2, 3, -10, 4, 5].every(value => value >= 0); // false

// // ❗️❗️❗️ Метод some()
// // Перевіряє, чи проходить хоча б один елемент перевірку колбек функції, та повертає true або false. Припиняється, коли повертає true
// // Чи є хоча б один елемент, що більший або дорівнює нулю? - так
// [1, 2, 3, 4, 5].some(value => value >= 0); // true

// // Чи є хоча б один елемент, що більший або дорівнює нулю? - так
// [-7, -20, 3, -10, -14].some(value => value >= 0); // true

// // Чи є хоча б один елемент, що менший нуля? - ні
// [1, 2, 3, 4, 5].some(value => value < 0); // false

// // Чи є хоча б один елемент, що менший нуля? - так
// [1, 2, 3, -10, 4, 5].some(value => value < 0); // true

// // ❗️❗️❗️ Методи every() і some() для масиву об'єктів
// const fruits = [
//   { name: "apples", amount: 100 },
//   { name: "bananas", amount: 0 },
//   { name: "grapes", amount: 50 },
// ];

// // every поверне true тільки, якщо усіх фруктів буде більше 0 штук
// const allAvailable = fruits.every(fruit => fruit.amount > 0); // false

// // some поверне true, якщо хоча б одного фрукту буде більше 0 штук
// const anyAvailable = fruits.some(fruits => fruits.amount > 0); // true

// // ❗️❗️❗️ Метод reduce(callback, initialValue)
// // Виконує послідовну обробку кожного елемента масиву зі збереженням проміжного результату, як акумулятор.
// // Використовується, коли потрібно взяти багато та привести до одного. Частіше використовується для роботи з числами.
// // array.reduce((previousValue, element, index, array) => {
//   // Тіло колбек-функції
// // }, initialValue);

// // 1. не змінює вхідний масив
// // 2. поелементно перебирає вхідний масив
// // 3. повертає що завгодно
// // 4. робіть все що завгодно

// const total = [1, 2, 3, 4, 5].reduce((previousValue, number) => {
//   console.log(previousValue);
//   return previousValue + number;
// }, 0); // 0 - початкове значення акумулятора, або initialValue - ініціююче значення (необов'язково, але взагалі важливо, бо див нижче - буде проблема)
// console.log(total); // 15
// // previousValue - проміжний результат: 0 1 3 6 10 - проміжне значення total на кожній ітерації

// // Якщо початкове значення акумулятора не вказно, то для першої ітерації його значенням буде перше значення масиву, а друге значення буде використовуватися як перше знаяення для обробки. На наступних ітераціях для акумулятора буде зазначено undefind:

// const total = [1, 2, 3, 4, 5].reduce((acc, number) => {
//     console.log(`acc: ${acc}`);
//     number += acc;
//   console.log(`number: ${number}`);
// },);

// const total = [1, 2, 3, 4, 5].reduce((previousValue, number) =>
//      previousValue + number
// );
// console.log(total); // 15

// // ❗️❗️❗️ Метод reduce() для роботи з масивом об'єктів
// // при роботі з масивом виконується редукування за значенням певної властивості, наприклад отримання середнього значення

// const students = [
//   { name: 'John', score: 10 },
//   { name: 'Joody', score: 6 },
//   { name: 'Mary', score: 8 },
//   { name: 'Tom', score: 9 },
// ];

// const totalScore = students.reduce((total, student) => {
//     console.log(total);
//     return total + student.score;
// }, 0); // початкове значення total обов'язкове - до нього підсумовуються інші значення - інакше буде конкатенація
// console.log(totalScore); // 33

// const averageScore = totalScore / students.length;
// console.log(averageScore); // 8.25

// ❓❓❓ Просунутий reduce
//  є масив обь'єктів твітов
const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

// 1 потрібно отримати суму всіх лайків
const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
console.log(likes); // 32

// теж саме у вигляді функції для повторного використання (якщо у нас є кілька колекцій)
const countLikes = tweets => {
    return tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
};
console.log(countLikes(tweets)); // 32

// 2 зібрати в масив всі тегі
const tags = tweets.reduce((allTags, tweet) => {
  allTags.push(...tweet.tags); // ми збіраємо в масив, тому масиви тегів розпилюємо спредом з твітов та пушим розпили в початковий масив, який ми оголосили як початкове значення акумулятора
  return allTags;
}, []); // початкове значення акумулятора - порожній масив
console.log(tags); // ['js', 'nodejs', 'html', 'css', 'html', 'js', 'nodejs', 'css', 'react', 'js', 'nodejs', 'react']

// теж саме у вигляді функції для повторного використання
const getTags = tweets =>
  tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);
    return allTags;
  }, []);
console.log(getTags(tweets)); // ['js', 'nodejs', 'html', 'css', 'html', 'js', 'nodejs', 'css', 'react', 'js', 'nodejs', 'react']



// 3 Порахувати кількість унікальних тегів
// запишимо отриманий результат в змінну:
const arrTags = getTags(tweets);
console.log(arrTags);

// створюємо колбек-функцію, яка отримує значення акумулятора та значення тегу від викликаючеї її функції countTags з редусом (нижче), та збирає об'ект з масиву та присвоює значення акумулятора до назви тегу
const getTagStats = (acc, tag) => {
  if (!acc.hasOwnProperty(tag)) {
    // перевірка, чи не має акумулятолр ключ з певним значенням. На першої ітерації отримаємо тег 'js' та маємо акумулятор - порожній об'єект - якщо акуумулятор нє містить властивість тега (ключ) 'js' - в такому випадку створюється властивість об'екта з ключем 0
    acc[tag] = 0; // створили властивість з ключем 0
  }

  acc[tag] += 1; // потім додаємо до акумулятора 1 (якщо властивість створена вперше, то значення ключа = 1), якщо властивість (ключ) є, то в тіло if не попадаємо, а вже існуюче значення цього ключа збільшуємо (інкрементимо) на 1

  return acc;
};

const countTags = arr => arr.reduce(getTagStats, {}); // викликаемо перебір масиву тегів з редусом та передаємо в редус колбек-функцію (яка отримує від редуса тегі кожній ітерації) та порожній об'ект для його заповнення як початкове значення акумулятора

const tagCount = countTags(arrTags); // викликаемо функцію перебору та передаємо її отриманий масив об'ектів
console.log(tagCount);





// // ❗❗❗ Метод sort()
// // Сортує елементи масиву по значенню Unicode ПЕРШОГО символу за зростанням. Тому для "правільного" сортування потрібно використовувати патерни.
// // Повертає відсортований вхідний масив - мутуючий метод (не чиста функція).
// // При сортуванні значення приводяться до рядка.

// // ❗❗❗ Свій порядок сортування:
// // Для заданя "правільного" порядку сортування методу sort() необхідно передати колбек-функцію з двома парметрами - це будуть значення з масиву для порівняння в колбек-функції (a - перший елемент для порівняння, b - другий елемент для порівняння).
// // ❗ для сортування чисел виклористовується такий патерн:
// const scores = [61, 19, 74, 35, 92, 56];

// const ascendingScores = [...scores].sort((a, b) => a - b); // якщо вираз повертає від'ємне значення (a < b), то сортування поставить a перед b, якщо додатне (a > b), то b перед a. Сортування за зростанням.
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// const descendingScores = [...scores].sort((a, b) => b - a); // якщо вираз повертає від'ємне значення (b < a), то сортування поставить b перед a, якщо додатне (b > a), то a перед b. Сортування за спаданням.
// console.log(descendingScores); // [19, 35, 56, 61, 74, 92]

// // ❗ для сортування рядків виклористовується такий патерн:
// const students = ["Віка", "Андрій", "Олег", "Юля", "Борис", "Катя"];

// const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b)); // за зростанням
// console.log(inAlphabetOrder); // ['Андрій', 'Борис', 'Віка', 'Катя', 'Олег', 'Юля']

// const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a)); // за спаданням
// console.log(inReversedOrder); // ['Юля', 'Олег', 'Катя', 'Віка', 'Борис', 'Андрій']
