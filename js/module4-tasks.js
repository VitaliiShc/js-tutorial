// // 💡 Task 01
// // Доповни код таким чином, щоб у змінній result був результат виконання функції makePizza, а у змінній pointer було посилання на функцію makePizza.

// function makePizza() {
//   return 'Your pizza is being prepared, please wait.';
// }
// // Change code below this line

// const result = makePizza();
// const pointer = makePizza;

// console.log(result);
// console.log(pointer);

// // 💡 Task 02
// // Доповни функцію makeMessage таким чином, щоб вона очікувала другим параметром (параметр callback) колбек-функцію і повертала її виклик. Функція deliverPizza або makePizza буде передаватися як колбек і очікувати аргументом ім'я готової піци, що доставляється.

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// console.log(makeMessage('Royal Grand', makePizza)); // "Pizza Royal Grand is being prepared, please wait..."
// console.log(makeMessage('Ultracheese', deliverPizza)); //  "Delivering Ultracheese pizza."

// // 💡 Task 03
// // Доповни другий виклик функції makePizza(pizzaName, callback), передавши другим аргументом інлайн колбек-функцію eatPizza(pizzaName), яка логує рядок "Eating pizza <назва піци>".

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza('Royal Grand', function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza('Ultracheese', function eatPizza(pizzaName) {
//     console.log(`Eating pizza ${pizzaName}`);
// });

// // 💡 Task 04
// // Необхідно написати логіку обробки замовлення піци. Виконай рефакторинг методу order таким чином, щоб він приймав другим і третім параметром два колбеки onSuccess і onError.
// // Якщо у властивості pizzas відсутня піца з назвою з параметра pizzaName, метод order повинен повертати результат виклику колбека onError, передаючи йому аргументом рядок "There is no pizza with a name <имя пиццы> in the assortment."
// // Якщо у властивості pizzas присутня піца з назвою з параметра pizzaName, метод order повинен повертати результат виклику колбека onSuccess, передаючи йому аргументом назву замовленої піци.
// // Після оголошення об'єкта pizzaPalace ми додали колбеки і виклики методів. Будь ласка, нічого там не міняй.

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, makePizza, onOrderError) {
//     if (this.pizzas.includes(pizzaName)) {
//           return makePizza(pizzaName);
//     }
//         return onOrderError(
//       `There is no pizza with a name ${pizzaName} in the assortment.`
//     );
//   },
// };

// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);

// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError)); // "Your order is accepted. Cooking pizza Smoked."
// console.log(pizzaPalace.order('Four meats', makePizza, onOrderError)); // "Your order is accepted. Cooking pizza Four meats."
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError)); // "Error! There is no pizza with a name Big Mike in the assortment."
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError)); // "Error! There is no pizza with a name Vienna in the assortment."

// // 💡 Task 05
// // Функція calculateTotalPrice(orderedItems) приймає один параметр orderedItems - масив чисел, і розраховує загальну суму його елементів, яка зберігається у змінній totalPrice і повертається як результат роботи функції.
// // Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line
//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });

//   // for (let i = 0; i < orderedItems.length; i += 1) {
//   //   totalPrice += orderedItems[i];
//   // }

//   // Change code above this line
//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); // 138
// console.log(calculateTotalPrice([164, 48, 291])); // 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116

// //  💡 Task 06
// // ЗАДАЧА. ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ
// // Функція filterArray(numbers, value) приймає масив чисел numbers і повертає новий масив, в якому будуть тільки ті елементи оригінального масиву, які більші за значення параметра value.
// // Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   //   }
//   // }

// numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
// });

//   // Change code above this line
//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// // 💡 Task 07
// // ЗАДАЧА. СПІЛЬНІ ЕЛЕМЕНТИ
// // Функція getCommonElements(firstArray, secondArray) приймає два масиви довільної довжини в параметри firstArray і secondArray, і повертає новий масив їхніх спільних елементів, тобто тих, які присутні в обох масивах.
// // Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }

//   firstArray.forEach(function (number) {
//     if (secondArray.includes(number)) {
//       commonElements.push(number);
//     }
//   });
//   return commonElements;
//   // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 4])); // [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // [1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // [12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // [10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // []

// // 💡 Task 08
// // Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона була оголошена як стрілочна.

// // Change code below this line

// // function calculateTotalPrice(quantity, pricePerItem) {

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Change code above this line
//   return quantity * pricePerItem;
// };

// console.log(calculateTotalPrice(5, 100)); // 500
// console.log(calculateTotalPrice(8, 60)); // 480
// console.log(calculateTotalPrice(3, 400)); // 1200

// // 💡 Task 09
// // Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона використовувала неявне повернення.

// // Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// // Change code above this line

// console.log(calculateTotalPrice(5, 100)); // 500
// console.log(calculateTotalPrice(8, 60)); // 480
// console.log(calculateTotalPrice(3, 400)); // 1200

// // 💡 Task 10
// // Виконай рефакторинг функції calculateTotalPrice(orderedItems), замінивши її оголошення на стрілочну функцію. Заміни колбек-функцію, передану в метод forEach(), на стрілочну функцію.

// // Change code below this line
// // function calculateTotalPrice(orderedItems) {
// //   let totalPrice = 0;

// //   orderedItems.forEach(function (item) {
// //     totalPrice += item;
// //   });

// //   return totalPrice;
// // }

// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;

//   orderedItems.forEach(item => (totalPrice += item));

//   return totalPrice;
// };

// // Change code above this line

// console.log(calculateTotalPrice([12, 85, 37, 4])); // 138
// console.log(calculateTotalPrice([164, 48, 291])); // 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116

// // 💡 Task 11
// // ЗАДАЧА. ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ 2.0
// // Заміни оголошення функції filterArray() і колбек для методу forEach() на стрілочні функції.

// // Change code below this line
// // function filterArray(numbers, value) {
// //   const filteredNumbers = [];

// //   numbers.forEach(function (number) {
// //     if (number > value) {
// //       filteredNumbers.push(number);
// //     }
// //   });

// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// };

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// // 💡 Task 12
// // ЗАДАЧА. СПІЛЬНІ ЕЛЕМЕНТИ 2.0
// // Заміни оголошення функції getCommonElements() і колбек для методу forEach() на стрілочні функції.

// // Change code below this line
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach(element => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Change code above this line
//   return commonElements;
// };

// console.log(getCommonElements([1, 2, 3], [2, 4])); // [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // [1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // [12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // [10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // []

// // 💡 Task 13
// // Функція changeEven(numbers, value) приймає масив чисел numbers і оновлює кожен елемент, значення якого - це парне число, додаючи до нього значення параметра value.
// // Виконай рефакторинг функції таким чином, щоб вона стала чистою - не змінювала масив чисел numbers, а створювала, наповнювала і повертала новий масив з оновленими значеннями.

// function changeEven(numbers, value) {
//   // Change code below this line
//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] % 2 === 0) {
//   //     numbers[i] = numbers[i] + value;
//   //   }
//   // }
//   const newChangeEven = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       newChangeEven.push(numbers[i] + value);

//     } else {
//       newChangeEven.push(numbers[i]);
//     }
//   }
//   return newChangeEven;
//   // Change code above this line
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10)); // [1, 12, 3, 14, 5]
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); // [12, 18, 3, 7, 14, 16]
// console.log(changeEven([17, 24, 68, 31, 42], 100)); // [17, 124, 168, 31, 142]
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100)); // [144, 13, 81, 192, 136, 154]

// // 💡 Task 14
// // Доповни код таким чином, щоб у змінній planetsLengths вийшов масив довжин назв планет. Обов'язково використовуй метод map().

// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];
// // Change code below this line
// // const planetsLengths = planets;
// const planetsLengths = planets.map(planet => planet.length);

// console.log(planetsLengths); // [5, 4, 5, 7]
// console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter']

// // 💡 Task 15
// // Використовуючи метод map(), зроби так, щоб у змінній titles вийшов масив назв книг (властивість title) з усіх об'єктів масиву books.

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];
// // Change code below this line
// // const titles = books;
// const titles = books.map(book => book.title);

// console.log(titles); // ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man", "Redder Than Blood", "Enemy of God"]

// // 💡 Task 16
// // Використовуючи метод flatMap(), зроби так, щоб у змінній genres вийшов масив усіх жанрів книг (властивість genres) з масиву книг books.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line
// // const genres = books;
// const genres = books.flatMap(book => book.genres);

// console.log(genres); // [ "adventure", "history", "fiction", "horror", "mysticism" ]

// // 💡 Task 17
// // Доповни функцію getUserNames(users) таким чином, щоб вона повертала масив імен користувачів (властивість name) з масиву об'єктів в параметрі users.
// // Змінній getUserNames присвоєна стрілочна функція з параметром (users).
// // Для перебирання параметра users використовується метод map()

// // Change code below this line
// // const getUserNames = users => {
// //       };

// const getUserNames = users => users.map(user => user.name);

// // Change code above this line

// console.log(
//   getUserNames([
//     {
//       name: 'Moore Hensley',
//       email: 'moorehensley@indexia.com',
//       eyeColor: 'blue',
//       friends: ['Sharron Pace'],
//       isActive: false,
//       balance: 2811,
//       skills: ['ipsum', 'lorem'],
//       gender: 'male',
//       age: 37,
//     },
//     {
//       name: 'Sharlene Bush',
//       email: 'sharlenebush@tubesys.com',
//       eyeColor: 'blue',
//       friends: ['Briana Decker', 'Sharron Pace'],
//       isActive: true,
//       balance: 3821,
//       skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//       gender: 'female',
//       age: 34,
//     },
//     {
//       name: 'Ross Vazquez',
//       email: 'rossvazquez@xinware.com',
//       eyeColor: 'green',
//       friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//       isActive: false,
//       balance: 3793,
//       skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//       gender: 'male',
//       age: 24,
//     },
//     {
//       name: 'Elma Head',
//       email: 'elmahead@omatom.com',
//       eyeColor: 'green',
//       friends: ['Goldie Gentry', 'Aisha Tran'],
//       isActive: true,
//       balance: 2278,
//       skills: ['adipisicing', 'irure', 'velit'],
//       gender: 'female',
//       age: 21,
//     },
//     {
//       name: 'Carey Barr',
//       email: 'careybarr@nurali.com',
//       eyeColor: 'blue',
//       friends: ['Jordan Sampson', 'Eddie Strong'],
//       isActive: true,
//       balance: 3951,
//       skills: ['ex', 'culpa', 'nostrud'],
//       gender: 'male',
//       age: 27,
//     },
//     {
//       name: 'Blackburn Dotson',
//       email: 'blackburndotson@furnigeer.com',
//       eyeColor: 'brown',
//       friends: ['Jacklyn Lucas', 'Linda Chapman'],
//       isActive: false,
//       balance: 1498,
//       skills: ['non', 'amet', 'ipsum'],
//       gender: 'male',
//       age: 38,
//     },
//     {
//       name: 'Sheree Anthony',
//       email: 'shereeanthony@kog.com',
//       eyeColor: 'brown',
//       friends: ['Goldie Gentry', 'Briana Decker'],
//       isActive: true,
//       balance: 2764,
//       skills: ['lorem', 'veniam', 'culpa'],
//       gender: 'female',
//       age: 39,
//     },
//   ])
// ); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]

// // 💡 Task 18
// // Доповни функцію getUserEmails(users) таким чином, щоб вона повертала масив поштових адрес користувачів (властивість email) з масиву об'єктів в параметрі users.

// // Change code below this line
// // const getUserEmails = users => { };

// const getUserEmails = users => users.map(user => user.email);
// // Change code above this line

// console.log(
//   getUserEmails([
//     {
//       name: 'Moore Hensley',
//       email: 'moorehensley@indexia.com',
//       eyeColor: 'blue',
//       friends: ['Sharron Pace'],
//       isActive: false,
//       balance: 2811,
//       skills: ['ipsum', 'lorem'],
//       gender: 'male',
//       age: 37,
//     },
//     {
//       name: 'Sharlene Bush',
//       email: 'sharlenebush@tubesys.com',
//       eyeColor: 'blue',
//       friends: ['Briana Decker', 'Sharron Pace'],
//       isActive: true,
//       balance: 3821,
//       skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//       gender: 'female',
//       age: 34,
//     },
//     {
//       name: 'Ross Vazquez',
//       email: 'rossvazquez@xinware.com',
//       eyeColor: 'green',
//       friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//       isActive: false,
//       balance: 3793,
//       skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//       gender: 'male',
//       age: 24,
//     },
//     {
//       name: 'Elma Head',
//       email: 'elmahead@omatom.com',
//       eyeColor: 'green',
//       friends: ['Goldie Gentry', 'Aisha Tran'],
//       isActive: true,
//       balance: 2278,
//       skills: ['adipisicing', 'irure', 'velit'],
//       gender: 'female',
//       age: 21,
//     },
//     {
//       name: 'Carey Barr',
//       email: 'careybarr@nurali.com',
//       eyeColor: 'blue',
//       friends: ['Jordan Sampson', 'Eddie Strong'],
//       isActive: true,
//       balance: 3951,
//       skills: ['ex', 'culpa', 'nostrud'],
//       gender: 'male',
//       age: 27,
//     },
//     {
//       name: 'Blackburn Dotson',
//       email: 'blackburndotson@furnigeer.com',
//       eyeColor: 'brown',
//       friends: ['Jacklyn Lucas', 'Linda Chapman'],
//       isActive: false,
//       balance: 1498,
//       skills: ['non', 'amet', 'ipsum'],
//       gender: 'male',
//       age: 38,
//     },
//     {
//       name: 'Sheree Anthony',
//       email: 'shereeanthony@kog.com',
//       eyeColor: 'brown',
//       friends: ['Goldie Gentry', 'Briana Decker'],
//       isActive: true,
//       balance: 2764,
//       skills: ['lorem', 'veniam', 'culpa'],
//       gender: 'female',
//       age: 39,
//     },
//   ])
// ); // ["moorehensley@indexia.com", "sharlenebush@tubesys.com", "rossvazquez@xinware.com", "elmahead@omatom.com", "careybarr@nurali.com", "blackburndotson@furnigeer.com", "shereeanthony@kog.com"]

// // 💡 Task  19
// // Доповни код таким чином, щоб у змінній evenNumbers утворився масив парних чисел з масиву numbers, а в змінній oddNumbers - масив непарних. Обов'язково використовуй метод filter().

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// // const evenNumbers = numbers;
// // const oddNumbers = numbers;

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => !(number % 2 === 0));;

// console.log(numbers); // [17, 24, 82, 61, 36, 18, 47, 52, 73]
// console.log(evenNumbers); // [24, 82, 36, 18, 52]
// console.log(oddNumbers); // [17, 61, 47, 73]

// // 💡 Task 20
// // Доповни код таким чином, щоб у змінній allGenres був масив всіх жанрів книг (властивість genres) з масиву books, а у змінній uniqueGenres - масив унікальних жанрів, без повторень.
// // Для обчислення значення змінної allGenders використаний метод flatMap()
// // Для обчислення значення змінної uniqueGenres використаний метод filter()

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction', 'mysticism'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism', 'adventure'],
//   },
// ];
// // Change code below this line
// // const allGenres = books;
// // const uniqueGenres = allGenres;

// const allGenres = books.flatMap(book => book.genres);

// const uniqueGenres = allGenres.filter((genres, idx, array) => array.indexOf(genres)===idx);

// console.log(allGenres); // ["adventure", "history", "fiction", "mysticism", "horror", "mysticism", "adventure"]

// console.log(uniqueGenres); // ["adventure", "history", "fiction", "mysticism", "horror"]

// // 💡 Task 21
// // Використовуючи метод filter(), доповни код таким чином, щоб:

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// // const topRatedBooks = books;
// // const booksByAuthor = books;

// const topRatedBooks = books.filter(book => book.rating > MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// console.log(topRatedBooks); // масив книг з рейтингом, вищим за 8
// console.log(booksByAuthor); // масив книг, автор яких "Bernard Cornwell"

// // 💡 Task 22
// // Доповни функцію getUsersWithEyeColor(users, color) таким чином, щоб вона повертала масив користувачів, у яких колір очей(властивість eyeColor) збігається зі значенням параметра color.
// // Змінній getUsersWithEyeColor присвоєна стрілочна функція з параметрами (users, color)
// // Для перебирання параметра users використовується метод filter()

// // Change code below this line
// // const getUsersWithEyeColor = (users, color) => {};

// const getUsersWithEyeColor = (users, color) =>
//   users.filter(user => user.eyeColor === color);
// ;

// // Change code above this line

// console.log(
//   getUsersWithEyeColor(
//     [
//       {
//         name: 'Moore Hensley',
//         email: 'moorehensley@indexia.com',
//         eyeColor: 'blue',
//         friends: ['Sharron Pace'],
//         isActive: false,
//         balance: 2811,
//         gender: 'male',
//       },
//       {
//         name: 'Sharlene Bush',
//         email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue',
//         friends: ['Briana Decker', 'Sharron Pace'],
//         isActive: true,
//         balance: 3821,
//         gender: 'female',
//       },
//       {
//         name: 'Ross Vazquez',
//         email: 'rossvazquez@xinware.com',
//         eyeColor: 'green',
//         friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//         isActive: false,
//         balance: 3793,
//         gender: 'male',
//       },
//       {
//         name: 'Elma Head',
//         email: 'elmahead@omatom.com',
//         eyeColor: 'green',
//         friends: ['Goldie Gentry', 'Aisha Tran'],
//         isActive: true,
//         balance: 2278,
//         gender: 'female',
//       },
//       {
//         name: 'Carey Barr',
//         email: 'careybarr@nurali.com',
//         eyeColor: 'blue',
//         friends: ['Jordan Sampson', 'Eddie Strong'],
//         isActive: true,
//         balance: 3951,
//         gender: 'male',
//       },
//       {
//         name: 'Blackburn Dotson',
//         email: 'blackburndotson@furnigeer.com',
//         eyeColor: 'brown',
//         friends: ['Jacklyn Lucas', 'Linda Chapman'],
//         isActive: false,
//         balance: 1498,
//         gender: 'male',
//       },
//       {
//         name: 'Sheree Anthony',
//         email: 'shereeanthony@kog.com',
//         eyeColor: 'brown',
//         friends: ['Goldie Gentry', 'Briana Decker'],
//         isActive: true,
//         balance: 2764,
//         gender: 'female',
//       },
//     ],
//     'brown'
//   )
// );

// // 💡 Task 23
// // Доповни функцію getUsersWithAge(users, minAge, maxAge) таким чином, щоб вона повертала масив користувачів, вік яких (властивість age) потрапляє у проміжок від minAge до maxAge.
// // Для перебирання параметра users використовується метод filter()

// // Change code below this line
// // const getUsersWithAge = (users, minAge, maxAge) => {};

// const getUsersWithAge = (users, minAge, maxAge) =>
//   users.filter(user => user.age > minAge && user.age < maxAge);
// // Change code above this line

// console.log(
//   getUsersWithAge(
//     [
//       {
//         name: 'Moore Hensley',
//         email: 'moorehensley@indexia.com',
//         eyeColor: 'blue',
//         friends: ['Sharron Pace'],
//         isActive: false,
//         balance: 2811,
//         gender: 'male',
//         age: 37,
//       },
//       {
//         name: 'Sharlene Bush',
//         email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue',
//         friends: ['Briana Decker', 'Sharron Pace'],
//         isActive: true,
//         balance: 3821,
//         gender: 'female',
//         age: 34,
//       },
//       {
//         name: 'Ross Vazquez',
//         email: 'rossvazquez@xinware.com',
//         eyeColor: 'green',
//         friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//         isActive: false,
//         balance: 3793,
//         gender: 'male',
//         age: 24,
//       },
//       {
//         name: 'Elma Head',
//         email: 'elmahead@omatom.com',
//         eyeColor: 'green',
//         friends: ['Goldie Gentry', 'Aisha Tran'],
//         isActive: true,
//         balance: 2278,
//         gender: 'female',
//         age: 21,
//       },
//       {
//         name: 'Carey Barr',
//         email: 'careybarr@nurali.com',
//         eyeColor: 'blue',
//         friends: ['Jordan Sampson', 'Eddie Strong'],
//         isActive: true,
//         balance: 3951,
//         gender: 'male',
//         age: 27,
//       },
//       {
//         name: 'Blackburn Dotson',
//         email: 'blackburndotson@furnigeer.com',
//         eyeColor: 'brown',
//         friends: ['Jacklyn Lucas', 'Linda Chapman'],
//         isActive: false,
//         balance: 1498,
//         gender: 'male',
//         age: 38,
//       },
//       {
//         name: 'Sheree Anthony',
//         email: 'shereeanthony@kog.com',
//         eyeColor: 'brown',
//         friends: ['Goldie Gentry', 'Briana Decker'],
//         isActive: true,
//         balance: 2764,
//         gender: 'female',
//         age: 39,
//       },
//     ],
//     80,
//     100
//   )
// ); // 20 і 30 (Ross Vazquez, Elma Head і Carey Barr) ; 30 і 40 (Moore Hensley, Sharlene Bush, Blackburn Dotson, Sheree Anthony) ; 80 і 100 ( [] )

// // 💡 Task 24
// // Доповни функцію getUsersWithFriend(users, friendName) таким чином, щоб вона повертала масив користувачів, у яких є один з ім'ям в параметрі friendName. Масив друзів користувача зберігається у властивості friends.
// // Для перебирання параметра users використовується метод filter()

// // Change code below this line
// // const getUsersWithFriend = (users, friendName) => {};

// const getUsersWithFriend = (users, friendName) =>
//   users.filter(user => user.friends.includes(friendName));

// // Change code above this line

// console.log(
//   getUsersWithFriend(
//     [
//       {
//         name: 'Moore Hensley',
//         email: 'moorehensley@indexia.com',
//         eyeColor: 'blue',
//         friends: ['Sharron Pace'],
//         isActive: false,
//         balance: 2811,
//         gender: 'male',
//         age: 37,
//       },
//       {
//         name: 'Sharlene Bush',
//         email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue',
//         friends: ['Briana Decker', 'Sharron Pace'],
//         isActive: true,
//         balance: 3821,
//         gender: 'female',
//         age: 34,
//       },
//       {
//         name: 'Ross Vazquez',
//         email: 'rossvazquez@xinware.com',
//         eyeColor: 'green',
//         friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//         isActive: false,
//         balance: 3793,
//         gender: 'male',
//         age: 24,
//       },
//       {
//         name: 'Elma Head',
//         email: 'elmahead@omatom.com',
//         eyeColor: 'green',
//         friends: ['Goldie Gentry', 'Aisha Tran'],
//         isActive: true,
//         balance: 2278,
//         gender: 'female',
//         age: 21,
//       },
//       {
//         name: 'Carey Barr',
//         email: 'careybarr@nurali.com',
//         eyeColor: 'blue',
//         friends: ['Jordan Sampson', 'Eddie Strong'],
//         isActive: true,
//         balance: 3951,
//         gender: 'male',
//         age: 27,
//       },
//       {
//         name: 'Blackburn Dotson',
//         email: 'blackburndotson@furnigeer.com',
//         eyeColor: 'brown',
//         friends: ['Jacklyn Lucas', 'Linda Chapman'],
//         isActive: false,
//         balance: 1498,
//         gender: 'male',
//         age: 38,
//       },
//       {
//         name: 'Sheree Anthony',
//         email: 'shereeanthony@kog.com',
//         eyeColor: 'brown',
//         friends: ['Goldie Gentry', 'Briana Decker'],
//         isActive: true,
//         balance: 2764,
//         gender: 'female',
//         age: 39,
//       },
//     ],
//     'Briana Decker'
//   )
// );
// // use as friendName: "Briana Decker" (Sharlene Bush, Sheree Anthony), "Goldie Gentry" (Elma Head, Sheree Anthony), "Adrian Cross" ()

// // 💡 Task 25
// // Доповни функцію getFriends(users) таким чином, щоб вона повертала масив друзів всіх користувачів (властивість friends). У декількох користувачів можуть бути однакові друзі, зроби так, щоб масив, що повертається, не містив повторень.

// // Change code below this line
// // const getFriends = (users) => {};

// const getFriends = users =>
//   users
//     .flatMap(user => user.friends)
//     .filter((friend, idx, array) => array.indexOf(friend) === idx);

// // Change code above this line

// console.log(
//   getFriends([
//     {
//       name: 'Moore Hensley',
//       email: 'moorehensley@indexia.com',
//       eyeColor: 'blue',
//       friends: ['Sharron Pace'],
//       isActive: false,
//       balance: 2811,
//       gender: 'male',
//       age: 37,
//     },
//     {
//       name: 'Sharlene Bush',
//       email: 'sharlenebush@tubesys.com',
//       eyeColor: 'blue',
//       friends: ['Briana Decker', 'Sharron Pace'],
//       isActive: true,
//       balance: 3821,
//       gender: 'female',
//       age: 34,
//     },
//     {
//       name: 'Ross Vazquez',
//       email: 'rossvazquez@xinware.com',
//       eyeColor: 'green',
//       friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//       isActive: false,
//       balance: 3793,
//       gender: 'male',
//       age: 24,
//     },
//     {
//       name: 'Elma Head',
//       email: 'elmahead@omatom.com',
//       eyeColor: 'green',
//       friends: ['Goldie Gentry', 'Aisha Tran'],
//       isActive: true,
//       balance: 2278,
//       gender: 'female',
//       age: 21,
//     },
//     {
//       name: 'Carey Barr',
//       email: 'careybarr@nurali.com',
//       eyeColor: 'blue',
//       friends: ['Jordan Sampson', 'Eddie Strong'],
//       isActive: true,
//       balance: 3951,
//       gender: 'male',
//       age: 27,
//     },
//     {
//       name: 'Blackburn Dotson',
//       email: 'blackburndotson@furnigeer.com',
//       eyeColor: 'brown',
//       friends: ['Jacklyn Lucas', 'Linda Chapman'],
//       isActive: false,
//       balance: 1498,
//       gender: 'male',
//       age: 38,
//     },
//     {
//       name: 'Sheree Anthony',
//       email: 'shereeanthony@kog.com',
//       eyeColor: 'brown',
//       friends: ['Goldie Gentry', 'Briana Decker'],
//       isActive: true,
//       balance: 2764,
//       gender: 'female',
//       age: 39,
//     },
//   ])
// ); // ["Sharron Pace", "Briana Decker", "Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner", "Goldie Gentry", "Aisha Tran", "Jordan Sampson", "Eddie Strong", "Jacklyn Lucas", "Linda Chapman"]

// // 💡 Task 26
// // Доповни функцію getActiveUsers(users) таким чином, щоб вона повертала масив активних користувачів, значення властивості isActive яких - true. Для перебирання параметра users використовується метод filter().

// // Change code below this line
// // const getActiveUsers = (users) => {};

// const getActiveUsers = users => users.filter((user) => user.isActive)

// // Change code above this line

// console.log(
//   getActiveUsers([
//     {
//       name: 'Moore Hensley',
//       email: 'moorehensley@indexia.com',
//       eyeColor: 'blue',
//       friends: ['Sharron Pace'],
//       isActive: false,
//       balance: 2811,
//       gender: 'male',
//       age: 37,
//     },
//     {
//       name: 'Sharlene Bush',
//       email: 'sharlenebush@tubesys.com',
//       eyeColor: 'blue',
//       friends: ['Briana Decker', 'Sharron Pace'],
//       isActive: true,
//       balance: 3821,
//       gender: 'female',
//       age: 34,
//     },
//     {
//       name: 'Ross Vazquez',
//       email: 'rossvazquez@xinware.com',
//       eyeColor: 'green',
//       friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//       isActive: false,
//       balance: 3793,
//       gender: 'male',
//       age: 24,
//     },
//     {
//       name: 'Elma Head',
//       email: 'elmahead@omatom.com',
//       eyeColor: 'green',
//       friends: ['Goldie Gentry', 'Aisha Tran'],
//       isActive: true,
//       balance: 2278,
//       gender: 'female',
//       age: 21,
//     },
//     {
//       name: 'Carey Barr',
//       email: 'careybarr@nurali.com',
//       eyeColor: 'blue',
//       friends: ['Jordan Sampson', 'Eddie Strong'],
//       isActive: true,
//       balance: 3951,
//       gender: 'male',
//       age: 27,
//     },
//     {
//       name: 'Blackburn Dotson',
//       email: 'blackburndotson@furnigeer.com',
//       eyeColor: 'brown',
//       friends: ['Jacklyn Lucas', 'Linda Chapman'],
//       isActive: false,
//       balance: 1498,
//       gender: 'male',
//       age: 38,
//     },
//     {
//       name: 'Sheree Anthony',
//       email: 'shereeanthony@kog.com',
//       eyeColor: 'brown',
//       friends: ['Goldie Gentry', 'Briana Decker'],
//       isActive: true,
//       balance: 2764,
//       gender: 'female',
//       age: 39,
//     },
//   ])
// ); // масив об'єктів користувачів з іменами Sharlene Bush, Elma Head, Carey Barr і Sheree Anthony

// // 💡 Task 27
// // Доповни функцію getInactiveUsers(users) таким чином, щоб вона повертала масив неактивних користувачів, значення властивості isActive яких - false.
// // Для перебирання параметра users використовується метод filter()

// // Change code below this line
// // const getInactiveUsers = (users) => {};

// const getInactiveUsers = users => users.filter(user => !(user.isActive));

// // Change code above this line

// console.log(
//   getInactiveUsers([
//     {
//       name: 'Moore Hensley',
//       email: 'moorehensley@indexia.com',
//       eyeColor: 'blue',
//       friends: ['Sharron Pace'],
//       isActive: false,
//       balance: 2811,
//       gender: 'male',
//       age: 37,
//     },
//     {
//       name: 'Sharlene Bush',
//       email: 'sharlenebush@tubesys.com',
//       eyeColor: 'blue',
//       friends: ['Briana Decker', 'Sharron Pace'],
//       isActive: true,
//       balance: 3821,
//       gender: 'female',
//       age: 34,
//     },
//     {
//       name: 'Ross Vazquez',
//       email: 'rossvazquez@xinware.com',
//       eyeColor: 'green',
//       friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//       isActive: false,
//       balance: 3793,
//       gender: 'male',
//       age: 24,
//     },
//     {
//       name: 'Elma Head',
//       email: 'elmahead@omatom.com',
//       eyeColor: 'green',
//       friends: ['Goldie Gentry', 'Aisha Tran'],
//       isActive: true,
//       balance: 2278,
//       gender: 'female',
//       age: 21,
//     },
//     {
//       name: 'Carey Barr',
//       email: 'careybarr@nurali.com',
//       eyeColor: 'blue',
//       friends: ['Jordan Sampson', 'Eddie Strong'],
//       isActive: true,
//       balance: 3951,
//       gender: 'male',
//       age: 27,
//     },
//     {
//       name: 'Blackburn Dotson',
//       email: 'blackburndotson@furnigeer.com',
//       eyeColor: 'brown',
//       friends: ['Jacklyn Lucas', 'Linda Chapman'],
//       isActive: false,
//       balance: 1498,
//       gender: 'male',
//       age: 38,
//     },
//     {
//       name: 'Sheree Anthony',
//       email: 'shereeanthony@kog.com',
//       eyeColor: 'brown',
//       friends: ['Goldie Gentry', 'Briana Decker'],
//       isActive: true,
//       balance: 2764,
//       gender: 'female',
//       age: 39,
//     },
//   ])
// ); //масив об'єктів користувачів з іменами Moore Hensley, Ross Vazquez і Blackburn Dotson

// // 💡 Task 28
// // Використовуючи метод find(), доповни код таким чином, щоб:
// // У змінній bookWithTitle утворився об'єкт книги, назва якої (властивість title) збігається зі значенням змінної BOOK_TITLE.
// // У змінній bookByAuthor утворився об'єкт книги, автор якої (властивість author) збігається зі значенням змінної AUTHOR.

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);

// console.log(bookWithTitle); // об'єкт книги з назвою вище "The Dream of a Ridiculous Man"
// console.log(bookByAuthor); // об'єкт книги автора "Robert Sheckley"

// // 💡 Task 29
// // Доповни функцію getUserWithEmail(users, email) таким чином, щоб вона повертала об'єкт користувача, пошта якого (властивість email) збігається зі значенням параметра email.

// // Change code below this line
// // const getUserWithEmail = (users, email) => {};

// const getUserWithEmail = (users, email) =>
//   users.find(user => user.email === email);

// // Change code above this line

// console.log(getUserWithEmail(
// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ], "shereeanthony@kog.com" // "elmahead@omatom.com" , "blackburndotson@furnigeer.com"
// ));

// // 💡 Task 30
// // Використовуючи метод every(), доповни код таким чином, щоб:

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// // const eachElementInFirstIsEven = firstArray; // результат перевірки всіх елементів масиву firstArray на парність.
// // const eachElementInFirstIsOdd = firstArray; // результат перевірки всіх елементів масиву firstArray на непарність.

// // const eachElementInSecondIsEven = secondArray; // результат перевірки всіх елементів масиву secondArray на парність.
// // const eachElementInSecondIsOdd = secondArray; // результат перевірки всіх елементів масиву secondArray на непарність.

// // const eachElementInThirdIsEven = thirdArray; // результат перевірки всіх елементів масиву thirdArray на парність.
// // const eachElementInThirdIsOdd = thirdArray; // результат перевірки всіх елементів масиву thirdArray на непарність.

// const eachElementInFirstIsEven = firstArray.every(number => !(number % 2));
// const eachElementInFirstIsOdd = firstArray.every(number => !!(number % 2));

// const eachElementInSecondIsEven = secondArray.every(number => !(number % 2));
// const eachElementInSecondIsOdd = secondArray.every(number => !!(number % 2));

// const eachElementInThirdIsEven = thirdArray.every(number => !(number % 2));
// const eachElementInThirdIsOdd = thirdArray.every(number => !!(number % 2));

// console.log(eachElementInFirstIsEven); // true
// console.log(eachElementInFirstIsOdd); // false
// console.log(eachElementInSecondIsEven); // false
// console.log(eachElementInSecondIsOdd); // true
// console.log(eachElementInThirdIsEven); // false
// console.log(eachElementInThirdIsOdd); // false

// // 💡 Task 31
// // Доповни функцію isEveryUserActive(users) таким чином, щоб вона перевіряла, чи всі користувачі зараз активні (властивість isActive) і повертала true або false. Для перебирання параметра users використовується метод every().

// // Change code below this line
// // const isEveryUserActive = (users) => {};

// const isEveryUserActive = users => users.every(user => user.isActive);

// // Change code above this line

// console.log(isEveryUserActive([
//     {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male"
//     },
//     {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female"
//     },
//     {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male"
//     },
//     {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female"
//     },
//     {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male"
//     },
//     {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male"
//     },
//     {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female"
//     }
// ])); // false

// // 💡 Task 32
// // Використовуючи метод some(), доповни код таким чином, щоб:

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// // const anyElementInFirstIsEven = firstArray; // результат перевірки наявності парних елементів в масиві firstArray.
// // const anyElementInFirstIsOdd = firstArray; // результат перевірки наявності непарних елементів в масиві firstArray.

// // const anyElementInSecondIsEven = secondArray; // результат перевірки наявності парних елементів в масиві secondArray.
// // const anyElementInSecondIsOdd = secondArray; // результат перевірки наявності непарних елементів в масиві secondArray.

// // const anyElementInThirdIsEven = thirdArray; // результат перевірки наявності парних елементів в масиві thirdArray.
// // const anyElementInThirdIsOdd = thirdArray; // результат перевірки наявності непарних елементів в масиві thirdArray.

// const anyElementInFirstIsEven = firstArray.some(number => !(number % 2));
// const anyElementInFirstIsOdd = firstArray.some(number => !!(number % 2));

// const anyElementInSecondIsEven = secondArray.some(number => !(number % 2));
// const anyElementInSecondIsOdd = secondArray.some(number => !!(number % 2));

// const anyElementInThirdIsEven = thirdArray.some(number => !(number % 2));
// const anyElementInThirdIsOdd = thirdArray.some(number => !!(number % 2));

// console.log(anyElementInFirstIsEven); // true
// console.log(anyElementInFirstIsOdd); // false
// console.log(anyElementInSecondIsEven); // false
// console.log(anyElementInSecondIsOdd); // true
// console.log(anyElementInThirdIsEven); // true
// console.log(anyElementInThirdIsOdd); // true

// // 💡 Task 33
// // Доповни функцію isAnyUserActive(users) таким чином, щоб вона перевіряла наявність активних користувачів (властивість isActive) і повертала true або false.

// // Change code below this line
// // const isAnyUserActive = users => {};

// const isAnyUserActive = users => users.some(user => user.isActive);

// // Change code above this line

// console.log(
//   isAnyUserActive([
//     {
//       name: 'Moore Hensley',
//       email: 'moorehensley@indexia.com',
//       eyeColor: 'blue',
//       friends: ['Sharron Pace'],
//       isActive: false,
//       balance: 2811,
//       gender: 'male',
//     },
//     {
//       name: 'Sharlene Bush',
//       email: 'sharlenebush@tubesys.com',
//       eyeColor: 'blue',
//       friends: ['Briana Decker', 'Sharron Pace'],
//       isActive: true,
//       balance: 3821,
//       gender: 'female',
//     },
//     {
//       name: 'Ross Vazquez',
//       email: 'rossvazquez@xinware.com',
//       eyeColor: 'green',
//       friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//       isActive: false,
//       balance: 3793,
//       gender: 'male',
//     },
//     {
//       name: 'Elma Head',
//       email: 'elmahead@omatom.com',
//       eyeColor: 'green',
//       friends: ['Goldie Gentry', 'Aisha Tran'],
//       isActive: true,
//       balance: 2278,
//       gender: 'female',
//     },
//     {
//       name: 'Carey Barr',
//       email: 'careybarr@nurali.com',
//       eyeColor: 'blue',
//       friends: ['Jordan Sampson', 'Eddie Strong'],
//       isActive: true,
//       balance: 3951,
//       gender: 'male',
//     },
//     {
//       name: 'Blackburn Dotson',
//       email: 'blackburndotson@furnigeer.com',
//       eyeColor: 'brown',
//       friends: ['Jacklyn Lucas', 'Linda Chapman'],
//       isActive: false,
//       balance: 1498,
//       gender: 'male',
//     },
//     {
//       name: 'Sheree Anthony',
//       email: 'shereeanthony@kog.com',
//       eyeColor: 'brown',
//       friends: ['Goldie Gentry', 'Briana Decker'],
//       isActive: true,
//       balance: 2764,
//       gender: 'female',
//     },
//   ])
// ); // true

// // 💡 Task 34
// // Ігровому сервісу необхідний функціонал підрахунку середнього часу, проведеного в іграх. Доповни код таким чином, щоб у змінній totalPlayTime вийшло загальний ігровий час з масиву playtimes. Для перебирання масиву playtimes використовується метод reduce()

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// // const totalPlayTime = playtimes;

// const totalPlayTime = playtimes.reduce(
//   (previousValue, number) => previousValue + number);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(players); // об'єкт гравців з ігровим часом кожного
// console.log(playtimes); // [1270, 468, 710, 244]
// console.log(totalPlayTime); // 2692
// console.log(averagePlayTime); // 673

// // 💡 Task 35
// // Нашому сервісу необхідно розрахувати середній час, проведений в одній грі для кожного гравця, і отримати загальну суму цих значень часу.Розрахувати час для кожного з гравців можна, розділивши його час(властивість playtime) на кількість ігор(властивість gamesPlayed). Для перебирання масиву players використовується метод reduce()

// const players = [
//   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// // const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
// //     return acc + player.playtime / player.gamesPlayed;
// // }, 0);

// const totalAveragePlaytimePerGame = players.reduce((acc, player) =>
//    acc + player.playtime / player.gamesPlayed
// , 0);

// console.log(players); // масив об'єктів гравців
// console.log(totalAveragePlaytimePerGame); // 1023

// // 💡 Task 36
// // Доповни функцію calculateTotalBalance(users) таким чином, щоб вона рахувала і повертала суму всіх коштів (властивість balance), які зберігають користувачі з масиву users. Для перебирання параметра users використовується метод reduce()

// // Change code below this line
// // const calculateTotalBalance = users => {};

// const calculateTotalBalance = users => users.reduce((total, user) => total + user.balance, 0);

// // Change code above this line

// console.log(
//   calculateTotalBalance([
//     {
//       name: 'Moore Hensley',
//       email: 'moorehensley@indexia.com',
//       eyeColor: 'blue',
//       friends: ['Sharron Pace'],
//       isActive: false,
//       balance: 2811,
//       gender: 'male',
//     },
//     {
//       name: 'Sharlene Bush',
//       email: 'sharlenebush@tubesys.com',
//       eyeColor: 'blue',
//       friends: ['Briana Decker', 'Sharron Pace'],
//       isActive: true,
//       balance: 3821,
//       gender: 'female',
//     },
//     {
//       name: 'Ross Vazquez',
//       email: 'rossvazquez@xinware.com',
//       eyeColor: 'green',
//       friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//       isActive: false,
//       balance: 3793,
//       gender: 'male',
//     },
//     {
//       name: 'Elma Head',
//       email: 'elmahead@omatom.com',
//       eyeColor: 'green',
//       friends: ['Goldie Gentry', 'Aisha Tran'],
//       isActive: true,
//       balance: 2278,
//       gender: 'female',
//     },
//     {
//       name: 'Carey Barr',
//       email: 'careybarr@nurali.com',
//       eyeColor: 'blue',
//       friends: ['Jordan Sampson', 'Eddie Strong'],
//       isActive: true,
//       balance: 3951,
//       gender: 'male',
//     },
//     {
//       name: 'Blackburn Dotson',
//       email: 'blackburndotson@furnigeer.com',
//       eyeColor: 'brown',
//       friends: ['Jacklyn Lucas', 'Linda Chapman'],
//       isActive: false,
//       balance: 1498,
//       gender: 'male',
//     },
//     {
//       name: 'Sheree Anthony',
//       email: 'shereeanthony@kog.com',
//       eyeColor: 'brown',
//       friends: ['Goldie Gentry', 'Briana Decker'],
//       isActive: true,
//       balance: 2764,
//       gender: 'female',
//     },
//   ])
// ); // 20916

// // 💡 Task 37
// // Доповни функцію getTotalFriendCount(users) таким чином, щоб вона рахувала і повертала загальну кількість друзів (властивість friends) усіх користувачів з масиву users. Для перебирання параметра users використовується метод reduce()

// // Change code below this line
// // const getTotalFriendCount = users => {};

// const getTotalFriendCount = users =>
//   users.reduce((acc, user) => acc + user.friends.length, 0);

// // Change code above this line

// console.log(
//   getTotalFriendCount([
//     {
//       name: 'Moore Hensley',
//       email: 'moorehensley@indexia.com',
//       eyeColor: 'blue',
//       friends: ['Sharron Pace'],
//       isActive: false,
//       balance: 2811,
//       gender: 'male',
//     },
//     {
//       name: 'Sharlene Bush',
//       email: 'sharlenebush@tubesys.com',
//       eyeColor: 'blue',
//       friends: ['Briana Decker', 'Sharron Pace'],
//       isActive: true,
//       balance: 3821,
//       gender: 'female',
//     },
//     {
//       name: 'Ross Vazquez',
//       email: 'rossvazquez@xinware.com',
//       eyeColor: 'green',
//       friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//       isActive: false,
//       balance: 3793,
//       gender: 'male',
//     },
//     {
//       name: 'Elma Head',
//       email: 'elmahead@omatom.com',
//       eyeColor: 'green',
//       friends: ['Goldie Gentry', 'Aisha Tran'],
//       isActive: true,
//       balance: 2278,
//       gender: 'female',
//     },
//     {
//       name: 'Carey Barr',
//       email: 'careybarr@nurali.com',
//       eyeColor: 'blue',
//       friends: ['Jordan Sampson', 'Eddie Strong'],
//       isActive: true,
//       balance: 3951,
//       gender: 'male',
//     },
//     {
//       name: 'Blackburn Dotson',
//       email: 'blackburndotson@furnigeer.com',
//       eyeColor: 'brown',
//       friends: ['Jacklyn Lucas', 'Linda Chapman'],
//       isActive: false,
//       balance: 1498,
//       gender: 'male',
//     },
//     {
//       name: 'Sheree Anthony',
//       email: 'shereeanthony@kog.com',
//       eyeColor: 'brown',
//       friends: ['Goldie Gentry', 'Briana Decker'],
//       isActive: true,
//       balance: 2764,
//       gender: 'female',
//     },
//   ])); // 14

// // 💡 Task 38
// // Доповни код таким чином, щоб у змінній ascendingReleaseDates вийшла копія масиву releaseDates, відсортована за зростанням, а у змінній alphabeticalAuthors - копія масиву імен авторів authors, відсортована за алфавітом. Використаний метод sort()

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Tanith Lee',
//   'Bernard Cornwell',
//   'Robert Sheckley',
//   'Fyodor Dostoevsky',
// ];
// // Change code below this line
// // const ascendingReleaseDates = releaseDates;
// // const alphabeticalAuthors = authors;

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

// console.log(releaseDates); // [2016, 1967, 2008, 1984, 1973, 2012, 1997]
// console.log(authors); // ['Tanith Lee', 'Bernard Cornwell', 'Robert Sheckley', 'Fyodor Dostoevsky']
// console.log(ascendingReleaseDates); // [1967, 1973, 1984, 1997, 2008, 2012, 2016]
// console.log(alphabeticalAuthors); // ['Bernard Cornwell', 'Fyodor Dostoevsky', 'Robert Sheckley', 'Tanith Lee']

// // 💡 Task 39
// // Онлайн бібіліотеці необхідно відображати книги, відсортовані за датою видання, за її зростанням або спаданням. Доповни код таким чином, щоб у змінній ascendingReleaseDates вийшла копія масиву releaseDates, відсортована за зростанням, а у змінній descendingReleaseDates - копія, відсортована за спаданням. Використаний метод sort()

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line
// // const ascendingReleaseDates = releaseDates;
// // const descendingReleaseDates = releaseDates;

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b); // за зростанням

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a); // за спадінням

// console.log(releaseDates); // [2016, 1967, 2008, 1984, 1973, 2012, 1997]
// console.log(ascendingReleaseDates); // [1967, 1973, 1984, 1997, 2008, 2012, 2016]
// console.log(descendingReleaseDates); // [2016, 2012, 2008, 1997, 1984, 1973, 1967]

// // 💡 Task 40
// // Онлайн бібіліотеці необхідно відображати книги, відсортовані за автором, в алфавітному і зворотному алфавітному порядку. Доповни код таким чином, щоб у змінній authorsInAlphabetOrder вийшла копія масиву authors, відсортована за алфавітом, а у змінній authorsInReversedOrder - копія, відсортована у зворотному алфавітному порядку. Використаний метод sort() і метод рядків localeCompare()

// const authors = [
//   'Tanith Lee',
//   'Bernard Cornwell',
//   'Robert Sheckley',
//   'Fyodor Dostoevsky',
//   'Howard Lovecraft',
// ];
// // Change code below this line
// // const authorsInAlphabetOrder = authors;
// // const authorsInReversedOrder = authors;

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b)); // за алфавітом

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a)); // в зворотньому алфавітному порядку

// console.log(authors); // ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky", "Howard Lovecraft"]
// console.log(authorsInAlphabetOrder); // ["Bernard Cornwell", "Fyodor Dostoevsky", "Howard Lovecraft", "Robert Sheckley", "Tanith Lee"]
// console.log(authorsInReversedOrder); // ["Tanith Lee", "Robert Sheckley", "Howard Lovecraft", "Fyodor Dostoevsky", "Bernard Cornwell"]

// // 💡 Task 41
// // Доповни код таким чином, щоб. Для перебирання масиву books використовується метод sort()

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];
// // Change code below this line
// // const sortedByAuthorName = books; // за ім'ям автора в алфавітному порядку
// // const sortedByReversedAuthorName = books; // за ім'ям автора у зворотному алфавітному порядку
// // const sortedByAscendingRating = books; // за зростанням рейтингу
// // const sortedByDescentingRating = books; // за спаданням рейтингу

// const sortedByAuthorName = [...books].sort((firstBook, secondBook) => firstBook.author.localeCompare(secondBook.author));

// const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) => secondBook.author.localeCompare(firstBook.author));

// const sortedByAscendingRating = [...books].sort((firstBook, secondBook) => firstBook.rating - secondBook.rating);

// const sortedByDescentingRating = [...books].sort((firstBook, secondBook) => secondBook.rating - firstBook.rating);

// console.log(books); // масив об'єктів книг
// console.log(sortedByAuthorName); // масив книг, відсортований за ім'ям автора в алфавітному порядку
// console.log(sortedByReversedAuthorName); // масив книг, відсортований за ім'ям автора у зворотному алфавітному порядку
// console.log(sortedByAscendingRating); // масив книг, відсортований за зростанням рейтингу
// console.log(sortedByDescentingRating); // масив книг, відсортований за спаданням рейтингу

// // 💡 Task 42
// // Доповни функцію sortByAscendingBalance(users) таким чином, щоб вона повертала масив користувачів, відсортований за зростанням їх балансу (властивість balance). Для перебирання параметра users використаний метод sort(). Значення параметра users не змінюється. Виклик функції із зазначеним масивом користувачів повертає новий масив користувачів, відсортований за зростанням їх балансу

// // Change code below this line
// // const sortByAscendingBalance = users => {};

// const sortByAscendingBalance = users => [...users].sort((firstUser, secondUser) => firstUser.balance - secondUser.balance);

// // Change code above this line

// console.log(
//   sortByAscendingBalance([
//     {
//       name: 'Moore Hensley',
//       email: 'moorehensley@indexia.com',
//       eyeColor: 'blue',
//       friends: ['Sharron Pace'],
//       isActive: false,
//       balance: 2811,
//       gender: 'male',
//     },
//     {
//       name: 'Sharlene Bush',
//       email: 'sharlenebush@tubesys.com',
//       eyeColor: 'blue',
//       friends: ['Briana Decker', 'Sharron Pace'],
//       isActive: true,
//       balance: 3821,
//       gender: 'female',
//     },
//     {
//       name: 'Ross Vazquez',
//       email: 'rossvazquez@xinware.com',
//       eyeColor: 'green',
//       friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//       isActive: false,
//       balance: 3793,
//       gender: 'male',
//     },
//     {
//       name: 'Elma Head',
//       email: 'elmahead@omatom.com',
//       eyeColor: 'green',
//       friends: ['Goldie Gentry', 'Aisha Tran'],
//       isActive: true,
//       balance: 2278,
//       gender: 'female',
//     },
//     {
//       name: 'Carey Barr',
//       email: 'careybarr@nurali.com',
//       eyeColor: 'blue',
//       friends: ['Jordan Sampson', 'Eddie Strong'],
//       isActive: true,
//       balance: 3951,
//       gender: 'male',
//     },
//     {
//       name: 'Blackburn Dotson',
//       email: 'blackburndotson@furnigeer.com',
//       eyeColor: 'brown',
//       friends: ['Jacklyn Lucas', 'Linda Chapman'],
//       isActive: false,
//       balance: 1498,
//       gender: 'male',
//     },
//     {
//       name: 'Sheree Anthony',
//       email: 'shereeanthony@kog.com',
//       eyeColor: 'brown',
//       friends: ['Goldie Gentry', 'Briana Decker'],
//       isActive: true,
//       balance: 2764,
//       gender: 'female',
//     },
//   ])
// );

// // 💡 Task 43
// // Доповни функцію sortByDescendingFriendCount(users) таким чином, щоб вона повертала масив користувачів, відсортований за спаданням кількості їхніх друзів (властивість friends). Значення параметра users не змінюється. Для перебирання параметра users використаний метод sort().

// // Change code below this line
// // const sortByDescendingFriendCount = users => {};

// const sortByDescendingFriendCount = users =>
//   [...users].sort(
//     (firstUser, secondUser) =>
//      secondUser.friends.length  - firstUser.friends.length
//   );

// // Change code above this line

// console.log(
//   sortByDescendingFriendCount([
//     {
//       name: 'Moore Hensley',
//       email: 'moorehensley@indexia.com',
//       eyeColor: 'blue',
//       friends: ['Sharron Pace'],
//       isActive: false,
//       balance: 2811,
//       gender: 'male',
//     },
//     {
//       name: 'Sharlene Bush',
//       email: 'sharlenebush@tubesys.com',
//       eyeColor: 'blue',
//       friends: ['Briana Decker', 'Sharron Pace'],
//       isActive: true,
//       balance: 3821,
//       gender: 'female',
//     },
//     {
//       name: 'Ross Vazquez',
//       email: 'rossvazquez@xinware.com',
//       eyeColor: 'green',
//       friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//       isActive: false,
//       balance: 3793,
//       gender: 'male',
//     },
//     {
//       name: 'Elma Head',
//       email: 'elmahead@omatom.com',
//       eyeColor: 'green',
//       friends: ['Goldie Gentry', 'Aisha Tran'],
//       isActive: true,
//       balance: 2278,
//       gender: 'female',
//     },
//     {
//       name: 'Carey Barr',
//       email: 'careybarr@nurali.com',
//       eyeColor: 'blue',
//       friends: ['Jordan Sampson', 'Eddie Strong'],
//       isActive: true,
//       balance: 3951,
//       gender: 'male',
//     },
//     {
//       name: 'Blackburn Dotson',
//       email: 'blackburndotson@furnigeer.com',
//       eyeColor: 'brown',
//       friends: ['Jacklyn Lucas', 'Linda Chapman'],
//       isActive: false,
//       balance: 1498,
//       gender: 'male',
//     },
//     {
//       name: 'Sheree Anthony',
//       email: 'shereeanthony@kog.com',
//       eyeColor: 'brown',
//       friends: ['Goldie Gentry', 'Briana Decker'],
//       isActive: true,
//       balance: 2764,
//       gender: 'female',
//     },
//   ])
// );

// // 💡 Task 44
// // Доповни функцію sortByName(users) таким чином, щоб вона повертала масив користувачів, відсортований за їх ім'ям (властивість name) в алфавітному порядку. Значення параметра users не змінюється. Для перебирання параметра users використаний метод sort()

// // Change code below this line
// // const sortByName = users => {};

// const sortByName = users => [...users].sort((firstUser, seconUser) => firstUser.name.localeCompare(seconUser.name));

// // Change code above this line

// console.log(
//   sortByName([
//     {
//       name: 'Moore Hensley',
//       email: 'moorehensley@indexia.com',
//       eyeColor: 'blue',
//       friends: ['Sharron Pace'],
//       isActive: false,
//       balance: 2811,
//       gender: 'male',
//     },
//     {
//       name: 'Sharlene Bush',
//       email: 'sharlenebush@tubesys.com',
//       eyeColor: 'blue',
//       friends: ['Briana Decker', 'Sharron Pace'],
//       isActive: true,
//       balance: 3821,
//       gender: 'female',
//     },
//     {
//       name: 'Ross Vazquez',
//       email: 'rossvazquez@xinware.com',
//       eyeColor: 'green',
//       friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//       isActive: false,
//       balance: 3793,
//       gender: 'male',
//     },
//     {
//       name: 'Elma Head',
//       email: 'elmahead@omatom.com',
//       eyeColor: 'green',
//       friends: ['Goldie Gentry', 'Aisha Tran'],
//       isActive: true,
//       balance: 2278,
//       gender: 'female',
//     },
//     {
//       name: 'Carey Barr',
//       email: 'careybarr@nurali.com',
//       eyeColor: 'blue',
//       friends: ['Jordan Sampson', 'Eddie Strong'],
//       isActive: true,
//       balance: 3951,
//       gender: 'male',
//     },
//     {
//       name: 'Blackburn Dotson',
//       email: 'blackburndotson@furnigeer.com',
//       eyeColor: 'brown',
//       friends: ['Jacklyn Lucas', 'Linda Chapman'],
//       isActive: false,
//       balance: 1498,
//       gender: 'male',
//     },
//     {
//       name: 'Sheree Anthony',
//       email: 'shereeanthony@kog.com',
//       eyeColor: 'brown',
//       friends: ['Goldie Gentry', 'Briana Decker'],
//       isActive: true,
//       balance: 2764,
//       gender: 'female',
//     },
//   ])
// );

// // 💡 Task 45
// // Доповни код таким чином, щоб у змінній names вийшов масив імен авторів в алфавітному порядку, рейтинг книг яких більший за значення змінної MIN_BOOK_RATING. Відсутні оголошені змінні, крім books, MIN_BOOK_RATING і names. Використовується ланцюжок методів filter, map, sort.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line
// // const names = books;

// // // відібрати книги з рейтингом вище заданого
// // const filteredBooks = books.filter(book => (book.rating > MIN_BOOK_RATING));
// // console.log(filteredBooks);

// // // отримати з попереднього масиву іменя авторів
// // const arrayNames = filteredBooks.map(book => book.author);
// // console.log(arrayNames);

// // // відсортувати масив імен за алфавитом
// // const namesByAbc = [...arrayNames].sort((firstName, secondName) => firstName.localeCompare(secondName));
// // console.log(namesByAbc);

// const names = books
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author)
//   .sort((firstName, secondName) => firstName.localeCompare(secondName));

// console.log(books); // вихідний масив об'єктів
// console.log(names); // ["Bernard Cornwell", "Howard Lovecraft", "Robert Sheckley"]

// // 💡 Task 46
// // Доповни функцію getNamesSortedByFriendCount(users) таким чином, щоб вона повертала масив імен користувачів, відсортований за зростанням кількості їхніх друзів (властивість friends). У тілі функції використовується ланцюжок методів. Значення параметра users не змінюється

// // Change code below this line
// // const getNamesSortedByFriendCount = users => {};

// // // створити новий масив друзів спредом та відсортувати його за кількостью друзів сортом
// // const newArray = [...users].sort((firstUser, secondUser) => firstUser.friends.length - secondUser.friends.length)
// // console.log(newArray);

// // // зібрати масив імен юзеров мепом
// // const namesArray = newArray.map(user => user.name);
// // console.log(namesArray);

// const getNamesSortedByFriendCount = users =>
//   [...users]
//     .sort(
//       (firstUser, secondUser) =>
//         firstUser.friends.length - secondUser.friends.length
//     )
//     .map(user => user.name);

// // Change code above this line

// console.log(
//   getNamesSortedByFriendCount([
//     {
//       name: 'Moore Hensley',
//       email: 'moorehensley@indexia.com',
//       eyeColor: 'blue',
//       friends: ['Sharron Pace'],
//       isActive: false,
//       balance: 2811,
//       gender: 'male',
//     },
//     {
//       name: 'Sharlene Bush',
//       email: 'sharlenebush@tubesys.com',
//       eyeColor: 'blue',
//       friends: ['Briana Decker', 'Sharron Pace'],
//       isActive: true,
//       balance: 3821,
//       gender: 'female',
//     },
//     {
//       name: 'Ross Vazquez',
//       email: 'rossvazquez@xinware.com',
//       eyeColor: 'green',
//       friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//       isActive: false,
//       balance: 3793,
//       gender: 'male',
//     },
//     {
//       name: 'Elma Head',
//       email: 'elmahead@omatom.com',
//       eyeColor: 'green',
//       friends: ['Goldie Gentry', 'Aisha Tran'],
//       isActive: true,
//       balance: 2278,
//       gender: 'female',
//     },
//     {
//       name: 'Carey Barr',
//       email: 'careybarr@nurali.com',
//       eyeColor: 'blue',
//       friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
//       isActive: true,
//       balance: 3951,
//       gender: 'male',
//     },
//     {
//       name: 'Blackburn Dotson',
//       email: 'blackburndotson@furnigeer.com',
//       eyeColor: 'brown',
//       friends: [
//         'Jacklyn Lucas',
//         'Linda Chapman',
//         'Adrian Cross',
//         'Solomon Fokes',
//       ],
//       isActive: false,
//       balance: 1498,
//       gender: 'male',
//     },
//     {
//       name: 'Sheree Anthony',
//       email: 'shereeanthony@kog.com',
//       eyeColor: 'brown',
//       friends: ['Goldie Gentry', 'Briana Decker'],
//       isActive: true,
//       balance: 2764,
//       gender: 'female',
//     },
//   ])
// ); // ["Moore Hensley", "Sharlene Bush", "Elma Head", "Sheree Anthony", "Ross Vazquez", "Carey Barr", "Blackburn Dotson"]

// // 💡 Task 47
// // Доповни функцію getSortedFriends(users) таким чином, щоб вона повертала масив унікальних імен друзів (властивість friends), відсортований за алфавітом. У тілі функції використовується ланцюжок методів в правильному порядку. Значення параметра users не змінюється.

// // Change code below this line
// // const getSortedFriends = users => {};

// // // зібрати масив всіх друзів юзерів флет-мепом
// // const allFriends = users.flatMap(user => user.friends)
// // console.log(allFriends);

// // // зібрати мавсив унікальних імен фильтом
// // const uniqFriends = allFriends.filter((name, idx, arr) => arr.indexOf(name)===idx);
// // console.log(uniqFriends);

// // // відсортувати масив унікальних імен за алфавітом сортом
// // const sortFriends = uniqFriends.sort((firstName, SecondName) => firstName.localeCompare(SecondName))
// // console.log(sortFriends);

// const getSortedFriends = users =>
//   users
//     .flatMap(user => user.friends)
//     .filter((name, idx, arr) => arr.indexOf(name) === idx)
//     .sort((firstName, SecondName) => firstName.localeCompare(SecondName));

// // Change code above this line

// console.log(
//   getSortedFriends([
//     {
//       name: 'Moore Hensley',
//       email: 'moorehensley@indexia.com',
//       eyeColor: 'blue',
//       friends: ['Sharron Pace'],
//       isActive: false,
//       balance: 2811,
//       gender: 'male',
//     },
//     {
//       name: 'Sharlene Bush',
//       email: 'sharlenebush@tubesys.com',
//       eyeColor: 'blue',
//       friends: ['Briana Decker', 'Sharron Pace'],
//       isActive: true,
//       balance: 3821,
//       gender: 'female',
//     },
//     {
//       name: 'Ross Vazquez',
//       email: 'rossvazquez@xinware.com',
//       eyeColor: 'green',
//       friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//       isActive: false,
//       balance: 3793,
//       gender: 'male',
//     },
//     {
//       name: 'Elma Head',
//       email: 'elmahead@omatom.com',
//       eyeColor: 'green',
//       friends: ['Goldie Gentry', 'Aisha Tran'],
//       isActive: true,
//       balance: 2278,
//       gender: 'female',
//     },
//     {
//       name: 'Carey Barr',
//       email: 'careybarr@nurali.com',
//       eyeColor: 'blue',
//       friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
//       isActive: true,
//       balance: 3951,
//       gender: 'male',
//     },
//     {
//       name: 'Blackburn Dotson',
//       email: 'blackburndotson@furnigeer.com',
//       eyeColor: 'brown',
//       friends: [
//         'Jacklyn Lucas',
//         'Linda Chapman',
//         'Adrian Cross',
//         'Solomon Fokes',
//       ],
//       isActive: false,
//       balance: 1498,
//       gender: 'male',
//     },
//     {
//       name: 'Sheree Anthony',
//       email: 'shereeanthony@kog.com',
//       eyeColor: 'brown',
//       friends: ['Goldie Gentry', 'Briana Decker'],
//       isActive: true,
//       balance: 2764,
//       gender: 'female',
//     },
//   ])
// ); // ["Adrian Cross", "Aisha Tran", "Briana Decker", "Eddie Strong", "Goldie Gentry", "Jacklyn Lucas", "Jordan Sampson", "Linda Chapman", "Marilyn Mcintosh", "Naomi Buckner", "Padilla Garrison", "Sharron Pace", "Solomon Fokes"]

// // 💡 Task 48
// // Доповни функцію getTotalBalanceByGender(users, gender) таким чином, щоб вона повертала загальний баланс користувачів (властивість balance), стать яких (властивість gender) збігається зі значенням параметра gender. У тілі функції використовується ланцюжок методів в правильному порядку. Значення параметра users не змінюється.

// // const users = [
// //   {
// //     name: 'Moore Hensley',
// //     email: 'moorehensley@indexia.com',
// //     eyeColor: 'blue',
// //     friends: ['Sharron Pace'],
// //     isActive: false,
// //     balance: 2811,
// //     gender: 'male',
// //   },
// //   {
// //     name: 'Sharlene Bush',
// //     email: 'sharlenebush@tubesys.com',
// //     eyeColor: 'blue',
// //     friends: ['Briana Decker', 'Sharron Pace'],
// //     isActive: true,
// //     balance: 3821,
// //     gender: 'female',
// //   },
// //   {
// //     name: 'Ross Vazquez',
// //     email: 'rossvazquez@xinware.com',
// //     eyeColor: 'green',
// //     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
// //     isActive: false,
// //     balance: 3793,
// //     gender: 'male',
// //   },
// //   {
// //     name: 'Elma Head',
// //     email: 'elmahead@omatom.com',
// //     eyeColor: 'green',
// //     friends: ['Goldie Gentry', 'Aisha Tran'],
// //     isActive: true,
// //     balance: 2278,
// //     gender: 'female',
// //   },
// //   {
// //     name: 'Carey Barr',
// //     email: 'careybarr@nurali.com',
// //     eyeColor: 'blue',
// //     friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
// //     isActive: true,
// //     balance: 3951,
// //     gender: 'male',
// //   },
// //   {
// //     name: 'Blackburn Dotson',
// //     email: 'blackburndotson@furnigeer.com',
// //     eyeColor: 'brown',
// //     friends: [
// //       'Jacklyn Lucas',
// //       'Linda Chapman',
// //       'Adrian Cross',
// //       'Solomon Fokes',
// //     ],
// //     isActive: false,
// //     balance: 1498,
// //     gender: 'male',
// //   },
// //   {
// //     name: 'Sheree Anthony',
// //     email: 'shereeanthony@kog.com',
// //     eyeColor: 'brown',
// //     friends: ['Goldie Gentry', 'Briana Decker'],
// //     isActive: true,
// //     balance: 2764,
// //     gender: 'female',
// //   },
// // ];

// // Change code below this line
// // const getTotalBalanceByGender = (users, gender) => {};

// // відібрати масив по признаку полу філтром
// // const arrayByGender = users.filter(user => user.gender === 'female')
// // console.log(arrayByGender);

// // // порахувати значення балансу в отриманому масиві редусом
// // const totalBalance = arrayByGender.reduce((total, user) =>  total + user.balance , 0);
// // console.log(totalBalance);

// const getTotalBalanceByGender = (users, gender) =>
//   users
//     .filter(user => user.gender === gender)
//     .reduce((total, user) => total + user.balance, 0);

// //

// // Change code above this line

// console.log(
//   getTotalBalanceByGender(
//     [
//       {
//         name: 'Moore Hensley',
//         email: 'moorehensley@indexia.com',
//         eyeColor: 'blue',
//         friends: ['Sharron Pace'],
//         isActive: false,
//         balance: 2811,
//         gender: 'male',
//       },
//       {
//         name: 'Sharlene Bush',
//         email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue',
//         friends: ['Briana Decker', 'Sharron Pace'],
//         isActive: true,
//         balance: 3821,
//         gender: 'female',
//       },
//       {
//         name: 'Ross Vazquez',
//         email: 'rossvazquez@xinware.com',
//         eyeColor: 'green',
//         friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//         isActive: false,
//         balance: 3793,
//         gender: 'male',
//       },
//       {
//         name: 'Elma Head',
//         email: 'elmahead@omatom.com',
//         eyeColor: 'green',
//         friends: ['Goldie Gentry', 'Aisha Tran'],
//         isActive: true,
//         balance: 2278,
//         gender: 'female',
//       },
//       {
//         name: 'Carey Barr',
//         email: 'careybarr@nurali.com',
//         eyeColor: 'blue',
//         friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
//         isActive: true,
//         balance: 3951,
//         gender: 'male',
//       },
//       {
//         name: 'Blackburn Dotson',
//         email: 'blackburndotson@furnigeer.com',
//         eyeColor: 'brown',
//         friends: [
//           'Jacklyn Lucas',
//           'Linda Chapman',
//           'Adrian Cross',
//           'Solomon Fokes',
//         ],
//         isActive: false,
//         balance: 1498,
//         gender: 'male',
//       },
//       {
//         name: 'Sheree Anthony',
//         email: 'shereeanthony@kog.com',
//         eyeColor: 'brown',
//         friends: ['Goldie Gentry', 'Briana Decker'],
//         isActive: true,
//         balance: 2764,
//         gender: 'female',
//       },
//     ],
//     'female'
//   )
// ); // "male" - 12053 ; "female" - 8863

// // 📜📜📜 Практика

// // 📜 1
// // Напишить функцію checkKeyInObject(), яка приймає 2 параметри obj і key. Функця перебфрає об'єкт. Якщо об'єкт має такий ключ - повретає true в іншому випадку - false.

// const user = {
//   name: 'Vitalii',
//   car: 'Nissan',
//   carColor: 'beige',
// };

// // вар 1
// function checkKeyInObject(obj, keyForFind) {
//   for (const key in obj) {
//     if (key === keyForFind) {
//       return true;
//     }
//   }
//   return false;
// }

// // вар 2
// function checkKeyInObject(obj, keyForFind) {
//   const allKeys = Object.keys(obj);
//   if (allKeys.includes(keyForFind)) {
//     return true;
//   }
//   return false;
// }

// // вар 3
// function checkKeyInObject(obj, keyForFind) {
//   if (Object.keys(obj).includes(keyForFind)) {
//     return true;
//   }
//   return false;
// }

// // вар 4
// function checkKeyInObject(obj, keyForFind) {
//   return Object.keys(obj).includes(keyForFind) ? true : false;
// }

// // вар 5
// function checkKeyInObject(obj, keyForFind) {
//   return Object.keys(obj).includes(keyForFind);
// }

// // checkKeyInObject(user, 'car');
// console.log(checkKeyInObject(user,'car'));

// // 📜 2
// // Додати метод getInfo в об'єкт user, який повертатиме інформацію про користувача у форматі:
// // 'Name: Peter. Surname: Parker. Age: 22. Position: spider-man.'

// const user = {
//   name: 'Peter',
//   surname: 'Parker',
//   age: 22,
//   position: 'spider-man',
// };

// user.getInfo = function () {
//     return `Name: ${this.name}. Surname: ${this.surname}. Age: ${this.age}. Position: ${this.position}.`;
// };

// console.log(user.getInfo());

// // 📜 3
// // Створить об'єкт калькулятор з трьома методами:
// // read (a, b) - приймає два аргументи та зберігає їх як властивості об'єкта;
// // sum() - повертає суму збережених значень;
// // mult() - перемножує збережені значення та повертає результат

// // const calc = {
// //   read(a, b) {
// //     this.a = a;
// //     this.b = b;
// //   },

// //   sum() {
// //     return this.a + this.b;
// //   },

// //   mult() {
// //     return this.a * this.b;
// //   },
// // };

// // calc.read(2, 3);
// // console.log(calc.sum());
// // console.log(calc.mult());

// const calc = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },

//   sum(a, b) {
//     this.read(a, b);
//     return this.a + this.b;
//   },

//   mult(a, b) {
//     this.read(a, b);
//     return this.a * this.b;
//   },
// };

// console.log(calc.sum(3, 5));
// console.log(calc.mult(3, 5));

// // 📜 4
// // Напишить функцію upduteObject, яка приймає об'єкт і ключі (ключів може бути довільна кількість), яки необхідно видалити з об'екту. Функція повертає новий об'єкт без зазначених параметрів
// // ({a:1, b:2}, 'b') => {a:1}

// const upduteObject = (obj, ...keys) => {
//   // const newObj = Object.assign({}, obj);
//     const newObj = { ...obj };
//     keys.forEach(element => delete newObj[element]);
//     return newObj;
// }

// console.log(upduteObject({ a: 1, b: 2, c:3, d:4 }, 'b', 'd'));

// // 📜 5
// // Напишить функцію, яка приймає як параметр об'єкт і повертає масив значень у форматі [[key, value], [key, value], ...].

// const user = {
//   name: 'Peter',
//   surname: 'Parker',
//   age: 22,
//   position: 'spider-man',
// };

// function foo(obj) {
//     return Object.entries(obj);
// }

// console.log(foo(user))

// // 📜 6
// // Напишить функцію getPropertyValues(), яка приймає масив об'єктів та ключ, і повертає масив значень цього ключа у кожному об'екті.

// const myArr = [
//   { name: 'John', age: 38 },
//   { name: 'Jane', age: 29 },
//   { name: 'Bob', age: 25 },
//   { name: 'Max', age: 40 },
// ];

// // function getPropertyValues(arr, key) {
// //   const values = [];
// //   for (const elem of arr) {
// //     values.push(elem[key]);
// //   }
// //   return values;
// // }

// function getPropertyValues(arr, key) {
//   const values = arr.map(item => item[key]);

//   return values;
// }

// console.log(getPropertyValues(myArr, 'age'));

// // 📜 7
// // Виконайте смортування масиву цін за спадінням та зростанням
// const prices = [1000, 240, 670, 360, 89, 20];
// const ascendingPrices = [...prices].sort((a, b) => a - b);
// console.log(ascendingPrices)
// const descendingPrices = [...prices].sort((a, b) => b - a);
// console.log(descendingPrices)

// // 📜 8
// // Напишить функцію sayHi(), яка приймає в якості параеметра масив імен, перебирає масив і додає до кожного ім'я привітання тиа повертає новий масив ['Ivan, привіт!', 'Maria, привіт!', 'Anna, привіт!']
// const names = ['Ivan', 'Maria', 'Anna'];
// function sayHi(arr) {
//   const arr0 = [];
//   for (let name of names) {
//     arr0.push(`${name}, привіт!`);
//   }
//   console.log(arr0);
// }
// sayHi(names);

// const names = ['Ivan', 'Maria', 'Anna'];
// function sayHi(arr) {
//   // const arr0 = arr.map(name => name + ', привіт!');
//   const arr0 = arr.map(name => `${name}, привіт!`);
//   console.log(arr0);
// }
// sayHi(names);

// // 📜 9
// // Напишить стрілочну функціюб яка буде перевіряти чи містить масив хоча б одне число більше 20.
// const numbers = [20, 16, 11, 13, 15, 21];
// const res = numbers.some(number => number > 20);

// console.log(res);

// // 📜 10
// // Напишить стрілочну функцію яка буде перевіряти чи всі студенти у масиві старши 18 років.
// const students = [
//   { name: 'John', age: 19 },
//   { name: 'Jane', age: 19 },
//   { name: 'Bob', age: 22 },
//   { name: 'Max', age: 20 },
// ];

// const res = students.every(student => student.age > 18);
// console.log(res);

// // 📜 11
// // Зібрати в allTopics масив всіх предметів всіх курсів. Виконати фільтрацію, залишивши в allTopics тільки унікальні елементи.

// const courses = [
//   {
//     name: 'Basic HTML + CSS',
//     topics: ['VSCode', 'HTML', 'CSS', 'GitHub', 'GitHubDesctop'],
//   },
//   {
//     name: 'Intermediate HTML + CSS',
//     topics: ['VSCode', 'HTML', 'CSS', 'GitHub', 'Git', 'Terminal'],
//   },
//   {
//     name: 'Basic JavaScript',
//     topics: [
//       'VSCode',
//       'Type system',
//       'Loops',
//       'Function',
//       'Git',
//       'Conditions',
//       'Classes',
//       'GitHub',
//       'DOM',
//     ],
//   },
//   {
//     name: 'Intermediate JavaScript',
//     topics: [
//       'VSCode',
//       'NPM',
//       'Bundlers',
//       'Transpiling',
//       'Git',
//       'Promises',
//       'AJAX',
//       'GitHub',
//     ],
//   },
// ];

// // function collectAllTopics(arr) {
// //     const topics = arr.flatMap(course => course.topics);
// //     const allTopics = topics.filter((el, idx, arr) => arr.indexOf(el) === idx);
// //     console.log(allTopics);
// // }
// // collectAllTopics(courses);

//   const allTopics = courses
//     .flatMap(course => course.topics)
//     .filter((el, idx, arr) => arr.indexOf(el) === idx);
//   console.log(allTopics);

// // 📜 12
// // У нас є масив користувачів, кожен з яких має поле id та name. Знайти той, де id = 1.

// const users = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Pete' },
//   { id: 3, name: 'Mary' },
// ];

// function checkId(arr) {
//         // const resName = arr.find(user => user.id === 1);
//         // console.log(resName.name);
//     console.log(arr.find(user => user.id === 1).name);
// }
// checkId(users);

// // 📜 13
// // Напишить функцію getTotalBoysYears() яка порахує загальний вік хлопців

// const friends = [
//   { passport: '123', name: 'John', age: 22, sex: 'm' },
//   { passport: '234', name: 'Bob', age: 28, sex: 'm' },
//   { passport: '345', name: 'Max', age: 39, sex: 'm' },
//   { passport: '456', name: 'Mary', age: 24, sex: 'f' },
//   { passport: '567', name: 'Anna', age: 35, sex: 'f' },
//   { passport: '678', name: 'Monica', age: 34, sex: 'f' },
// ];

// function getTotalBoysYears(arr) {
// //   const boys = arr.filter(friend => friend.sex === 'm');
// //   const totalBoysYears = boys.reduce((total, boy) => total + boy.age, 0);
//     //   return totalBoysYears;
//       return arr
//         .filter(friend => friend.sex === 'm')
//         .reduce((total, friend) => total + friend.age, 0);
// }
// console.log(getTotalBoysYears(friends));

// // 📜 14
// // Маємо масив об'єктів, який представляє список замовлень. Перевірьте, чи всі замовлення виконані та повернить список товарів з усіх виконаних замовлень.

// const orders = [
//   { id: 1, products: ['Milk', 'Bread'], status: 'complited' },
//   { id: 2, products: ['Eggs', 'Juice'], status: 'processing' },
//   {
//     id: 3,
//     products: ['Pasta', 'Spices', 'Milk', 'Bread'],
//     status: 'complited',
//   },
// ];

// const complited = orders.every(order => order.status === 'complited');
// console.log(complited);

// const products = orders
//   .filter(order => order.status === 'complited')
//   .flatMap(order => order.products)
//   .filter((el, idx, arr) => arr.indexOf(el) === idx);
// console.log(products);

// // 📜 15
// // Маємо масив об'єктів, який представляє перелік товарів та їх цін. Потрібно знай  ти смуму вартості всіх товарівб яки коштують більше 10.
// const products = [
//   { name: 'Milk', price: 20 },
//   { name: 'Bread', price: 10 },
//   { name: 'Eggs', price: 15 },
// ];

// const total = products
//   .filter(product => product.price > 10)
//   .reduce((acc, product) => acc + product.price, 0);
// console.log(total);
