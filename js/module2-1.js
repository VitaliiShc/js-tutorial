// // // ❗️❗️❗️ Масиви
// // Масив - це колекція індексованих значень, котра починається з індексу 0. Індексована структура для сберігання та маніпулювання колекецією ОДНОТИПНИХ елементів (масив чисел, масив рядкив, масив об'ектів (вкладених масивів)). Елементи масиву записуються внутри літерала масиву - квадратних дужках ( ['', '' ] ). Тобто, квадратні дужки - це літерал, або позначення масиву (але при звернеенні до індексу рядка також викорситовуються квадратні дужки, але то сінтаксис)
// const clients = ['Mango', 'Poly', 'Ajax'];
// console.table(clients);

// Ітерабельні елементи - це сутність, яку можно перебрати по єлементах, тобто ітерабельними є массиив та рядок

// typeOf для масиву повертає object. Тобто, массив - це об'ект.
// Щоб впевнитися, що ми прцюємо з масивов застосовується метод Array.isArray() - якщо об'ект - массив, то повертається true
// const clients = ['Mango', 'Poly', 'Ajax'];
// console.log(typeof clients);
// console.log(Array.isArray(clients));

// // Отримати значення елементу масиву можна за його індексом. Тобто, для доступу до елементів виколристовується конструкція масив[індекс]. При роботі з масивом звернення до його елементів виконується по індексу.
// console.log(clients[0]); // 'Mango'
// console.log(clients[1]); // 'Poly'
// console.log(clients[2]); // 'Ajax'
// console.log(clients[3]); // undefind - немає такого

// для звертання до сотаннього елементу масиву використовується властивысть його довжини з -1:
// console.log(clients[clients.length - 1]); // 'Ajax'

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

// // цикл for перебирає всі елементи масиву. використовується, якщо є необхідність змінити елемент масиву та присвоіти йому норве значення.
// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// // цикл for...of без лічильника. Перебирає всі елементи масиву. Застосовутьс, якщо немає необхідності зміняти значення елементів масиву
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
// // При роботі з примитивами в змінної (const, let) виконується присвоення самго значяення. Та при порівнянні порівнюються значення примитиву.
// Але при роботі з масивами - браузер по літералу масива розуміє, що це масив, та виділяїє під масив комірку пам'яті та в змінної зберігає посилання на цю комірку.
// let a = 10;
// let b = a;
// console.log(a); // 10
// console.log(b); // 10
// console.log(a === b); // true
// a = 100; // перепризначили a
// console.log(a); // 100
// console.log(b); // 10 - перепризначення a було виконано після ініціалізації b, тому b залишилося колишнім
// console.log(a === b); // false - порівняння нового значяення a та колишнього b

// const a = [1, 2, 3];
// const b = a;
// console.log(a); // [1, 2, 3]
// console.log(b); // [1, 2, 3]
// console.log(a === b); // true - порівнюються посилання на одін і той же масив
// console.log([1, 2, 3] === [1, 2, 3]); // false - це різні масиви
// a[0] = 10; // перепризначення елементу масива за індексом 0
// console.log(a); // [10, 2, 3] - зміна відбулася
// console.log(b); // [10, 2, 3] - також, зміна відоображається, тому що посилання все теж на той самий масив, кий було змінено

// const a = [1, 2, 3];
// a.length = 0; // патерн обнулення (очищення) масиву
// console.log(a); // повертає пустий масив
// a[2] = 100;
// console.log(a); // empty, empty, 100 (2 * пустоб 100)
// console.log(a[0]); // undefined - елемент з індексом 0 не знайдено

// const a = [1, 2, [3, 4]]; // масив в масиві
// console.log(a[2][0]); // 3 - звернення до масиву в масиві по індексу єлемента в головному масиві, потім за індек сом єлемента во вкладенному сммасиві

// // ❗️❗️❗️ Методи
// // метод split(delimiter) - метод рядка, перетворює рядок на масив по вказаному деліметру (сепаратору) розділення елементів рядка. Повертає створений масив, але масив рядків. (дозволяє перетворити рядок на масив, "розбивши" його по роздільнику delimiter; якщо роздільник - це порожній рядок, отримаємо масив окремих символів; роздільником може бути один або кілька символів.)
// const string = 'This is a string';
// console.log(string.split(' ')); // ['This', 'is', 'a', 'string'] - розділення по пробілу
// const word = 'Hello';
// console.log(word.split('')); // ['H', 'e', 'l', 'l', 'o'] - розділення по пустому рядку, тобто познаково
// const numbers = '1,2,3,4,5';
// console.log(numbers.split(',')); // ['1', '2', '3', '4', '5'] - розділення по комі. Але повертає в виразу рядкив; для перетворення в числа необхідно виконати перебір та послідовне перетворення за допомогою ціклу for, з попереднім оголошенням змінної для одержаного масиву:
// const numbersArray = numbers.split(',');  // ['1', '2', '3', '4', '5']
// for (let i = 0; i < numbersArray.length; i += 1) {
//   numbersArray[i] = Number(numbersArray[i]);
// }
// console.log(numbersArray); // [1, 2, 3, 4, 5] - масив чисел

// // метод join(delimiter) - перетворює масив в рядкок зі вказаним деліметром (сепаратором) - зворотня операція методу split. Повертає створений рядок:
// const array = ['One', 'Two', 'Three'];
// console.log(array.join(' ')); // 'One Two Three'
// console.log(array.join(', ')); // 'One, Two, Three'

// // метод revers() - змінює (перевертає) послідовність елементів масиву. Деструктівний(!) (мутуючий) - змінює сам масив, на якому був викликаний (якщо не за ініціалізацією нової змінної), для збереження орігінального масиву метод треба виконувати на копії (робиться через splice()). Повертає змінений масив
// const array = ['One', 'Two', 'Three'];
// console.log(array); // ['One', 'Two', 'Three'];
// array.reverse();
// console.log(array); // ['Three', 'Two', 'One'];

// // метод indexOf(value) - виконується для отримання індекса шукаємого єлемента по першому збігу. Повертає індекс першого співпадіння або -1 якщо елемент не був знайдений.
// const array = ['One', 'Two', 'Three'];
// console.log(array.indexOf('Two')); // 1

// // метод includes(value) - виконує пошук вказаного значення серд елементів масиву та повертає true або false.
// const array = ['One', 'Two', 'Three'];
// console.log(array.includes('Two')); // true

// // метод push(value, value...) - додає один або кілька вказаних єлементів наприкінці масиву. Деструктівний(!), для збереження орігінального масиву метод треба виконувати на копії (робиться через splice()). Повертає довжину нову масиву
// const array = ['One', 'Two', 'Three'];
// console.log(array.push('Four')); // 4
// console.log(array); // ['One', 'Two', 'Three', 'Four']

// // метод pop() - видаляє останній елемент з масиву. Деструктівний(!), для збереження орігінального масиву метод треба виконувати на копії (робиться через splice()). Повертає вилучений елемент
// const array = ['One', 'Two', 'Three'];
// console.log(array.pop()); // 'Three'
// console.log(array); // ['One', 'Two']

// // метод unshift(value, value...) - додає один або кілька вказаних елементів на початку масиву. Деструктівний(!), для збереження орігінального масиву метод треба виконувати на копії (робиться через splice()). Повертає довжину нову масиву
// const array = ['One', 'Two', 'Three'];
// console.log(array.unshift('Four')); // 4
// console.log(array); // ['Four', 'One', 'Two', 'Three']

// // метод shift() - видаляє перший елемент з масиву. Деструктівний(!), для збереження орігінального масиву метод треба виконувати на копії (робиться через splice()). Повертає вилучений елемент
// const array = ['One', 'Two', 'Three'];
// console.log(array.shift()); // 'One'
// console.log(array); // ['Two', 'Three']

// // метод slice(begin, end) - відокремлює та копіює набір елементів з масиву з позіції begin за індексом включно і до позіції end за індексом не включно. Як і для рядка, можно використовувати від'емне значення початку та кінця. Якщо end не вказанго, то відокремлення виконується до кінця масиву (таким чином можена зробити копію всього масиву slice(0)). Повертає новий масив із вилучених елементів. Не деструктівний
// const array = ['One', 'Two', 'Three', 'Four'];
// console.log(array.slice(1, 3)); // ['Two', 'Three']
// console.log(array.slice(1)); // ['Two', 'Three', 'Four']
// console.log(array.slice(0)); // ['One', 'Two', 'Three', 'Four']
// console.log(array); // ['One', 'Two', 'Three', 'Four']

// // метод splice(start, deleteCount, item0, item1...) - видалє, додає, змінює елементи масиву. start - індекс позіції з якої починається змана включно, deleteCount - кількість елементів для видалення, item0 - елемеиент, що додається (можу бкти кілька). Деструктивний(!) - змінює масив, на котором викликається, для збереження орігінального масиву метод треба виконувати на копії (робиться через splice()). Повертає масив ВИЛУЧЕНИХ елементів
// const cards = ['Card1', 'Card2', 'Card3', 'Card4', 'Card5'];

// // видалити 'Card2'і 'Card3' - 2 єлемента з позіції за індексом 1:
// console.log(cards.splice(1, 2)); // ['Card2', 'Card3'] - повертає масив вилучених елементів
// console.log(cards); // ['Card1', 'Card4', 'Card5'] - масив змінився

// // видалити 'Card4' ([3] 1 шт) та додати 'Card6', 'Card7'
// console.log(cards.splice(3, 1, 'Card6', 'Card7')); //  ['Card4'] - повертає масив вилучених елементів
// console.log(cards); // ['Card1', 'Card2', 'Card3', 'Card6', 'Card7', 'Card5'] - масив змінився, нові картки додалися на місце вилученного елемента

// // додання без вилучання - вказується з якого індексу додавати, та вмдаляти 0 елементів
// console.log(cards.splice(3, 0, 'Card6', 'Card7')); //  [] - повертає пустий масив(нічого не вилучено)
// console.log(cards); // ['Card1', 'Card2', 'Card3', 'Card6', 'Card7', 'Card4', 'Card5'] - масив змінився, нові картки додалися на місце за індексом 3

// // метод concat(value1, value2) - об'еднує масиви, не деструктивний - повертає новий масив, для збереження орігінального масиву метод треба виконувати на копії (робиться через splice()). Додавання виконується до масиву, на якому був визкваний метод та у вказаной черзі
// console.log([1,2,3].concat([4, 5], [6, 7])); // [1, 2, 3, 4, 5, 6, 7]
// const arr0 = ['Hello', 'world'];
// const arr1 = [1, 2];
// const arr2 = [[3, 4], ['!']];
// console.log(arr0.concat(arr1, arr2)); // ['Hello', 'world', 1, 2, [3, 4], ['!']]
// console.log(arr0.concat(arr2, arr1)); // ['Hello', 'world', [3, 4], ['!'], 1, 2]
// console.log(arr0.concat(arr1, arr1)); // ['Hello', 'world', 1, 2, 1, 2]
// // Для розвертання вкладених в масив масивів (створити однорівневий масив, якщо існують вкладені в масив масиви) потрібно звернутися до них внутрі методу:
// console.log(arr0.concat(arr2[1])); // ['Hello', 'world', '!']
// console.log(arr0.concat(arr1, arr2[0], arr2[1])); //  ['Hello', 'world', 1, 2, 3, 4, '!']
