// // // ❗️❗️❗️ Масиви
// // Індексована структура для сберігання та маніпулювання колекецією ОДНОТИПНИХ елементів (масив чисел, масив рядкив, масив об'ектів (вкладених масивів)). Те що зправа, в квадратних дужках, звется літералами масива. Літерали - значення кожного елементу набору
// const clients = ['Mango', 'Poly', 'Ajax'];
// console.table(clients);

// // Отримати значення елементу масиву можна за його індексом. Тобто, для доступу до елементів виколристовується конструкція масив[індекс].
// console.log(clients[0]); // 'Mango'
// console.log(clients[1]); // 'Poly'
// console.log(clients[2]); // 'Ajax'
// console.log(clients[3]); // undefind - немає такого

// // Елементи в масиву можна перевизначити, тобто призначити інше значення для єлементу, звернувшись до нього зя індексом. Виконується не перезапис обо перепризначення змінної масиву, а змінюється тільки його елемент. Тобто, назва масиву - це ніби посилання на об'ект (масив) та виконується зміна в об'екті
// clients[0] = 'Kiwi';
// clients[1] = 'Pango';
// console.log(clients); // ["Kiwi", "Pango", "Ajax"] // замість ['Mango', 'Poly', 'Ajax']

// // Довжина масиву повертається властивістью length
// console.log(clients.length); // 3

// //Індекс останнього елементу масиву можна отримати за формулою 'довжина - 1'
// const lastElementIndex = clients.length - 1;
// console.log(lastElementIndex); // 2
// console.log(clients[lastElementIndex]); // 'Ajax'
// console.log(clients[clients.length - 1]); // 'Ajax'

// // Ітерация (цикл) по масиву
// // цикл for перебирає всі елементи масиву
// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// // цикл for...of без лічильника. Перебирає всі елементи масиву
// // for (const variable of iterable) { тіло циклу }
// // variable - змінна, яка буде зберігати значння ітерабельного елемента на кожній ітерації
// // iterable - назва масива або рядка, в якому потрібно шукати ітерабельні елементи
// const clients = ['Mango', 'Ajax', 'Poly'];
// for (const client of clients) {
//   console.log(client);
// }

// const string = 'javascript';
// for (const character of string) {
//   console.log(character);
// }

// оператор break перериває цикл після (обов'язково!) знаходження заданого елемента
// шукаємо в масиві елемент 'Poly'
// const clients = ['Mango', 'Ajax', 'Poly'];
// const clientNameToFind = 'Poly';
// let message;

// for (const client of clients) {
//   // на кожній ітерації буде перевірятися назва елементу, коли знайдено - виіодиться повідомлення message, та закінчується виконання ціклу
//   if (client === clientNameToFind) {
//     message = `It's ${client}`;
//     break;
//   }
//   // якщо не знайдено
//   message = `Елемент ${clientNameToFind} не знайдено`;
// }
// console.log(message);

// рефакторінг коду - задати message по дефолту при хібному пошуку, а якщо знайдено - перевизначення

// const clients = ['Mango', 'Ajax', 'Poly'];
// const clientNameToFind = 'Poly';
// let message = `Елемент ${clientNameToFind} не знайдено`;
// for (const client of clients) {
//   if (client === clientNameToFind) {
//     message = `It's ${client}`;
//     break;
//   }
// }
// console.log(message);

// // оператор continue перериває поточну ітерацію, та продовжує цикл далі.
// // вивід чисел більших за певне значення

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;
// // для чисел, меньших за порогове застосовується continue та дії поточной ітерації не виконуються
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }
//   console.log(`Число ${numbers[i]} бильше за ${threshold}`);
// }

// // ❗️❗️❗️ Присвоєння за посиланням і за значенням
