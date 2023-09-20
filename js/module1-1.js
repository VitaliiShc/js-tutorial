'use strict'; // увімкнення строгого режиму (якщо не використовується  type="module" в html)

// ❗️❗️❗️ SAY HELLO
// const helloMsg = 'Hello World';
// const wellcomeText = 'JavaScript is awesome';
// alert(helloMsg);
// console.log(wellcomeText.length);
// console.log(wellcomeText.toUpperCase());

//  ❗️❗️❗️ VARIABLES
// const a; // error
// const a = 7;
// a = 8; // error
// let a; // underfined
// a = 9;
// console.log(a);
// a = 'one more variable';
// console.log(a);

// const yearOfBirth = 1976;
// console.log(yearOfBirth);
// let age;
// age = 46;
// console.log(age);

// ❗️❗️❗️ DATATYPES
// number - чісло ціле або з плаваюсчою комою (крапкою)
// string - строка, текст
// boolean - логычний тип правда/брехня: true = 1, false = 0
// null - загальне "ніщо", ВИЗНАЧЕННА відсутність значення (тому не 'underfined');
// undefined - не визначенність, наприклад, якщо для змінної не присвоєне значення
// bigint (?)
// symbol (?)

// const userName = 'Vitalii';
// let surname;
// const yearOfBirth = 1976;
// const someValue = null;
// const haveChildren = true;
// const price = 20.2;
// console.log(typeof userName); // string
// console.log(typeof surname); // undefined
// console.log(typeof yearOfBirth); // number
// console.log(typeof someValue); // object (?)
// console.log(typeof haveChildren); // boolean
// console.log(typeof price); // number

// const type1 = typeof '5';
// const type2 = typeof userName;
// console.log(type1);
// console.log(type2);

// ❗️❗️❗️ INPUT
// alert('Hi!'); // виводить діалогове вікно із кнопкою "OK" та блокує виконнання скрипта до натискання на кнопку

// const userName = 'Vitalii';
// console.log('My name is ', userName);

// const isComing = confirm('Are you ready to watch my site?'); // діалогове вікно з "OK" та "Cancel"ю Блокує виконання скрипта. Натискання на кнопку повертає boolean
// console.log(isComing);

// const guestName = prompt('What is your name?'); // віиволдить строку для введення та кнопкою "OK", блокує, натискання на кнопку повертає введенне значення
// console.log('Hello, ', guestName, '.');

// const guestAge = prompt('How old are you?');
// console.log('You are ', guestAge, ' years old.');
// console.log(guestAge);
// console.log(typeof guestAge);

// ❗️❗️❗️  ALGEBRA
// const x = 10;
// const y = 3;

// let x = Number(prompt('Add 1st number'));
// // x = Number(x);
// let y = Number(prompt('Add 2nd number'));
// // y = Number(y);
// console.log(typeof x);
// console.log(typeof y);
// console.log('x = ', x);
// console.log('y = ', y);
// console.log(x + y); // додавання, але потрібно пам'ятати, що при роботі із різнимі типами операндів, якщо один з них string, математичний оператор + виконує тенацію, тобто складання рядків один до іншого, тому потрібно приводити такі значення до number перш ніж математично їх додавати. Але не завжди - залежить від сітуаціі - на прикладах потрібно розбиратися.
// console.log(x - y); // віднімання
// console.log(x * y); // множення
// console.log(x / y); // ділення
// console.log(x % y); //остача від ділення

// let value = 5; // 5
// console.log(value);
// value = value + 10; // 15
// console.log(value);
// value += 20; // 35
// console.log(value);

// console.log(value);

// ❗️❗️❗️ COMPARISON (Оператори порівняння ( > , < , >= , <= , == , != , === , !== ))
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

// ❗️❗️❗️ Загальні правила порівняння
// Результатом порівняння буде бульове значення.
// Поріваняння різних типів операндів
// При не стпрогому порівнянні операедів різного типу, операнди приводяться до числа (крім строгіх операторрів  === і !== ). При цьому (виключення):
// null == null == undefined == undefined !== * (null та underfined дорывнюють один одному та не дорывнюэ нычому быльше)
// console.log(null == null); // true
// console.log(null == undefined); // true
// console.log(undefined == undefined); // true
// console.log(null == '3'); // false
// console.log(undefined == '3'); // false

// // NaN != * (NaN не дорівнює ничому, навіть самому собі)
// console.log(NaN == NaN); // false

// рядки між собою порівнюються посимвольно за unicode

// ❗️❗️❗️ Правила приведення різних типів до числа:
// true --> 1
// false --> 0
// '' (порожній рядок, або рядок із пробілом(и)) --> 0
// null --> 0
// undefined --> NaN
// '123' (не пороженій рядок з цифр) --> приведення до числа, що міститься у рядку
// '123.4' (не пороженій рядок з цифр з крапкою - дріб) --> приведення до числа, що міститься у рядку
// '123a' (не пороженій ряжок, якщо є хочаб один сімвол не цифра або крапка) --> NaN

// console.log(null == 0); // false - спрацьовує виключення щодо різніх типів данних
// console.log(undefined == 0); // false - спрацьовує виключення щодо різніх типів данних
// console.log(undefined == null); // true - спрацьовує виключення щодо рівності undefind і null
// console.log("123" == 123); // true - виконується приведення числа в рядку до number
// console.log(true == '1'); // true - виконуэться приведння числа в рядку number та правило, що true == 1, тобто 1 == 1
// console.log(4 == 5); // false - 4 не рівно 5
// console.log('123' === 123); // false - при строгому порівнянні не виконується приведення рядку до числа та string не рівно number
// console.log(null === null); // true - null рівно самому собі
//  console.log(2 + 2 === 4); // true - результат додання рівен числу
// console.log(NaN === NaN); // false - спрацьовує виключення щодо NaN не рівен нічому
// console.log(undefined === null); // false - строге порівняння різних типів даних
//  console.log("4" != 4); // false - виконується приведення числа у рядку до числа та порівнюються два числа, 4 == 4, тому "не рівно" дає false
// console.log('4' !== 4); // true - строге порівняння різних типів даних, та вони не рівні
// console.log(null > 0); // false - null приведене до number та дорівнює 0
// console.log(null >= 0); // true - null приведене до number та дорівнює 0

// При порівнеянні за операторамі строгої рівності ( === ) або не рівності ( !== ) не виконується приведення до числа, тому різні типи данних не рівні

// const x = '5'; // string
// const y = '10'; // string
// const z = 5; // number

// console.log('x > z:', x > z); // false - js привів x-string до x-number
// console.log('x < z:', x < z); // false - js привів x-string до x-number
// console.log('x < z:', x >= z); // true - js привів x-string до x-number
// console.log('x <= z:', x <= z); // true - js привів x-string до x-number

// console.log('x === z:', x === z); // false !!! строге порівняння: x-string не приводиться до number та залишаэться рядком, і рядок не рівен числу, тому це ложь
// console.log('x !== z:', x !== z); // true !!! строге порівняння: x-string не приводиться до number та залишаэться рядком, і рядок не рівен числу, тому не правда
// console.log('string == string:', x == y); // false порівняння за unicode, тому string '5' не рівно string '10'

// ❗️❗️❗️ Числа. Number. NaN, isNaN

// Перетворення числа з рядку (якщо немає інших символів, окрім крапки, яка вважається розділення десфтичної доробі) выконується за допомогою методу Number()
// const a = '5.1';
// console.log(typeof a); // string
// console.log(Number(a)); // 5.1 ('5.1' --> 5.1)
// console.log(typeof Number(a)); // number

// Також приведення до чісла може бути таким чином (не рекомендовано): +a
// const a = +'5.1';
// const b = +a;
// console.log(typeof a);
// console.log(typeof b);

// const b = 'random string';
// console.log(typeof b); // string
// console.log(Number(b)); // NaN
// console.log(typeof Number(b)); // number - NaN - тип number

// // Метод Number.parseInt() - відпарсює числа з початку рядка, доки не дістанеться рядкового символу
// console.log(Number.parseInt('5px')); // 5
// console.log(Number.parseInt('12qwe74')); // 12
// console.log(Number.parseInt('12.46qwe79')); // 12
// console.log(Number.parseInt('qweqwe')); // NaN

// // Метод Number.parseFloat() парсить з початку рядка дрібне число, тобто з урахуванням крапки
// console.log(Number.parseFloat("12.46qwe79")); // 12.46

// Метод Number.isNaN() перевіряє, чи значення є числом, та повертає буль, але в воротньму напрямку: "це НЕ число?": true - так, це НЕ ЧИСЛО; false - ні, це ЧИСЛО. Але функція сама не робить приведення, тому для виконання порівняння потрібно спочатку при вести перевіряєме значення до number, а потім виконувати перевірку, інакше буде постійно повертати false. ПЕРЕВІРКУ НА NaN - ТІЛЬКИ ПІСЛЯ ПРИВЕДЕННЯ ДО NUMBER!:

// const a = 123;
// const b = 'qwerty';
// console.log(Number.isNaN(a)); // false
// console.log(Number.isNaN(b)); // false

// const itNumber = Number('51'); // 51
// console.log(Number.isNaN(itNumber)); // false - приведене до числа, тому це не НЕ ЧИСЛО
// const itNotNumber = Number('qweqwe'); // NaN
// console.log(Number.isNaN(itNotNumber)); // true - при приведенні до числа отримали NuN, тобто NuN є isNaN

// ❗️❗️❗️ Числа з рухомою крапкою
// при рахуванні в двоїчної системі дрібні чісла можуть маюти похибку:
// console.log(0.1 + 0.2); // 0.30000000000000004
// console.log(0.1 + 0.2 === 0.3); // false

// // тому для таких випадків можна використовувати множення операндів на 10 (або 100б 1000 і т. і.) для приведення спочатку до цилих чисел, а потім ділення результату на той самий множник:
// console.log(0.17 + 0.29); // 0.45999999999999996
// console.log(0.17 + 0.29 === 0.46); // false
// console.log((0.17 * 100 + 0.29 * 100) / 100); // 0.46
// console.log((0.17 * 100 + 0.29 * 100) / 100 === 0.46); // true

// На заміну цього способу використовується метод toFixed() з вказанням, до якого знаку після коми потрібно відрізати. Виконується множення опреандів та потім ділення на потрібне значення для виправлення проблеми твоїчного обчісленнчя (так кажучи, все під капотом). Але метод toFixed повертає не number, а рядок, тгому потім потрібно перетворити резуьтат на number.
// console.log((0.1 + 0.2).toFixed(1)); // 0.3 замість 0.30000000000000004
// console.log((0.17 + 0.29).toFixed(2)); // 0.46 замість 45999999999999996
// console.log((0.3 + 0.6).toFixed(2)); // 0.90 замість 0.8999999999999999
// console.log(Number((0.3 + 0.6).toFixed(2))); // 0.9 приведене до числа

// ❗️❗️❗️ Вбудований клас Math має набір методів для роботи з числами.
// // Math.floor(number) повертає найменше ціле число, менше ніж зазначенео - тобто,округляэ в менший бік
// console.log(Math.floor(2.7)); // 2

// // Math.ceil(number) повертає найбільше ціле число, більше ніж зазначено, тобто округляє в більший бік
// console.log(Math.ceil(5.3)); // 6

// // Math.round(number) повертає число, округлене  за математичними правилами
// console.log(Math.round(2.7)); // 3
// console.log(Math.round(5.3)); // 5

// // Math.min(num1, num2, ...) повертає найменше число з набору
// console.log(Math.min(60, 20, 100, 35)); // 20

// // Math.max(num1, num2, ...) повертає найбільше число з набору
// console.log(Math.max(60, 20, 100, 35)); // 100

// // Math.pow(base, exponent) зведення в ступінь
// console.log(Math.pow(2, 3)); // 8 (2 в ступені 3 дорівнює 8)
// console.log(Math.pow(4, 0.5)); // 2 (4 с ступені 0.5, тобто квадратний корінь з 4 дорівнює 2)
// console.log(Math.pow(8, 1 / 3)); // 2 (кубічний корінь з 8)

// // Math.random() повертає всевдо випадкове число (НЕ ВКЛЮЧНО! для включно - див інтернети)
// console.log(Math.random()); // псевдо випадклве число від 0 до 1
// для отримання цилих чисел, або використання диапазонів використовується формула (Math.random() * (max - min) + min)
// console.log((Math.random() * (10 - 1) + 1).toFixed(0)); // псевдо випадклве число від 1 до 10 округлене до 0 знаків після крапки

// ❗️❗️❗️ Strings
// // Рядки - це індексовані елементи з 0 до останнього символу. Індекс символу на 1 менше, ніж його місцен по порядку (index = position - 1)
// const text = 'JavaScript';
// console.log(text[4]); // 'S' - символ за індексом 4 (на позіції 5)

// // Оператор + виконує конкатенацію рядка, якщо операнди не number:
// console.log("I'll" + ' be ' + 'back'); // 'I'll be back' - конкатенація рядків
// console.log(1 + '2'); // '12' - не виконано приведення, зроблена конкатенація
// console.log(1 + 2 + '3'); // '33' - спочатку виконалолсь додавання, потим конкатенація

// // ❗️❗️❗️ Приведення до рядка
// const num = 123;
// console.log(num);
// // Конструктор рядка. Оголошуемо значення рядком (String()):
// const str1 = String(num);
// console.log(str1);
// // З конкатенацыэю порожнього рядка:
// const str2 = num + '';
// console.log(str2);
// // Виклик методу .toString():
// const str3 = num.toString();
// console.log(str3);

// ❗️❗️❗️ Шаблонні рядкми
// У випадках, коли потрібно дінамічно створювати оядки з підстановкою змінних (наприклад, з різних джерел) застосовуються шаблонні рядки
// для будови шаблонгного рядка використовуеться конструкція зі зворотними кавичками ( `` ) та інтерполяцією ( ${} )
// `text1 ${variable} text2...`
// const userName = prompt('What is your name?');
// const userAge = prompt('How old are you?');
// const message = `Hello ${userName}! You are ${userAge} years old.`;
// alert(message);

// // ❗️❗️❗️ Довжина рядка - Властивість length - повертає кількисть символів у рядку. Враховуються всі символи в томц числі і пробіли
// console.log(message.length); // 36
// console.log('Some text'.length); // 9

// // ❗️❗️❗️ Методи toLowerCase() та toUpperCase() повертають новий рядок у відповідному регістрі:
// const message = 'Hello World!';
// console.log(message.toLowerCase()); // hello world!
// console.log(message.toUpperCase()); // HELLO WORLD!

// // Застосовується для нормалізації та порівняння текстів:
// const brandName1 = 'CanDy';
// const brandName2 = 'caNdy';
// console.log(brandName1 === brandName2); // false
// console.log(brandName1.toLowerCase() === brandName2.toLowerCase()); // true

// // ❗️❗️❗️ Метод indexOf() поваертає інтдекс позіції першого збігу підрядка або -1 якщо збігу не знайдено. Регістр має значяення:
// console.log(brandName1.indexOf('c')); // -1
// console.log(brandName1.indexOf('C')); // 0
// console.log(brandName1.indexOf('Dy')); // 3
// console.log(brandName1.indexOf('dy')); // -1

// // ❗️❗️❗️ Метод lastIndexOf() поваертає інтдекс позіції останнього збігу підрядка або -1 якщо збігу не знайдено. Регістр має значяення:
// const someWord = 'banana';
// console.log(someWord.indexOf('a')); // 1
// console.log(someWord.lastIndexOf('a')); // 5
// console.log(someWord.lastIndexOf('c')); // -1

// // ❗️❗️❗️ Метод charAt() поверитає сімвол із рядка за вказаним індексом. Якщо зазнченний індекс виходить за рамки діапазону дліни рядка, то повертає порожню строку:
// const brandName1 = 'CanDy';
// console.log(brandName1.charAt(0)); // 'C'
// console.log(brandName1.charAt(7)); // ''

// // ❗️❗️❗️ Метод includes() перевіряє, чи містится зазначений підрядок в рядку. Повертае true або false. Регістра має значення:
// const brandName1 = 'CanDy';
// console.log(brandName1.includes('Dy')); // true
// console.log(brandName1.includes('dy')); // false

// // ❗️❗️❗️ Метод endsWith() дозволяє визначити, чи завершуеться рядок зазначеними символами (підрядком). Повертае true або false.Регістра має значення:
// const fileName = 'index.html';
// const fileExtension1 = '.html';
// const fileExtension2 = '.css';
// console.log(fileName.endsWith(fileExtension1)); //true
// console.log(fileName.endsWith(fileExtension2)); // false

// // ❗️❗️❗️ Метод startsWith() дозволяє визначити, чи починається рядок зазначеними символами (підрядком). Повертае true або false.Регістра має значення:
// const fileName = 'index.html';
// const fileBegin1 = 'index';
// const fileBegin2 = 'styles';
// console.log(fileName.startsWith(fileBegin1)); //true
// console.log(fileName.startsWith(fileBegin2)); // false

// // ❗️❗️❗️ Метод replace() та replaceAll() повретає новий рядок, в якому віконано заміну збігів (першого (replace) або всіх (replaceAll)) на вказане значення. Регістра має значення:
// const someWord = 'banana';
// const someWord1 = someWord.replace('a', '@');
// const someWord2 = someWord.replaceAll('a', '@');
// console.log(someWord);
// console.log(someWord1);
// console.log(someWord2);
// console.log(someWord.replace('a', '@'));

// // ❗️❗️❗️ Метод slice (atartIndex, endIndex) дозволяє створити копію частини рядка від startIndex (включно) до endIndex (не включно).
// const someWord = 'Some Word';
// console.log(someWord.slice(0, 4)); // Some
// console.log(someWord.slice(5, someWord.length)); // Word - 'length' повертає довжину рядка, та останній символ має індекс на одиницю меньший ніж довжина рядка
// console.log(someWord.slice(0, someWord.length)); // 'Some Word' - повна копія рядка
// console.log(someWord.slice(0)); // 'Some Word' - повертає все від індекса 0 до кінця
// console.log(someWord.slice(5)); // 'Word' - повертає все від індекса 5 до кінця
// console.log(someWord.slice(-4)); // 'Word' - повертає значення з кінця - від -4 індекса - до кінця рядка (відраховує з кінця)
// console.log(someWord.slice(-1)); // 'd' - останній символ рядка
// console.log(someWord.slice(-9, -3)); // 'Some W' - повертає значення від індексмів, відрахованихї з кінця (-9 - 'S', -3 - 'o', але не включно(!), тому останній символ повернутого рядка це 'W')

// // ❗️❗️❗️ Метод trim() видалє прибіли на початку та кінці строки, та повертає нову строку без початкових та кінцевих пробілів
// const sameText = '   Text   ';
// console.log(sameText.length); // 10
// console.log(sameText.trim().length); // 4
// console.log(sameText.trim()); // 'Text'

// // ❗️❗️❗️ Логічні оператори.
// // Відбувається приведення типів оаперандів до булевих значень (true або false).
// (falsy) значення, що перетворюэться на false у логічносму перетворенні при приведенні до буля:
// 0
// NaN
// null
// undefined
// порожній рядок
// false

// console.log(!!0);
// console.log(!!NaN);
// console.log(!!null);
// console.log(!!undefined);
// console.log(!!'');
// console.log(!!false);

// Абсолютно все інше приводиться до true!

// and && - повертає перший false, або останній true (толбто, зупинається на false, та повертає його значення; якщо всы операнди були приведені до true - полвертається останне значення). При використанні в одному вираженні && та || - && має приоритетність!
// or || - повертає перший true, або останній false (тобто, зупеняється на true, та повертає його значення; якщо всі операнди привдені до false, повертає останнє значення)
// console.log(null || (2 && 3) || 4); // null || 3 (при && повертається 3 - тобто останне true) || 4 --> 3 || 4 (повертає перще true) --> 3
// not ! - інвертує false в true або true в false. Використовується для роботи з розгалуженнями
// ?? оператор нудевого злиття (підрозділ логічного оператора &&). Якщо лівий операнд null або undefined - повертає правий операнд, в інших випадках повертає лівий опернд
// console.log(null ?? 1); // 1
// console.log(undefined ?? 1); // 1
// console.log(false ?? 1); // false
