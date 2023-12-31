'use strict'; // директива - увімкнення строгого режиму (якщо не використовується  type="module" в html)

// // ❗️❗️❗️ SAY HELLO
// // Об'явлення змінної (const, let)
// const helloMsg = 'Hello World';
// const wellcomeText = 'JavaScript is awesome';
// // Вивід повідомлення браузера у вигляді модального вікна
// alert(helloMsg);
// // Звернення до властивості
// console.log(wellcomeText.length);
// // Виклик метода
// console.log(wellcomeText.toUpperCase());

// //  ❗️❗️❗️ VARIABLES
// // Змінна, яку потрібно одразу ініціалізувати та не можна змінити значення потім. Застосовується загально. Це нібито 'константа' (const).
// // const a; // error
// const a = 7;
// // a = 8; // error
// // Змінна, яку не потрібно ініціалізувати значенням одразу при оголошенні та можна перевизначити. Застосовується коли потрібно зміняти змінну під час виконання скрипту, а також для використання для функції в локальної області видимості. Дослівно це означає "пусть" або "припустимо, що", : "Пусть x буде 9".
// let b; // undefined (невизначена)
// b = 9; //
// console.log(b); // 9
// // перевизначення b
// b = 'one more variable'; // 'one more variable
// console.log(b);

// const yearOfBirth = 1976;
// console.log(yearOfBirth);
// let age;
// age = 46;
// console.log(age);

// // Константа UPPER_SNAKE_CASE - використовується як вказівка, що цю змінну міняти не можна (як вказівка розробникам, що ця змінна типу зарезервована, та її не слід зміняти)
// const YEAR_OF_BIRTH = 1976;

// // ❗️❗️❗️ DATATYPES
// number - число ціле або з плаваючою комою (крапкою)
// string - рядок, текст
// boolean - логічний тип правда/брехня: true = 1, false = 0
// null - загальне "ніщо", ВИЗНАЧЕННА відсутність значення (тому не 'undefined');
// undefined - не визначеність, наприклад, якщо для змінної не присвоєне значення
// bigint (?)
// symbol (?)

// const userName = 'Vitalii';
// console.log(typeof userName); // string
// let surname;
// console.log(typeof surname); // undefined
// const yearOfBirth = 1976;
// console.log(typeof yearOfBirth); // number
// const someValue = null;
// console.log(typeof someValue); // object (?)
// const haveChildren = true;
// console.log(typeof haveChildren); // boolean
// const price = 20.2;
// console.log(typeof price); // number

// // Оператор typeof - використовується для отримання типу значення змінної
// const type1 = typeof '5';
// console.log(type1); // string
// const type2 = typeof userName;
// console.log(type2); // undefined

// // ❗️❗️❗️ INPUT
// // alert() - виводить модальне вікно із кнопкою "OK" та блокує виконання скрипта до натискання на кнопку
// alert('Hi!');

// // console.log() - вивід в консоль
// const userName = 'Vitalii';
// console.log('My name is ', userName);

// // confirm() - діалогове вікно з "OK" та "Cancel". Блокує виконання скрипта. Натискання на кнопку повертає boolean (Ok - true, Cancel - false).
// const isComing = confirm('Are you ready to watch my site?');
// console.log(isComing);

// // prompt() - виводить діалогове вікно з рядком для введення та кнопкою "OK", блокує виконання скрипта до натискання на кнопку, натискання на кнопку повертає введене значення.
// const guestName = prompt('What is your name?');
// console.log('Hello, ', guestName, '.');

// const guestAge = prompt('How old are you?');
// console.log('You are ', guestAge, ' years old.');
// console.log(guestAge);
// console.log(typeof guestAge);

// // ❗️❗️❗️  ALGEBRA
// // Оператори - це знакі, які використовуються для виконання дій (+, -, *, %, /, ...)
// // Операнди - значення, з яким виконуються дії
// const x = 10;
// const y = 3;

// let x = Number(prompt('Add 1st number'));
// x = Number(x); // з prompt отримуємо рядок, тому приводимо його до числа
// let y = Number(prompt('Add 2nd number'));
// y = Number(y);
// console.log(typeof x);
// console.log(typeof y);
// console.log('x = ', x);
// console.log('y = ', y);
// console.log(x + y); // додавання, але потрібно пам'ятати, що при роботі із різними типами операндів, якщо один з них string, математичний оператор '+' виконує конкатенацію, тобто складання рядків один до іншого, тому залежить від ситуації: для складання чисел потрібно приводити їх до number, при необхідності конкатенації - приведення до number не потрібно.

// console.log(x - y); // віднімання. Приведення до числа виконується автоматично.
// console.log(x * y); // множення. Приведення до числа виконується автоматично.
// console.log(x / y); // ділення. Приведення до числа виконується автоматично.
// console.log(x % y); //остача від ділення. Приведення до числа виконується автоматично.

// let value = 5; // 5
// console.log(value);
// value = value + 10; // 15
// console.log(value);
// value += 20; // 35
// console.log(value);

// // ❗️❗️❗️ COMPARISON (Оператори порівняння ( > , < , >= , <= , == , != , === , !== ))
// const x = 5;
// const y = 10;
// const z = 5;

// console.log('x =', x);
// console.log(typeof x);
// console.log('y =', y);
// console.log(typeof y);
// console.log('z =', z);
// console.log(typeof z);

// console.log('x > y:', x > y); // false
// console.log('x < y:', x < y); // true
// console.log('x < z:', x < z); // false
// console.log('x <= z:', x <= z); // true
// console.log('x === y:', x === y); // false
// console.log('x === z:', x === z); // true
// console.log('x !== y:', x !== y); // true
// console.log('x !== z:', x !== z); // false

// // ❗️❗️❗️ Загальні правила порівняння
// // Результатом порівняння буде бульове значення.
// // ❗️ Порівняння різних типів операндів
// // При не строгому порівнянні операндів різного типу, операнди приводяться до числа. При цьому (виключення):
// // null == null == undefined == undefined !== * (null та undefined дорівнюють один одному та не дорівнює нічому більше)
// console.log(null == null); // true
// console.log(null == undefined); // true
// console.log(undefined == undefined); // true
// console.log(null == '3'); // false
// console.log(undefined == '3'); // false

// // NaN != * (NaN не дорівнює нічому, навіть самому собі)
// console.log(NaN == NaN); // false

// // рядки між собою порівнюються посимвольно за unicode
//  // Строгі оператори  (=== і !== ) не виконують приведення типів та виконують порівняння операндів в тому вигляді як є:
// console.log(3 === '3'); // false

// // ❗️❗️❗️ Правила приведення різних типів до числа:
// // true --> 1
// // false --> 0
// // '' (порожній рядок, або рядок із пробілом(и)) --> 0
// // null --> 0
// // undefined --> NaN
// // '123' (не порожній рядок з цифр) --> приведення до числа, що міститься у рядку
// // '123.4' (не порожній рядок з цифр з крапкою - дріб) --> приведення до числа, що міститься у рядку
// // '123a' (не порожній ряжок, якщо є хоча б один символ не цифра або крапка) --> NaN

// console.log(null == 0); // false - спрацьовує виключення щодо різних типів даних
// console.log(undefined == 0); // false - спрацьовує виключення щодо різних типів даних
// console.log(undefined == null); // true - спрацьовує виключення щодо рівності undefind і null
// console.log("123" == 123); // true - виконується приведення числа в рядку до number
// console.log(true == '1'); // true - виконується приведення числа в рядку number та правило, що true == 1, тобто 1 == 1
// console.log(4 == 5); // false - 4 не рівно 5
// console.log('123' === 123); // false - при строгому порівнянні не виконується приведення рядку до числа та string не рівно number
// console.log(null === null); // true - null рівно самому собі
// console.log(2 + 2 === 4); // true - результат додання дорівнює числу
// console.log(NaN === NaN); // false - спрацьовує виключення щодо NaN не дорівнює нічому
// console.log(undefined === null); // false - строге порівняння різних типів даних
// console.log("4" != 4); // false - виконується приведення числа у рядку до числа та порівнюються два числа, 4 == 4, тому "не рівно" дає false
// console.log('4' !== 4); // true - строге порівняння різних типів даних, та вони не рівні
// console.log(null > 0); // false - null приведене до number та дорівнює 0
// console.log(null >= 0); // true - null приведене до number та дорівнює 0

// // При порівнянні за операторами строгої рівності ( === ) або не рівності ( !== ) не виконується приведення до числа, тому різні типи даних не рівні

// const x = '5'; // string
// const y = '10'; // string
// const z = 5; // number

// console.log('x > z:', x > z); // false - js привів x-string до x-number
// console.log('x < z:', x < z); // false - js привів x-string до x-number
// console.log('x < z:', x >= z); // true - js привів x-string до x-number
// console.log('x <= z:', x <= z); // true - js привів x-string до x-number

// console.log('x === z:', x === z); // false !!! строге порівняння: x-string не приводиться до number та залишається рядком, і рядок не дорівнює числу, тому це неправда
// console.log('x !== z:', x !== z); // true !!! строге порівняння: x-string не приводиться до number та залишається рядком, і рядок не дорівнює числу, тому не правда
// console.log('string == string:', x == y); // false порівняння за unicode, тому string '5' не рівно string '10'

// // ❗️❗️❗️ Числа. Number. NaN, isNaN

// // ❗️ Перетворення числа з рядку (якщо немає інших символів, окрім крапки, яка вважається розділення десяткового дробу) виконується за допомогою методу Number()
// const a = '5.1';
// console.log(typeof a); // string
// console.log(Number(a)); // 5.1 ('5.1' --> 5.1)
// console.log(typeof Number(a)); // number

// // Також приведення до числа може бути таким чином (не рекомендовано): +a
// const a = +'5.1';
// const b = +a;
// console.log(typeof a);
// console.log(typeof b);

// const b = 'random string';
// console.log(typeof b); // string
// console.log(Number(b)); // NaN
// console.log(typeof Number(b)); // number - NaN - тип number

// // ❗️ Метод Number.parseInt() - відпарсює числа з початку рядка, доки не дістанеться рядкового символу
// console.log(Number.parseInt('5px')); // 5
// console.log(Number.parseInt('12qwe74')); // 12
// console.log(Number.parseInt('12.46qwe79')); // 12
// console.log(Number.parseInt('qweqwe')); // NaN

// // ❗️ Метод Number.parseFloat() парсить з початку рядка дрібне число, тобто з урахуванням крапки
// console.log(Number.parseFloat("12.46qwe79")); // 12.46

// // ❗️ Метод Number.isNaN() перевіряє, чи значення є числом, та повертає буль, але в зворотному напрямку: "чи це НЕ число?": true - так, це НЕ ЧИСЛО; false - ні, це ЧИСЛО. Але функція сама не робить приведення, тому для виконання порівняння потрібно спочатку привести перевірене значення до number, а потім виконувати перевірку, інакше буде постійно повертати false. ПЕРЕВІРКУ НА NaN - ТІЛЬКИ ПІСЛЯ ПРИВЕДЕННЯ ДО NUMBER!:

// const a = 123;
// const b = 'qwerty';
// console.log(Number.isNaN(a)); // false
// console.log(Number.isNaN(b)); // false

// const itNumber = Number('51'); // 51
// console.log(Number.isNaN(itNumber)); // false - приведене до числа, тому це не НЕ ЧИСЛО
// const itNotNumber = Number('qweqwe'); // NaN
// console.log(Number.isNaN(itNotNumber)); // true - при приведенні до числа отримали NuN, тобто NuN є isNaN

// // ❗️❗️❗️ Числа з рухомою крапкою
// // при рахуванні у двійковій системі дрібні числа можуть мати похибку (особливості рахування у двійковій системі):
// console.log(0.1 + 0.2); // 0.30000000000000004
// console.log(0.1 + 0.2 === 0.3); // false

// // тому для таких випадків можна використовувати множення операндів на 10 (або 100, 1000 і т. і.) для приведення спочатку до цілих чисел, а потім ділення результату на той самий множник:
// console.log(0.17 + 0.29); // 0.45999999999999996
// console.log(0.17 + 0.29 === 0.46); // false
// console.log((0.17 * 100 + 0.29 * 100) / 100); // 0.46
// console.log((0.17 * 100 + 0.29 * 100) / 100 === 0.46); // true

// // На заміну цього способу використовується метод toFixed() з вказанням, до якого знаку після коми потрібно відрізати. Виконується множення операндів та потім ділення на потрібне значення для виправлення проблеми двійкового обчислення (так кажучи, все під капотом). Але метод toFixed повертає не number, а рядок, тому потім потрібно перетворити результат на number.
// console.log((0.1 + 0.2).toFixed(1)); // 0.3 замість 0.30000000000000004
// console.log((0.17 + 0.29).toFixed(2)); // 0.46 замість 45999999999999996
// console.log((0.3 + 0.6).toFixed(2)); // 0.90 замість 0.8999999999999999
// console.log(Number((0.3 + 0.6).toFixed(2))); // 0.9 приведене до числа

// // ❗️❗️❗️ Вбудований клас Math має набір методів для роботи з числами.
// // ❗️ Math.floor(number) повертає найменше ціле число, менше ніж зазначено - тобто, округляє в менший бік
// console.log(Math.floor(2.7)); // 2

// // ❗️ Math.ceil(number) повертає найбільше ціле число, більше ніж зазначено, тобто округляє в більший бік
// console.log(Math.ceil(5.3)); // 6

// // ❗️ Math.round(number) повертає число, округлене  за математичними правилами
// console.log(Math.round(2.7)); // 3
// console.log(Math.round(5.3)); // 5

// // ❗️ Math.min(num1, num2, ...) повертає найменше число з набору
// console.log(Math.min(60, 20, 100, 35)); // 20

// // ❗️ Math.max(num1, num2, ...) повертає найбільше число з набору
// console.log(Math.max(60, 20, 100, 35)); // 100

// // ❗️ Math.pow(base, exponent) зведення в ступінь
// console.log(Math.pow(2, 3)); // 8 (2 в ступені 3 дорівнює 8)
// // олд-скульний метод возведення в ступень (з експонентом ( ** )):
// console.log(2 ** 3); // 8 (2 в ступені 3 дорівнює 8)
// console.log(Math.pow(4, 0.5)); // 2 (4 с ступені 0.5, тобто квадратний корінь з 4 дорівнює 2)
// console.log(Math.pow(8, 1 / 3)); // 2 (кубічний корінь з 8)

// // ❗️ Math.random() повертає псевдо випадкове число (НЕ ВКЛЮЧНО! для включно - див інтернети)
// console.log(Math.random()); // псевдо випадкове число від 0 до 1

// // для отримання цілих чисел, або використання діапазонів використовується формула (Math.random() * (max - min) + min)
// console.log((Math.random() * (10 - 1) + 1).toFixed(0)); // псевдо випадкове число від 1 до 10 округлене до 0 знаків після крапки
// // або округлення за допомогою Math.round():
// const max = 50;
// const min = 20;
// console.log(Math.round(Math.random() * (max - min) + min)); // повертає псевдо випадкове число від min = 20 до max = 50, округлене до цілого за математичними правилами

// // Рандомна зміна кольору сторінки при її завантажені:
// const colors = ['tomato', 'teal', 'orange', 'blue']
// const max = colors.length - 1;
// const min = 0;
// const index = Math.round(Math.random() * (max - min) + min);
// const color = colors[index];

// console.log(color);
// document.body.style.backgroundColor = color;

// // ❗️❗️❗️ Strings
// // Рядки - це індексовані елементи з 0 до останнього символу. Індекс символу на 1 менше, ніж його місце по порядку (index = position - 1)
// const text = 'JavaScript';
// console.log(text[4]); // 'S' - символ за індексом 4 (на позиції 5)

// // Оператор '+' виконує конкатенацію рядка, якщо операнди не number:
// console.log("I'll" + ' be ' + 'back'); // 'I'll be back' - конкатенація рядків
// console.log(1 + '2'); // '12' - не виконано приведення, зроблена конкатенація
// console.log(1 + 2 + '3'); // '33' - спочатку виконалось додавання, потім конкатенація

// // ❗️❗️❗️ Приведення до рядка
// const num = 123;
// console.log(num);
// // Конструктор рядка. Оголошуємо значення рядком (String()):
// const str1 = String(num);
// console.log(str1);
// // З конкатенацією порожнього рядка:
// const str2 = num + '';
// console.log(str2);
// // Виклик методу .toString():
// const str3 = num.toString();
// console.log(str3);

// // ❗️❗️❗️ Шаблонні рядками
// // У випадках, коли потрібно динамічно створювати рядки з підстановкою змінних (наприклад, з різних джерел) застосовуються шаблонні рядки
// // для будови шаблонного рядка використовується конструкція зі зворотними лапками ( `` ) та інтерполяцією ( ${} )
// // `text1 ${variable} text2...`
// const userName = prompt('What is your name?');
// const userAge = prompt('How old are you?');
// const message = `Hello ${userName}! You are ${userAge} years old.`;
// alert(message);

// // ❗️❗️❗️ Властивості та методи рядка
// // ❗️ Властивість length - Довжина рядка - повертає кількість символів у рядку. Враховуються всі символи в тому числі і пробіли
// console.log(message.length); // 36
// console.log('Some text'.length); // 9

// // ❗️ Методи toLowerCase() та toUpperCase() повертають новий рядок у відповідному регістрі:
// const message = 'Hello World!';
// console.log(message.toLowerCase()); // hello world!
// console.log(message.toUpperCase()); // HELLO WORLD!

// // Застосовується для нормалізації та порівняння текстів:
// const brandName1 = 'CanDy';
// const brandName2 = 'caNdy';
// console.log(brandName1 === brandName2); // false
// console.log(brandName1.toLowerCase() === brandName2.toLowerCase()); // true

// // ❗️ Метод indexOf() повертає індекс позиції першого збігу підрядка, або -1 якщо збігу не знайдено. Регістр має значення:
// const brandName1 = 'CanDy';
// console.log(brandName1.indexOf('c')); // -1
// console.log(brandName1.indexOf('C')); // 0
// console.log(brandName1.indexOf('Dy')); // 3
// console.log(brandName1.indexOf('dy')); // -1

// // ❗️ Метод lastIndexOf() повертає індекс позиції останнього збігу підрядка або -1 якщо збігу не знайдено. Регістр має значення:
// const someWord = 'banana';
// console.log(someWord.indexOf('a')); // 1
// console.log(someWord.lastIndexOf('a')); // 5
// console.log(someWord.lastIndexOf('c')); // -1

// // ❗️ Метод charAt() повертає рядок з символом із рядка за вказаним індексом. Якщо зазначений індекс виходить за рамки діапазону довжини рядка, то повертає порожній рядок. Аналог звернення до індексу з квадратними дужками
// const brandName1 = 'CanDy';
// console.log(brandName1.charAt(0)); // 'C'
// console.log(brandName1.charAt(7)); // ''
// console.log(brandName1[0]); // 'C'

// // ❗️ Метод includes() перевіряє, чи міститься зазначений підрядок в рядку. Повертає true або false. Регістра має значення:
// const brandName1 = 'CanDy';
// console.log(brandName1.includes('Dy')); // true
// console.log(brandName1.includes('dy')); // false

// // ❗️ Метод endsWith() дозволяє визначити, чи завершується рядок зазначеними символами (підрядком). Повертає true або false. Регістр має значення:
// const fileName = 'index.html';
// const fileExtension1 = '.html';
// const fileExtension2 = '.css';
// console.log(fileName.endsWith(fileExtension1)); //true
// console.log(fileName.endsWith(fileExtension2)); // false

// // ❗️ Метод startsWith() дозволяє визначити, чи починається рядок зазначеними символами (підрядком). Повертає true або false. Регістр має значення:
// const fileName = 'index.html';
// const fileBegin1 = 'index';
// const fileBegin2 = 'styles';
// console.log(fileName.startsWith(fileBegin1)); //true
// console.log(fileName.startsWith(fileBegin2)); // false

// // ❗️ Метод replace() та replaceAll() повертає новий рядок, в якому виконано заміну збігів (першого (replace) або всіх (replaceAll)) на вказане значення. Регістр має значення:
// const someWord = 'banana';
// const someWord1 = someWord.replace('a', '@');
// const someWord2 = someWord.replaceAll('a', '@');
// console.log(someWord); // 'banana'
// console.log(someWord1); // 'b@nana'
// console.log(someWord2); // 'b@n@n@'
// console.log(someWord.replace('a', '@')); // 'b@nana'

// // ❗️ Метод slice (atartIndex, endIndex) дозволяє створити копію частини рядка (або всього) від startIndex (включно) до endIndex (не включно). Не змінює оригінал. Повертає новий масив.
// const someWord = 'Some Word';
// console.log(someWord.slice(0, 4)); // 'Some'
// console.log(someWord.slice(5, someWord.length)); // 'Word' - 'length' повертає довжину рядка, та останній символ має індекс на одиницю менший ніж довжина рядка
// console.log(someWord.slice(0, someWord.length)); // 'Some Word' - повна копія рядка
// console.log(someWord.slice(0)); // 'Some Word' - повертає все від індексу 0 до кінця
// console.log(someWord.slice(5)); // 'Word' - повертає все від індексу 5 до кінця
// console.log(someWord.slice(-4)); // 'Word' - повертає значення з кінця - від -4 індексу - до кінця рядка (відраховує з кінця)
// console.log(someWord.slice(-1)); // 'd' - останній символ рядка
// console.log(someWord.slice(-9, -3)); // 'Some W' - повертає значення від індексів, відрахованих з кінця (-9 - 'S', -3 - 'o', але не включно(!), тому останній символ повернутого рядка це 'W')

// // ❗️ Метод trim() видаляє пробіли на початку та кінці строки, та повертає нову строку без початкових та кінцевих пробілів.
// const sameText = '   Text   ';
// console.log(sameText.length); // 10
// console.log(sameText.trim().length); // 4
// console.log(sameText.trim()); // 'Text'

// // ❗️ Метод padStart(targetLength, padString) заповнює рядок символами padString на початку рядка для отримання заданої targetLength довжини рядка. padString - не обов'язковий. Якщо padString занадто довгий, його буде обрізано для досягнення заданої довжини рядка. Метод викликається на рядку.
// console.log('abc'.padStart(6, 0)); // '000abc'
// console.log('abc'.padStart(6, '000000')); // '000abc'
// console.log('abc'.padStart(9, 'foo')); // 'foofooabc'
// console.log('abc'.padStart(1)); // 'abc'

// // ❗️ Метод padEnd(targetLength, padString) заповнює рядок символами padString на прикінці рядка для отримання заданої targetLength довжини рядка. padString - не обов'язковий. Якщо padString занадто довгий, його буде обрізано для досягнення заданої довжини рядка. Метод викликається на рядку.
// console.log('abc'.padEnd(6, 0)); // 'abc000'
// console.log('abc'.padEnd(6, '000000')); // 'abc000'
// console.log('abc'.padEnd(9, 'foo')); // 'abcfoofoo'
// console.log('abc'.padEnd(1)); // 'abc'

// // ❗️❗️❗️ Логічні оператори.
// // Відбувається приведення типів операндів до булевих значень (true або false).
// // (falsy) значення, що перетворюється на false у логічному перетворенні при приведенні до буля:
// // 0
// // NaN
// // null
// // undefined
// // порожній рядок ('')
// // false

// // Двійне заперечення
// console.log(!!0); // false
// console.log(!!NaN); // false
// console.log(!!null); // false
// console.log(!!undefined); // false
// console.log(!!''); // false
// console.log(!!false); // false

// // Одинарне заперечення
// console.log(!0); // true
// console.log(!NaN); // true
// console.log(!null); // true
// console.log(!undefined); // true
// console.log(!''); // true
// console.log(!false); // true

// //  Абсолютно все інше приводиться до true!

// // ❗️ Логічне 'І' (and) - &&
// // повертає перший false, або останній true (тобто, запинається на false, та повертає його значення; якщо всі операнди були приведені до true - повертається останнє значення).

// // ❗️ Логічне 'АБО' (or) - ||
// // повертає перший true, або останній false (тобто, зупиняється на true, та повертає його значення; якщо всі операнди приведені до false, повертає останнє значення)
// console.log(null || (2 && 3) || 4); // null || 3 (при && повертається 3 - тобто останнє true) || 4 --> 3 || 4 (повертає перше true) --> 3

// // При використанні в одному вираженні && та || - && має пріоритетність!

// // ❗️ Логічне 'НЕ' (not) - ! (інверсія)
// // Інвертує false в true або true в false. Унарний оператор - виконує операцію над одним операндом. Використовується для роботи з розгалуженнями та явно приводить до буля
// console.log(!true); // false
// console.log(!false); // true
// console.log(!3); // !3 -> !true -> false
// console.log(!"Mango"); // !"Mango" -> !true -> false
// console.log(!0); // !0 -> !false -> true
// console.log(!""); // !"" -> !false -> true
// const isOnline = true;
// const isNotOnline = !isOnline; // !isOnline -> !true -> false

// // ❗️ Оператор нульового злиття - ??
// // Підрозділ логічного оператора &&. Якщо лівий операнд null або undefined - повертає правий операнд, в інших випадках повертає лівий операнд
// console.log(null ?? 1); // 1
// console.log(undefined ?? 1); // 1
// console.log(false ?? 1); // false

// // ❗️ Побітовий НЕ (Bitwise NOT (~))\
// // виконує операцію вичислення -(x + 1) та повертає значення, а з двома знаками оклику - 1-й явне приведення до буля з протилежним значенням, 2-й та вовертає буль до первоначального знячення
// //  якщо x = 1 -> ~1 = -(1 + 1) = -2 (true як буль) -> !!~1 -> true
// //  якщо x = 2 -> ~2 = -(2 + 1) = -3 (true як буль) -> !!~2 -> true
// //  якщо x = 0 -> ~0 = -(0 + 1) = -1 (true як буль) -> !!~0 -> true
// //  якщо x = -1 -> ~(-1) = -(-1 + 1) = -0 (false як буль) -> !!~(-1) -> false
// //  якщо x = -2 -> ~(-2) = -(-2 + 1) = 1 (true як буль) -> !!~(-2) -> true
// // Коли використовується. Наприклад, якщо ми виколристовуємо метод indexOf(), то отримуємо значення від 0 до кінця колекції - 1, якщо шуканий елемент є, або -1, якщо такого елемента немає, в таолму випадку, коли нам потрібно виконувати подальщі дії с колекцією за умовою, чи є елемент, то за допомогою такого оператора можно вказати, що якщо елемент є (значеня індексу від 0 до кінця колекції-1) - все приводиться до true, але якщо елементу немає, то отримуємо -1 та приводимо його до false.
// // !!~(idx) або idx !== -1 або idx > -1

// // ❗️❗️❗️ Розгалуження

// // ❗️❗️❗️ Інструкція IF

// if (умова) {
//     // тіло if
// }

// // вхідні данні, що приводяться до буля. Якщо true, то виконується те, що в фігурних дужках, якщо false - ігнорується та йде далі. Застосовується для перевірки лише однієї умови.

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

// // ❗️❗️❗️ if...else

// // if (умова) {
//     // тіло if
// // } else {
//     // тіло else
// // }

// // Розширення синтаксису if: якщо умова true, виконується тіло if, а тіло else - ігнорується, якщо умова false - тіло if ігнорується, виконується тіло else. Застосовується для перевірки лише однієї умови.

// let cost;
// const subscription = "free";
// if (subscription === "pro") {
//   cost = 100;
// } else {
//   cost = 0;
// }
// console.log(cost); // 0

// // ❗️❗️❗️ else...if
// // додаткова конструкція, яка дозволяє перевірити декілька умов. Перевірка припиняється на першому true та виконується сценарій для цього true. Якщо true не було знайдено виконується останнє else.

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

// // ❗️❗️❗️ Тернарний оператор
// // Застосовується, коли є лише одна умова, як скорочена конструкція if...else.
// // (умова) ? (вираз при true) : (вираз при false).
// // Тернарний оператор використовується в операціях присвоєння та повернення - тобто, для запису значення по умові. Викликати функції тернарним оператором не можна.

// // if...else:
//let type;
// const age = 20;
// if (age >= 18) {
//   type = 'adult';
// } else {
//   type = 'child';
// }
// console.log(type);

// // тернарний запис:
// const age = 16;
// const type = age >= 18 ? 'adult' : 'child';
// console.log(type);

// const num1 = Number(prompt('Enter a number'));
// const num2 = Number(prompt('repeat the entered number'));
// num1 === num2 ? console.log('true') : console.log('false');

// // ❗️❗️❗️ Інструкція swith
// // Застосовується для строго порівняння значень та виконання дій у відповідності до цього значення. Після кожного порівняння має бути break - для переривання обчислень, також наприкінці має бути default для виконання інструкції, якщо збіг не знайдено. Виконується лише строге порівняння числа з числом або рядка з рядком (їх зміст).
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
// // Функціональна
// // бачимо назовні, не бачимо всередину
// // змінні шукаються спочатку в своєї області видимості, якщо не знайдено - рівнем вище и т. і. Все що в фігурних дужках - це локальна область видимості, змінні оголошені в локальної області видимості не бачано за її межами. Принцип: область видимості має доступ до всіх змінних, оголошених в неї та вище за ієрархією, але не може отримати доступу до змінних, які оголошені у вкладених областях нижче або у сусідніх.

// // ❗️❗️❗️ Цикли
// // Керуюча конструкція для багаторазового виконання однотипної дії (інструкції).

// // ❗️❗️❗️ Цикл while - цикл з передумовою - виконується доки правдива якась умова (true), коли умова стає false цикл зупиняється. Спочатку перевіряється умова (condition), якщо true - виконується тіло циклу (statement).
// let i = 0;
// while (i <= 5) { // condition
//   console.log(i); // statement
//   i += 1;
// }

// // ❗️❗️❗️ Цикл do...while - цикл з пост умовою - цикл, в якому умова перевіряється після виконання тіла циклу. Спочатку робиться statement, потім перевіряються наслідки - в такому випадку statement виконується завжди хоча б один раз. Треба уважно прописувати умову, інакше може бути безкінечний цикл.

// let i = 0;
// do {
//   console.log(i);
//   i += 1;
// } while (i <= 5);

// // ❗️❗️❗️ Цикл for - цикл з лічильником. При кожної ітерації виконується зміна лічильника за зазначеним кроком.

// // for (initialization; condition; post-expression) {
//   // statements
// // }
// // initialization - створення змінної лічильника з початковим значенням
// // condition - умова зі змінної лічильника в який виконується порівняння значень (констант), та якщо буде отримано true - продовження циклу, або false - завершення циклу
// // post-expression - виконується оновлення змінної лічильника на заданий крок в кінці кожної ітерації
// // statement - тіло циклу

// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }

// const target = 5;
// let sum = 0;
// for (let i = 0; i <= target; i += 1) {
//   sum += 1;
// }
// console.log(sum);

// // Виведення остачі від ділення значення змінної на значення лічильника
// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// // ❗️❗️❗️ Оператор break - виконує переривання циклу за певними умовами

// for (let i = 1; true; i += 1) {
//   let num3 = Number(prompt('Enter 3'));
//   if (num3 === 3) {
//     console.log('Yes!');
//     console.log(i);
//     break;
//   }
// }

// // ❗️❗️❗️ Оператор continue - перериває поточну ітераціє, але не перериває цикл. Наприклад, переривання розрахунків за певною умовою.
// // Вивести тільки парні числа
// const num1 = 10;
// for (let i = 0; i < num1; i += 1) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   console.log('Парне i', i);
// }

// // Вивести тільки числа кратні 3-м
// const num1 = 30;
// for (let i = 0; i <= num1; i += 1) {
//   if (i % 3 !== 0) {
//     continue;
//   }
//   console.log('Ділиться на 3', i);
// }

// // ❗️❗️❗️ Цикл в циклі - переривання попереднього циклу: потрібно брейком звернутися до назви попереднього циклу:
// a: for (let i = 0; i < 3; i += 1) {
//   console.log('i', i);
//   b: for (let j = 0; j < 3; j += 1) {
//     console.log('  j', j);
//     if (i === 1 && j === 1) {
//       break a;
//     }
//   }
// }
