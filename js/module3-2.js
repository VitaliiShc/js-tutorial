// // ❗️❗️❗️ Синтаксис spread
// // spread дозволє розподіляти кілька ітерабельних сутностей в одну. Операція розподілу зхавжди знаходиться в правої частині операції оперції присвоювання, праволруч від ( = )

// // ...spread : передача аргументів
// // Операція ...spread дозволяє передати масив, рядок або об'ект у вигляди набора окремих значень для проведення операцій з ними. Тобто, повертає набір елементів з розпакованого масива. Наприклад, передати масив значень у вигляді набора елементів для порівняння:
// // вивести найменьшне число
// const temps = [1, 2, 3, 4, -5];
// console.log(temps);
// // функція Math.max не працює з масивом:
// // console.log(Math.max(temps)); // NaN
// console.log(...temps); // 1 2 3 4 -5 (віведе набір чисел яки можна використовувати як аргументи для виконання функції)
// console.log(Math.max(...temps)); // 4
// // тобто, масив [1, 2, 3, 4, -5] після інтерпретації перетворюється в набір аргументів для виконання порівняння (Math.max(1, 2, 3, 4, -5))

// // ...spread : створення нового масиву
// // Операція дозволяє скопіювати масив або склеіти кылька масивів. Дозволяє виконувати операції накшталт slice() або concat(), але зі скороченим синтаксисом. Повертає новий масив
// const array0 = [1, 2, 3];
// const array1 = [4, 5];
// // Копіювання:
// const copyArray0 = [...array0];
// console.log(copyArray0); // [1, 2, 3]
// // Скліювання:
// const allArrays = [...array0, ...array1];
// console.log(allArrays); // [1, 2, 3, 4, 5]

// операція spread збірає всі передані колекції або примитиви як окреми незалежні значення в одну нову колекцію.

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

// // ...spread : створення нового об'екту
// // дозволяє розподілити властивості кількох об'ектів в один новий. Повертає новий об'ект. Якщо імена властивостей збігаються, то буде застосована одна властивість зі значенням, яке "прийшло" пізніше:
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
// // операція rest - збірання - дозволяє зібрати группу незалежних елементів в одну колекцию, але троекрапіе збірання знаходиться в лівої частині операції присвоення.

// // ...rest : збірання всіх аргументів функції - створює масив (колекцію) всіх переданих в функцію аргументів. Повертає масив:

// function multiply(...args) {
//     console.log(args);
// }
// multiply(1, 2, 3); // [1, 2, 3]
// multiply('one', 'two', 'three'); // ['one', 'two', 'three']

// // ...rest : збірання частини аргументів функції - дозволяє зібрати тільки частину аргументів, оголосивши окреми аргументи до оголошення збірання. Повертає окремо значення аргументів до оголошення сбірання та масив останніх елементів:

// function multiply(firstNum, secondNum, ...otherArgs) {
//   console.log(firstNum); // 1
//   console.log(secondNum); // 2
//   console.log(otherArgs); // [3] та [3, 4, 5, 6]
// }
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4, 5, 6);

// // ❗️❗️❗️ Деструктуризація об'ектів
// Деструктурізація бере те, що праворуч від рівно, та записує в те, що ліворуч від рівно.
// // дозволяє оголосити змінні з ключів об'екту, та використовувати іх без звернення до назви об'екту:
// // без деструктурізаціі
// const user = {
//     name: 'Vitalii',
//     age: 46,
// }

// console.log(`My name is ${user.name}. I'm ${user.age} y.o.`) // My name is Vitalii. I'm 46 y.o

// // з деструктурізаціею
// const user = {
//   name: 'Vitalii',
//   age: 46,
// };
// const { name, age, address } = user; // фігурні дужуи зліва від знака рівності - операція деструктурізації
// console.log(`My name is ${name}. I'm ${age} y.o. I live in ${address}`); // My name is Vitalii. I'm 46 y.o. I live in undefined
// console.log(address); // undefind - такой властивості немає

// // для змінної, для якої не знайдено властивості (undefind) можна задати значення по дефолту:
// const user = {
//   name: 'Vitalii',
//   age: 46,
// };
// const { name, age, address = 'Kyiv' } = user;
// console.log(`My name is ${name}. I'm ${age} y.o. I live in ${address}.`); // My name is Vitalii. I'm 46 y.o. I live in Kyiv.

// // під час деструктцрізації можна змініти ім'я змінної, в яку додаеться значення властивості, використовуючи синтаксис key:newName (читається як "створити змінну newName в яку помістити значення властивості key з об'екту user)
// const user = {
//   name: 'Vitalii',
//     age: 46,
//   address: 'Kyiv',
// };
// const { name, age, address:location } = user;
// console.log(`My name is ${name}. I'm ${age} y.o. I live in ${location}.`); // My name is Vitalii. I'm 46 y.o. I live in Kyiv.

// якщо необхідно перйменувати змінну та ще і додати дефолтне значення, то так:
// // const user = {
//   name: 'Vitalii',
//   age: 46,
// };
// const { name, age, address: location = 'Kyiv'} = user;

// // Деструктцрізація в циклах
// // при переборі масива об'ектів циклом for...of утворюються багаторазові звернення до властивостей об'екта
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

// // для скорочення кількості повторень ("user") можна деструктурізовати властивості об'екта в локальної змінної в тілі циклу

// for (const user of users) {
//   const { name, age, address } = user;
//   console.log(`My name is ${name}. I'm ${age} y.o. I live in ${address}.`);
// }

// // або одразу в місці оголошення змінної циклу (замісць оголошення змфнной перебору) - якщо властивостей не багато
// for (const { name, age, address } of users) {
//   console.log(`My name is ${name}. I'm ${age} y.o. I live in ${address}.`);
// }

// // Глибока деструктурізація
// // Для деструктурізації вкдаженних об'ектів ввикористовуються тіж принципи
// const user = {
//   name: 'Vitalii',
//   age: 46,
//   address: {
//     country: 'Ukrain',
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
// // Для деструктурізаціі масивів використовуються квадратні дужки ( [] ). Змінним, зазаначеним у дужках будут послідовно присвоєні значення єлементів масиву.
// const rgb = [200, 255, 100];
// const [red, green, blue] = rgb; // створюються 3 змінніб яким присвоюються значення з масиву в індексованому порядку
// console.log(`R: ${red}, G: ${green}, B: ${blue}`);

// // також (альтернативний варіант) присвоення значень після оголошення змінних:
// const rgb = [200, 255, 100];
// let red, green, blue;
// [red, green, blue] = rgb;
// console.log(`R: ${red}, G: ${green}, B: ${blue}`);

// // якщо змінних більше, ніж елементів масиву, то зайвої змівнної буде присвоено undefine, тому необходно дождавати дефолтне значення.
// const rgb = [200, 255, 100];
// const [red, green, blue, alfa = 0.3] = rgb; // створюються 3 змінніб яким присвоюються значення з масиву в індексованому порядку
// console.log(`R: ${red}, G: ${green}, B: ${blue}. Alfa: ${alfa}`);

// // У випадках, коли необхідно деструктуризувати тільки кілька перших єлесентів масиву, а інши зберегти у вигляді масиву, використовується операція ...rest
// const rgb = [200, 255, 100];
// const [red, ...colors] = rgb;
// console.log(red); // "200"
// console.log(colors); // [255, 100]

// // іноді потрібно взяти властівість з середини або кінця масиву, в таких випадках створення змінних пропускаеться - для них немає змінної:
// const rgb = [200, 255, 100];
// const [, green, ] = rgb;

// // // Патерн "Об'ект параметрів"
// // в функцію зруцчно передавати не окрми параметри, коли іх багато, а одрузу об'ект з іменованимі властивостями - з деструктурізацією одрузк після передавання:
// const user = {
//   name: 'Vitalii',
//   age: 46,
//   address: {
//     country: 'Ukrain',
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
//     country: 'Ukrain',
//     city: 'Kyiv',
//   },
// });

// // Також можна деструктурізовати об'ект в тілі функції
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
//     country: 'Ukrain',
//     city: 'Kyiv',
//   },
// });

// // або одразу в сфгнатурі функції
// function aboutMe({ name, age, address: { country, city } }) {
//   console.log(name);
// }
// aboutMe({
//   name: 'Vitalii',
//   age: 46,
//   address: {
//     country: 'Ukrain',
//     city: 'Kyiv',
//   },
// });

// // ❗️❗️❗️ Object.assign() - використовується для створення нового об'екта з переданих. Аналогічно spread, але метод деструктиіний, тобто зхмінює об'ект, на котрому він викликається
// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };
// const c = Object.assign( a, b );
// console.log(c); // {x: 0, y: 2, z: 3} - змінено c

// // або зібрати об'екты в новий об'ект
// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };
// const c = Object.assign({ a, b });
// console.log(c); // {a: {x: 1, y: 2}, b: {x: 0, z: 3}}
