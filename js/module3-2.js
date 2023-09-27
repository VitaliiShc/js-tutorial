// // ❗️❗️❗️ Синтаксис spread
// // spread дозволяє розподіляти кілька ітерабельних сутностей в одну. Операція розподілу завжди знаходиться в правої частині операції присвоювання, праворуч від ( = )

// // ...spread : передача аргументів
// // Операція ...spread дозволяє передати масив, рядок або об'єкт у вигляди набора окремих значень для проведення операцій з ними. Тобто, повертає набір елементів з розпакованого масиву. Наприклад, передати масив значень у вигляді набора елементів для порівняння:
// // вивести найменше число
// const temps = [1, 2, 3, 4, -5];
// console.log(temps);
// // функція Math.max не працює з масивом:
// // console.log(Math.max(temps)); // NaN
// console.log(...temps); // 1 2 3 4 -5 (виведе набір чисел які можна використовувати як аргументи для виконання функції)
// console.log(Math.max(...temps)); // 4
// // тобто, масив [1, 2, 3, 4, -5] після інтерпретації перетворюється в набір аргументів для виконання порівняння (Math.max(1, 2, 3, 4, -5))

// // ...spread : створення нового масиву
// // Операція дозволяє скопіювати масив або склеїти кілька масивів. Дозволяє виконувати операції на кшталт slice() або concat(), але зі скороченим синтаксисом. Повертає новий масив
// const array0 = [1, 2, 3];
// const array1 = [4, 5];
// // Копіювання:
// const copyArray0 = [...array0];
// console.log(copyArray0); // [1, 2, 3]
// // Склеювання:
// const allArrays = [...array0, ...array1];
// console.log(allArrays); // [1, 2, 3, 4, 5]

// операція spread зібрає всі передані колекції або примітиви як окремі незалежні значення в одну нову колекцію.

// // const array = [...[1, 2, 3], 4, 5];
// // console.log(array); // [1, 2, 3, 4, 5]

// // const numbers = [...[1, 2, 3], 4, 5];
// // console.log(Math.max(...numbers)); // 5

// // аналог concat
// const arr0 = [1, 2, 3];
// const arr1 = [4, 5, 6];
// const arr2 = [7, 8, 9];
// const arrRes = [...arr0, ...arr1, ...arr2]; // spread
// const arrConc = arr0.concat(arr1, arr2); // concat

// console.log(arrRes); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(arrConc); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// // ...spread : створення нового об'єкту
// // дозволяє розподілити властивості кількох об'єктів в один новий. Повертає новий об'єкт. Якщо імена властивостей збігаються, то буде застосована одна властивість зі значенням, яке "прийшло" пізніше:
// const obj0 = {
//     a: 1,
//     b: 2,
//     c: 3,
// };
// const obj1 = {
//     c: 4,
//     d: 5,
// };

// const multiObj0 = { ...obj0, ...obj1 }
// console.log(multiObj0) // {a: 1, b: 2, c: 4, d: 5}
// const multiObj1 = { ...obj1, ...obj0 }
// console.log(multiObj1) // {c: 3, d: 5, a: 1, b: 2}

// // також при розподілу можна додати додаткові властивості
// const multiObj2 = { ...obj0, ...obj1, e: 6 }
// console.log(multiObj2) // {a: 1, b: 2, c: 4, d: 5, e: 6}

// // ❗️❗️❗️ Синтаксис rest
// // операція rest - збирання - дозволяє зібрати групу незалежних елементів в одну колекцію, але троекрапіе збирання знаходиться в лівої частині операції присвоєння.

// // ...rest : збирання всіх аргументів функції - створює масив (колекцію) всіх переданих в функцію аргументів. Повертає масив:

// function multiply(...args) {
//     console.log(args);
// }
// multiply(1, 2, 3); // [1, 2, 3]
// multiply('one', 'two', 'three'); // ['one', 'two', 'three']

// // ...rest : збирання частини аргументів функції - дозволяє зібрати тільки частину аргументів, оголосивши окремі аргументи до оголошення збирання. Повертає окремо значення аргументів до оголошення збирання та масив останніх елементів:

// function multiply(firstNum, secondNum, ...otherArgs) {
//   console.log(firstNum); // 1
//   console.log(secondNum); // 2
//   console.log(otherArgs); // [3] та [3, 4, 5, 6]
// }
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4, 5, 6);

// // ❗️❗️❗️ Деструктуризація об'єктів
// Деструктуризація бере те, що праворуч від рівно, та записує в те, що ліворуч від рівно.
// // дозволяє оголосити змінні з ключів об'єкту, та використовувати їх без звернення до назви об'єкту:
// // без деструктуризації
// const user = {
//     name: 'Vitalii',
//     age: 46,
// }

// console.log(`My name is ${user.name}. I'm ${user.age} y.o.`) // My name is Vitalii. I'm 46 y.o

// // з деструктуризаціею
// const user = {
//   name: 'Vitalii',
//   age: 46,
// };
// const { name, age, address } = user; // фігурні дужки зліва від знаку рівності - операція деструктуризації
// console.log(`My name is ${name}. I'm ${age} y.o. I live in ${address}`); // My name is Vitalii. I'm 46 y.o. I live in undefined
// console.log(address); // undefind - такої властивості немає

// // для змінної, для якої не знайдено властивості (undefind) можна задати значення по дефолту:
// const user = {
//   name: 'Vitalii',
//   age: 46,
// };
// const { name, age, address = 'Kyiv' } = user;
// console.log(`My name is ${name}. I'm ${age} y.o. I live in ${address}.`); // My name is Vitalii. I'm 46 y.o. I live in Kyiv.

// // під час деструктцризації можна змінити ім'я змінної, в яку додається значення властивості, використовуючи синтаксис key:newName (читається як "створити змінну newName в яку помістити значення властивості key з об'єкту user)
// const user = {
//   name: 'Vitalii',
//     age: 46,
//   address: 'Kyiv',
// };
// const { name, age, address:location } = user;
// console.log(`My name is ${name}. I'm ${age} y.o. I live in ${location}.`); // My name is Vitalii. I'm 46 y.o. I live in Kyiv.

// якщо необхідно перейменувати змінну та ще і додати дефолтне значення, то так:
// // const user = {
//   name: 'Vitalii',
//   age: 46,
// };
// const { name, age, address: location = 'Kyiv'} = user;

// // Деструктуризація в циклах
// // при переборі масиву об'єктів циклом for...of утворюються багаторазові звернення до властивостей об'єкта
// const users = [
//   {
//     name: 'Vitalii',
//     age: 46,
//     address: 'Kyiv',
//   },
//   {
//     name: 'Inna',
//     age: 27,
//     address: 'Kyiv',
//   },
// ];

// // for (const user of users) {
// //   console.log(
// //     `My name is ${user.name}. I'm ${user.age} y.o. I live in ${user.address}.`
// //   );
// // }

// // для скорочення кількості повторень ("user") можна деструктуризовати властивості об'єкта в локальної змінної в тілі циклу

// for (const user of users) {
//   const { name, age, address } = user;
//   console.log(`My name is ${name}. I'm ${age} y.o. I live in ${address}.`);
// }

// // або одразу в місці оголошення змінної циклу (замість оголошення змінної перебору) - якщо властивостей не багато
// for (const { name, age, address } of users) {
//   console.log(`My name is ${name}. I'm ${age} y.o. I live in ${address}.`);
// }

// // Глибока деструктуризація
// // Для деструктуризації вкладених об'єктів використовуються ті ж принципи
// const user = {
//   name: 'Vitalii',
//   age: 46,
//   address: {
//     country: 'Ukraine',
//     city: 'Kyiv',
//   },
// };
// const {
//   name,
//   age,
//   address: { country, city },
// } = user;
// console.log(
//   `My name is ${name}. I'm ${age} y.o. I live in ${city}, ${country}.`
// );

// // Деструктурізація масивів
// // Для деструктуризаціі масивів використовуються квадратні дужки ( [] ). Змінним, зазначеним у дужках будуть послідовно присвоєні значення елементів масиву.
// const rgb = [200, 255, 100];
// const [red, green, blue] = rgb; // створюються 3 змінні яким присвоюються значення з масиву в індексованому порядку
// console.log(`R: ${red}, G: ${green}, B: ${blue}`);

// // також (альтернативний варіант) присвоєння значень після оголошення змінних:
// const rgb = [200, 255, 100];
// let red, green, blue;
// [red, green, blue] = rgb;
// console.log(`R: ${red}, G: ${green}, B: ${blue}`);

// // якщо змінних більше, ніж елементів масиву, то зайвої змінної буде присвоєно undefine, тому необхідно додавати дефолтне значення.
// const rgb = [200, 255, 100];
// const [red, green, blue, alfa = 0.3] = rgb; // створюються 3 змінні яким присвоюються значення з масиву в індексованому порядку
// console.log(`R: ${red}, G: ${green}, B: ${blue}. Alfa: ${alfa}`);

// // У випадках, коли необхідно деструктуризувати тільки кілька перших елементів масиву, а інші зберегти у вигляді масиву, використовується операція ...rest
// const rgb = [200, 255, 100];
// const [red, ...colors] = rgb;
// console.log(red); // "200"
// console.log(colors); // [255, 100]

// // іноді потрібно взяти властивість з середини або кінця масиву, в таких випадках створення змінних пропускається - для них немає змінної:
// const rgb = [200, 255, 100];
// const [, green, ] = rgb;

// // // Патерн "Об'єкт параметрів"
// // в функцію зручно передавати не окремі параметри, коли їх багато, а одразу об'єкт з іменованими властивостями - з деструктуризацією одразу після передавання:
// const user = {
//   name: 'Vitalii',
//   age: 46,
//   address: {
//     country: 'Ukraine',
//     city: 'Kyiv',
//   },
// };
// // function aboutMe(user) {
// //   console.log(user.name);
// // }

// aboutMe({
//   name: 'Vitalii',
//   age: 46,
//   address: {
//     country: 'Ukraine',
//     city: 'Kyiv',
//   },
// });

// // Також можна деструктуризовати об'єкт в тілі функції
// function aboutMe(user) {
//   const {
//     name,
//     age,
//     address: { country, city },
//   } = user;
//   console.log(name);
// }
// aboutMe({
//   name: 'Vitalii',
//   age: 46,
//   address: {
//     country: 'Ukraine',
//     city: 'Kyiv',
//   },
// });

// // або одразу в сигнатурі функції
// function aboutMe({ name, age, address: { country, city } }) {
//   console.log(name);
// }
// aboutMe({
//   name: 'Vitalii',
//   age: 46,
//   address: {
//     country: 'Ukraine',
//     city: 'Kyiv',
//   },
// });

// // ❗️❗️❗️ Object.assign() - використовується для створення нового об'єкта з переданих. Аналогічно spread, але метод деструктивний, тобто змінює об'єкт, на котрому він викликається
// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };
// const c = Object.assign( a, b );
// console.log(c); // {x: 0, y: 2, z: 3} - змінено c

// // або зібрати об'єкти в новий об'єкт
// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };
// const c = Object.assign({ a, b });
// console.log(c); // {a: {x: 1, y: 2}, b: {x: 0, z: 3}}
