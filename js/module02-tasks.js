// // 💡 Task 1
// // Запиши умову в інструкції if таким чином, щоб функція працювала правильно.
// //
// // function checkAge(age) {
// // if () { // Change this line
// //  return "You are an adult";
// // }
// // return "You are a minor";
// // }

// function checkAge(age) {
// if (age >= 18) {
//  return "You are an adult";
// }
// return "You are a minor";
// }
// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));

// // 💡 Task 2
// // ЗАДАЧА: ПЕРЕВІРКА ПАРОЛЯ (РАННЄ ПОВЕРНЕННЯ)
// // Функція checkPassword отримує пароль користувача у параметр password, перевіряє його на збіг з паролем адміністратора у змінній ADMIN_PASSWORD і повертає повідомлення про результат порівняння.
// // Виконай рефакторинг коду функції checkPassword, використовуючи патерн «раннє повернення»:
// // видали змінну message
// // видали else
// // код повинен працювати так само, як і до оптимізації

// // function checkPassword(password) {
// //   const ADMIN_PASSWORD = 'jqueryismyjam';

// //   let message;

// //   if (password === ADMIN_PASSWORD) {
// //     message = 'Welcome!';
// //   } else {
// //     message = 'Access denied, wrong password!';
// //   }

// //   return message;

// // }

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   // Change code below this line

//   if (password === ADMIN_PASSWORD) {
//     return 'Welcome!';
//   }
//     return 'Access denied, wrong password!';
//   // Change code above this line
// }

// console.log(checkPassword("mangohackzor")) //  "Access denied, wrong password!"
// console.log(checkPassword("polyhax")) //  "Access denied, wrong password!"
// console.log(checkPassword("jqueryismyjam")) //  "Welcome!"

// // 💡 Task 3
// // Функція checkStorage перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона приймає два параметри, значення яких будуть задаватися під час її виклику.

// // available - доступна кількість товарів на складі
// // ordered - кількість одиниць товару в замовленні
// // Виконай рефакторинг коду функції checkStorage, використовуючи патерн «раннє повернення».

// // function checkStorage(available, ordered) {
// //   // Change code below this line
// //   let message;

// //   if (ordered === 0) {
// //     message = 'Your order is empty!';
// //   } else if (ordered > available) {
// //     message = 'Your order is too large, not enough goods in stock!';
// //   } else {
// //     message = 'The order is accepted, our manager will contact you';
// //   }

// //   return message;
// //   // Change code above this line
// // }

// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return 'Your order is empty!';
//   }
//   if (ordered > available) {
//     return 'Your order is too large, not enough goods in stock!';
//   }
//   return 'The order is accepted, our manager will contact you';
// }

// console.log(checkStorage(100, 50)); //  "The order is accepted, our manager will contact you"
// console.log(checkStorage(100, 130)); //  "Your order is too large, not enough goods in stock!"
// console.log(checkStorage(70, 0)); //  "Your order is empty!"
// console.log(checkStorage(200, 20)); //  "The order is accepted, our manager will contact you"
// console.log(checkStorage(200, 250)); //  "Your order is too large, not enough goods in stock!"
// console.log(checkStorage(150, 0)); //  "Your order is empty!"

// // 💡 Task 4
// // Оголоси змінну fruits і присвой їй масив фруктів - рядків "apple", "plum", "pear" і "orange".
// const fruits = ['apple', 'plum', 'pear', 'orange'];
// // Значення змінної fruits - це масив ["apple", "plum", "pear", "orange"]

// // 💡 Task 5
// // Оголоси три змінні і присвой кожній з них значення, використовуючи нотацію квадратних дужок.
// // Ім'я змінної	Значення змінної
// // firstElement	перший елемент масиву
// // secondElement	другий елемент масиву
// // lastElement	останній елемент масиву
// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];

// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);

// // 💡 Task 6
// // Виконай перевизначення значення елементів з індексами 1 і 3. Заміни "plum" на "peach", а "orange" на "banana".
// // const fruits = ["apple", "plum", "pear", "orange"];

// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[1] = 'peach';
// fruits[3] = 'banana';

// console.log(fruits);

// // 💡 Task 7
// // Оголоси змінну fruitsArrayLength і присвой їй довжину масиву fruits, використовуючи властивість length.
// // const fruits = ["apple", "peach", "pear", "banana"];

// const fruits = ["apple", "peach", "pear", "banana"];
// const fruitsArrayLength = fruits.length;

// console.log(fruitsArrayLength);

// // 💡 Task 8
// // Оголоси дві зміні:
// // Ім'я змінної	Очікуване значення
// // lastElementIndex	- Індекс останнього елемента масиву fruits через довжина_масиву - 1
// // lastElement	- Значення останнього елемента масиву
// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex]

// console.log(lastElementIndex);
// console.log(lastElement);

// // 💡 Task 9
// // ЗАДАЧА: КРАЙНІ ЕЛЕМЕНТИ МАСИВУ
// // Напиши функцію getExtremeElements(array), яка приймає один параметр array - масив елементів довільної довжини. Функція повинна повертати масив з двох елементів - першого і останнього елемента параметра array.

// function getExtremeElements(array) {
//     let extremeElements = []
//         extremeElements.unshift(array[0]);
//         extremeElements.push(array[array.length - 1]);

//     return extremeElements
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5])) // [1, 5]
// console.log(getExtremeElements(["Earth", "Mars", "Venus"])) // ["Earth", "Venus"]
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"])) // ["apple", "banana"]

// // 💡 Task 10
// // Доповни код функції splitMessage(message, delimiter) таким чином, щоб вона повертала у змінній words результат поділу рядка message за роздільником delimiter - масив рядків.

// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
// words = message.split(delimiter);
//   // Change code above this line
//   return words;
// }

// console.log(splitMessage("Mango hurries to the train", " ")) // ["Mango", "hurries", "to", "the", "train"]
// console.log(splitMessage("Mango", "")) // ["M", "a", "n", "g", "o"]
// console.log(splitMessage("best_for_week", "_")) // ["best", "for", "week"]

// // 💡 Task 11
// // ЗАДАЧА: ГРАВІРУВАННЯ ПРИКРАС
// // Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування, залежно від кількості слів і ціни за слово.
// // Оголошена функція calculateEngravingPrice(message, pricePerWord). Ця функція приймає рядок, що складається зі слів, розділених лише пробілами (параметр message) та ціну гравірування одного слова (параметр pricePerWord).
// // Напиши тіло функції, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line

//     return message.split(' ').length * pricePerWord;

//    // Change code above this line
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10)) // 50
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20)) // 100
// console.log(calculateEngravingPrice("Web-development is creative work", 40)) // 160
// console.log(calculateEngravingPrice("Web-development is creative work", 20)) // 80

// // 💡 Task 12
// // Доповни код функції makeStringFromArray(array, delimiter) таким чином, щоб вона повертала у змінній string результат з'єднання елементів масиву array з роздільником delimiter - рядок.

// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line
//   string = array.join(delimiter);

//   // Change code above this line
//   return string;
// }

// console.log(
//   makeStringFromArray(['Mango', 'hurries', 'to', 'the', 'train'], ' ')
// ); // "Mango hurries to the train"
// console.log(makeStringFromArray(['M', 'a', 'n', 'g', 'o'], '')); // "Mango"
// console.log(makeStringFromArray(['top', 'picks', 'for', 'you'], '_')); // "top_picks_for_you"

// // 💡 Task 13
// // ЗАДАЧА: ГЕНЕРАТОР SLUG
// // Термін slug - це людино-зрозумілий унікальний ідентифікатор, який використовується у веб-розробці для створення читабельних URL-адрес. Slug - це завжди рядок у нижньому регістрі, слова якого розділені тире.
// // mysite.com/posts/1q8fh74tx -> mysite.com/posts/arrays-for-begginers.
// // Напиши функцію slugify(title), яка приймає заголовок статті, параметр title, і повертає slug, створений з цього рядка.
// // Значенням параметра title будуть рядки, слова яких розділені лише пробілами.
// // Усі символи slug повинні бути у нижньому регістрі.
// // Всі слова slug повинні бути розділені тире.

// function slugify(title) {
//   // Change code below this line

//   return title.split(' ').join('-').toLowerCase();

//   // Change code above this line
// }

// console.log(slugify('Arrays for begginers')); // "arrays-for-begginers"
// console.log(slugify('English for developer')); // "english-for-developer"
// console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
// console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"

// // 💡 Task 14
// // Доповни код таким чином, щоб змінні містили часткові копії вихідного масиву fruits.

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2); // масив із перших двох елементів;
// console.log(firstTwoEls);
// const nonExtremeEls = fruits.slice(1, fruits.length -1);// масив з усіх елементів, крім першого та останнього
// console.log(nonExtremeEls);
// const lastThreeEls = fruits.slice(-3); //масив з усіх елементів, крім першого та останнього
// console.log(lastThreeEls);

// // 💡 Task 15
// // Доповни код таким чином, щоб у змінній allClients утворився масив усіх елементів масивів oldClients і newClients.

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line

// console.log(oldClients);
// console.log(newClients);
// console.log(allClients);

// // 💡 Task 16
// // ЗАДАЧА: КОМПОЗИЦІЯ МАСИВІВ
// // Напиши функцію makeArray(firstArray, secondArray, maxLength) для створення нового масиву з усіма елементами двох вихідних firstArray і secondArray. Параметр maxLength містить максимально допустиму довжину нового масиву.
// // Якщо кількість елементів нового масиву більша за maxLength, функція повинна повернути копію масиву довжиною maxLength елементів. В іншому випадку функція повинна повернути новий масив повністю.
// // Виклик функції makeArray() з випадковими масивами і випадковим числом повертає правильний масив

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//     let maxlArray = firstArray.concat(secondArray);
//     let totalArray = maxlArray.slice(0, maxLength);

//   return totalArray;
//   // Change code above this line
// }

// console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // []

// // 💡 Task 17
// // Доповни цикл for таким чином, щоб він логував всі цілі числа в діапазоні від start до end включно.
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   // Change this line
//   console.log(i); // 3, 4, 5, 6, 7
// }

// // 💡 Task 18
// // ЗАДАЧА: СУМА ЧИСЕЛ (ЦИКЛ FOR)
// // Напиши функцію calculateTotal(number), яка приймає ціле число (параметр number) і повертає суму всіх цілих чисел від одиниці і до цього числа. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.
// // Виклик функції calculateTotal() з випадковим числом повертає правильне значення

// function calculateTotal(number) {
//   // Change code below this line
//   let total = 0;
//   for (let i = 0; i <= number; i += 1) {
//     total += i;
//   }
//   return total;
//   // Change code above this line
// }
// console.log(calculateTotal(1)); // 1
// console.log(calculateTotal(3)); // 6
// console.log(calculateTotal(7)); // 28
// console.log(calculateTotal(18)); // 171
// console.log(calculateTotal(24)); // 300

// // 💡 Task 19
// // Доповни код циклу for таким чином, щоб він послідовно логував усі елементи масиву fruits.

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i+=1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// // 💡 Task 20
// // ЗАДАЧА: ОБЧИСЛЕННЯ СУМИ ПОКУПКИ
// // Напиши функцію calculateTotalPrice(order), яка приймає один параметр order - масив чисел, і обчислює загальну суму його елементів.Загальна сума елементів повинна зберігатися у змінній total, яка повертається як результат роботи функції. Виклик функції calculateTotalPrice() з випадковим масивом повертає правильне значення

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); // 138
// console.log(calculateTotalPrice([164, 48, 291])); // 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116

// // 💡 Task 21
// // ЗАДАЧА: ПОШУК НАЙДОВШОГО СЛОВА
// // Напиши функцію findLongestWord(string), яка приймає довільний рядок, що складається тільки зі слів, розділених пробілом (параметр string), і повертає найдовше слово в цьому рядку. Виклик функції findLongestWord() з випадковим рядком повертає правильне значення

// function findLongestWord(string) {
//   // Change code below this line
//   const array = string.split(' ');
//   let longesstWord = array[0];
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i].length > longesstWord.length) {
//       longesstWord = array[i];
//     }
//   }
//   return longesstWord;
//   // Change code above this line
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // jumped
// console.log(findLongestWord('Google do a roll')); // Google
// console.log(findLongestWord('May the force be with you')); // force

// // 💡 Task 22
// // Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max.Виклик функції createArrayOfNumbers() з випадковими min і max повертає правильний масив.В циклі for використовувався метод push.

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//     for (let i = min; i <= max; i += 1) {
//         numbers.push(i);
//     }
//   // Change code above this line
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3)); // [1, 2, 3]
// console.log(createArrayOfNumbers(14, 17)); // [14, 15, 16, 17]
// console.log(createArrayOfNumbers(29, 34)); // [29, 30, 31, 32, 33, 34]

// // 💡 Task 23
// // ЗАДАЧА: ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ
// // Напиши функцію filterArray(numbers, value), яка приймає масив чисел (параметр numbers) і повертає новий масив, в якому будуть тільки ті елементи масиву numbers, які більші за значення параметра value (число). В циклі for використовувався метод push. Виклик функції filterArray() з випадковим масивом і числом повертає правильний масив

// function filterArray(numbers, value) {
//    // Change code below this line
//     let resultArray = [];
//     for (let i = 0; i < numbers.length; i += 1) {
//         if (numbers[i] > value) {
//             resultArray.push(numbers[i]);
//         }
//     }

//  return resultArray;
//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// // 💡 Task 24
// // Функція checkFruit(fruit) приймає рядок з назвою фрукта (параметр fruit), і перевіряє, чи присутній такий фрукт в масиві fruits.
// // Доповни код функції таким чином, що якщо: фрукт присутній в масиві, то функція повертає true; фрукт відсутній в масиві, то функція повертає false.
// // У функції використовувався метод includes. Виклик функції checkFruit() з випадковим словом повертає правильне значення boolean

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return (fruits.includes(fruit)); // Change this line
// }

// console.log(checkFruit("plum")); // true
// console.log(checkFruit("mandarin")); // false
// console.log(checkFruit("pear")); // true
// console.log(checkFruit("Pear")); // false
// console.log(checkFruit("apple")); // true

// // 💡 Task 25
// // ЗАДАЧА: СПІЛЬНІ ЕЛЕМЕНТИ
// // Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.
// // Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5, оскільки вони присутні в обох вихідних масивах. А числа 0, 1 і 8 присутні тільки в одному з масивів.
// // Напиши функцію getCommonElements(array1, array2), яка отримує два масиви довільної довжини в параметри array1 і array2, і повертає новий масив, що складається з тих елементів, які присутні в обох вихідних масивах.
// // Виклик функції getCommonElements() з випадковими двома масивами повертає правильний масив. В циклі for використовувалися методи includes і push

// function getCommonElements(array1, array2) {
//   // Change code below this line
//     let resultArray = [];
//     for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       resultArray.push(array1[i]);
//     }
//   }
// return resultArray;
//   // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 4])); // [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // [1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // [12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // [10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // []

// // 💡 Task 26
// // Виконай рефакторинг коду функції calculateTotalPrice(order), замінивши цикл for на for...of. Виклик функції calculateTotalPrice() з випадковим масивом чисел повертає правильну суму.

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

// //   for (let i = 0; i < order.length; i += 1) {
// //     total += order[i];
// //     }

//     for (const number of order) {
//         total += number
//     }

//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); // 138
// console.log(calculateTotalPrice([164, 48, 291])); // 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116
// console.log(calculateTotalPrice([])); // 0

// // 💡 Task 27
// // ЗАДАЧА: ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ 2.0
// // Виконай рефакторинг функції filterArray(numbers, value), замінивши цикл for на for...of. Виклик функції filterArray() з випадковим масивом і числом повертає правильний масив. Функція filterArray() використовує цикл for..of.

// function filterArray(numbers, value) {
//   // Change code below this line
// //   const filteredNumbers = [];

// //   for (let i = 0; i < numbers.length; i += 1) {
// //     const number = numbers[i];

// //     if (number > value) {
// //       filteredNumbers.push(number);
// //     }
// //   }
// //     return filteredNumbers;

//     const filteredNumbers = [];
//     for (const number of numbers) {
//  if (number > value) {
//       filteredNumbers.push(number);
//   }
//     }
//     return filteredNumbers;

//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// // 💡 Task 28
// // Доповни вираз остачі від ділення таким чином, щоб код проходив тести.
// // Значення змінної a - це число 0
// // Значення змінної b - це число 1
// // Значення змінної c - це число 3
// // Значення змінної d - це число 5
// // Значення змінної e - це число 2
// // const a = 3 % ;
// // const b = 4 % ;
// // const c = 11 % ;
// // const d = 12 % ;
// // const e = 8 % ;

// // Change code below this line
// const a = 3 % 3; // 0
// const b = 4 % 3; // 1
// const c = 11 % 8; // 3
// const d = 12 % 7; // 5
// const e = 8 % 6; // 2

// // 💡 Task 29
// // ЗАДАЧА: ПАРНІ ЧИСЛА
// // Напиши функцію getEvenNumbers(start, end), яка повертає масив усіх парних чисел від start до end. Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0). Виклик функції getEvenNumbers() з випадковими start і end повертає правильний масив

// function getEvenNumbers(start, end) {
//    // Change code below this line
// // оголошуємо результуючий масив
//     let resultArray = []

// // перебираємо всі числа та шукаємо парне
//     for (let i = start; i <= end; i += 1) {
//         if (i % 2 === 0) {
// // якщо знайшли - додаємо в результуючий масив
//             resultArray.push(i);
//         }
//     }
// // повертаемо рез
// return resultArray;
//     // Change code above this line
// }

// console.log(getEvenNumbers(2, 5)); // [2, 4]
// console.log(getEvenNumbers(3, 11)); // [4, 6, 8, 10]
// console.log(getEvenNumbers(6, 12)); // [6, 8, 10, 12]
// console.log(getEvenNumbers(8, 8)); // [8]
// console.log(getEvenNumbers(7, 7)); // []

// // 💡 Task 30
// // Доповни код таким чином, щоб у змінну number записувалося перше число від start до end, яке ділиться на 5 без остачі. В циклі for використовується break для виходу до завершення усіх ітерацій циклу

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//       number = i;
//       break // додано
//   }
// }
// console.log(number)

// // Оголошена змінна start зі значенням 6
// // Оголошена змінна end зі значенням 27
// // Оголошена змінна number без ініціалізації
// // Підсумкове значення змінної number дорівнює 10

// // 💡 Task 31
// // Виконай рефакторинг функції findNumber(start, end, divisor) таким чином, щоб вона:
// // повертала перше число від start до end, яке ділиться на divisor без остачі
// // не використала оператор break
// // не використала змінну number
// // Виклик findNumber() з випадковим набором чисел повертає правильний результат
// // В циклі for не повинен використовуватися break для виходу до завершення всіх ітерацій циклу

// // function findNumber(start, end, divisor) {
// //   // Change code below this line
// //   let number;

// //   for (let i = start; i < end; i += 1) {
// //     if (i % divisor === 0) {
// //       number = i;
// //       break;
// //     }
// //   }

// //   return number;
// //   // Change code above this line
// // }

// function findNumber(start, end, divisor) {
//   // Change code below this line
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }

//   // Change code above this line
// }

// console.log(findNumber(2, 6, 5)); // 5
// console.log(findNumber(8, 17, 3)); // 9
// console.log(findNumber(6, 9, 4)); // 8
// console.log(findNumber(16, 35, 7)); // 21

// // 💡 Task 32
// // ЗАДАЧА: ФУНКЦІЯ INCLUDES()
// // Напиши функцію includes(array, value), яка робить те саме, що і метод масиву масив.includes(значення) - перевіряє, чи присутнє в масиві array значення value, повертаючи true, якщо присутнє, і false в іншому випадку.
// // При виконанні цього завдання в тілі функції includes() не можна використовувати метод масив.includes(значення).
// // Виклик includes() для випадкового масиву з випадковим value повертає правильний boolean
// // У функції includes використовується for, return, але не метод масиву includes

// function includes(array, value) {
//   //     шукаємо індекс шукаємого в масиві
//   //     якщо = 0 - він є
//   // якщо число від 1 та вище - є
//   //     якщо -1 - немає
//   for (const items of array) {
//     if (array.indexOf(value) === -1) {
//       return false;
//     } else {
//         return true
//     }
//   }
// }

// console.log(includes([1, 2, 3, 4, 5], 3)); // true
// console.log(includes([1, 2, 3, 4, 5], 17)); // false
// console.log(
//   includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter')
// ); // true
// console.log(
//   includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Uranus')
// ); // false
// console.log(includes(['apple', 'plum', 'pear', 'orange'], 'plum')); // true
// console.log(includes(['apple', 'plum', 'pear', 'orange'], 'kiwi')); // false

// // 📜📜📜 Практика

// // 📜 1
// // Напиши скрипт, який порівняє два масива і виведе у консоль результат чи усі елементи у них однакові
// const arr1 = [1, 4, 6, 'color', 324, 232, 'list', 11, 9, 'dream', 34, 0, -30];
// const arr2 = [6, 'dream', -30, 11, 9, 1, 324, 34, 'color', 4, 232, 0, 'list'];

// const arr3 = [4, 232, 6, -30, 'color', 324, 'list', 1, 11, 9, 'dream', 34, 0];
// const arr4 = ['color', 6, -30, 11, 9, 1, 'dream', 324, 34, 4, 232, 0, 'list'];

// const arr5 = [1, 4, 6, 'color', 'list', 11, 9, 'dream', 34, 0, -30, 'lesson'];
// const arr6 = [6, 324, 'dream', -30, 9, 8, 34, 'color', 4, 232, 0, 'list', 11];

// const arr7 = [1, 4, 6, 'color', 324, 232, 'list', 11, 9, 'dream', 34, 0, -30];
// const arr8 = [6, 'dream', -30, 10, 9, 1, 324, 34, 'color', 4, 232, 0, 'list'];

// const arr9 = [4, 6, 'color', 324, 232, 'list', 11, 9, 'dream', 34, 0, -30];
// const arr0 = [6, 'dream', -30, 11, 9, 1, 324, 34, 'color', 4, 232, 0, 'list'];

// function compareArrs(array1, array2) {
//   if (array1.length !== array2.length) {
//     return false;
//   } else {
//     for (const elem1 of array1) {
//       if (!array2.includes(elem1)) {
//         return false;
//       }
//     }
//   }
//   return true;
// }
// console.log(compareArrs(arr1, arr2));
// console.log(compareArrs(arr3, arr4));
// console.log(compareArrs(arr5, arr6));
// console.log(compareArrs(arr7, arr8));
// console.log(compareArrs(arr9, arr0));

// // 📜 2
// // Напишіть функцію calculateAverage(), яка приймає довільну кількість аргументів і повертає їхне середне значення.Додати перевірку, що аргументи це числа.

// function calculateAverage() {
//   let total = 0;
//   let i = 0;
//   const arr = [];
//   for (const elem of Array.from(arguments)) {
//     if (Number.isNaN(Number(elem))) {
//     } else {
//       total += elem;
//       i += 1;
//     }
//   }
//   return total / i;
// }

// console.log(calculateAverage(1, 2, 3, 4, 'g', 5));

// // 📜 3
// // Написати функцію, котра отримує рядок. За допомогою циклу for потрібно виконати підрахунок кільекості символі в рядку
// function countSymbols(someString) {
//   console.log(someString.length);
// }
// countSymbols('efg;EG;gj a;OGEOG;')

// // 📜 4
// // Напишить скрипт, який отримає від користувача число(кількість хвилин) і виведе в консоль у іормати годин хвилин.Тобто, якщо користувачя вказав число 70, в консолі отримаємо "01:10"

// function setTime() {
//   const value = prompt('enter minutes');
//   let hours = 0;
//   let minutes = 0;

//   if (Number.isNaN(Number(value))) {
//     alert(`${value} not a number`);
//   } else {
//     hours = String(Math.floor(value / 60)).padStart(2,0);
//     // if (hours< 10) {
//     //   hours = '0' + hours;
//     // }
//     minutes = String(value % 60).padStart(2, 0);
//     //  if (minutes < 10) {
//     //    minutes = '0' + minutes;
//     //  }
//     console.log(`${hours}:${minutes}`);
//   }
// }

// setTime();
