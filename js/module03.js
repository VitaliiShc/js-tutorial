// // ❗️❗️❗️ Об'єкти
// // Об'єкт - це головна сутність в JS. Масив та функція є приватними випадками об'єктів. Об'єкт дозволяє згрупувати та описати характеристики певних сутностей (книга, користувач, аудіотрек...). Об'єкт містить в собі властивості описуваної сутності у вигляді імені властивості та її значення (ключ: значення, key: value).
// Об'єкт це не індексована, та не ітерабельна сутність. Звернення до властивостей виконується до ключах, та їх місце в об'єкті не має значення.
// масиви та функції - це особисті випадки об'єктів
// console.dir() // повертає сутність у вигляді об'єкту

// // Створення об'єкту, літерал об'єкту
// // Літералом об'єкта е фігурні дужки ( {} ). Об'єкти можуть існувати тільки справа від знаку рівно ( = ) - операція присвоєння (таким чином створюється об'єкт), а також після операцій присвоєння: передача аргументу (присвоєння) в параметр функції, та повернення об'єкта після виконання функції

// // 1
// const obj = {}; // операція присвоєння та створення об'єкту

// // 2
// // console.log({}); //  з передача об'єкту для використання в функції, де виконується операція присвоєння аргументу як об'єкта в параметрі функції
// const fn = function (myObject) {
//   // myObject = { a: 1 } // присвоєння - аргумент записується в параметр
//   console.log(myObject);
// };
// fn({ a: 1 });

// // 3
// const rtrn = function() {
//   return {}; // повернення об'єкта, отриманого при виконанні функції
// }

// Властивості
// Кожен об'єкт описується за допомогою властивостей, які складаються з ключа (key) та його значення (value). Семантично, назва ключа це рядок (тому при роботі з ключами об'єкта до них потрібно звертатися як к рядку). Значенням властивості може бути що завгодно: примітив (рядки, числа, булі, null і undefined) або складні типи(масив, об'єкт (вкладений), який в свою чергу теж має властивості), а також функції (які використовуються для роботи з властивостями цього об'єкту). Властивості перераховуються через кому - обов'язково на в кінці кожної властивості, навіть для останньої

// const user = {
//   name: 'Vitalii',
//   age: 45,
//   skills: {
//     html: true,
//     css: true,
//     js: true,
//     nodeJs: false,
//   },
//   hobby: ['hiking', 'computer programming'],
//   fn() {
//     console.log(`${this.name} - ${this.age} y.o.`);
//   },
// };
// //

// // звернення до властивостей (через крапку)
// // для доступу до властивості використовуються 2 методи: через крапку та через квадратні дужки. Через крапку:
// console.log(user.name); // 'Vitalii'
// // також можна звернутися до вкладеної властивості:
// console.log(user.skills.html); // true
//  user.fn(); // 'Vitalii - 46 y.o.'

// // звернення до властивостей через квадратні дужки. В такому випадку виконується звернення до ключа на кшталт звернення до індексу в масиві.
// console.log(user['name']); // 'Vitalii' - в такому випадку для звернення до ключа в дужках його назва вказується як рядок.
// // Через дужки виконується звернення до ключа властивості в тих випадках, коли заздалегідь не відома його назва (наприклад, вона вирахувана зі змінної при переборі в циклі)

// // додавання ключів. Для додавання ключів в об'єкт виконується операція присвоєння:
// user.hasChildren = true;

// // видалення властивості
// delete user.hasChildren;

// // зміна значення властивості. Для зміни значення властивості також використовується операція присвоєння - якщо така властивість існує - значення змінюється, якщо не існує -властивість додається:
// user.age = 46;

// // для зміни складної властивості використовуються методи той властивості, яку потрібно змінити:
// user.skills.react = false;
// user.hobby.push('WOT');
// console.dir(user);

// коротке звернення до властивості (shorthand properties)
// В випадках, коли в об'єкт необхідно додати властивість зі однойменної змінної, використовується коротке звернення:

// const name = 'Vitalii';
// const age = 46;

// const user = {
// //   name: name, // ім'я властивості ідентично змінної, з якої береться значення
// //   age: age, //  ім'я властивості ідентично змінної, з якої береться значення
//   name, // коротке звернення
//   age, // коротке звернення
// };

// console.dir(user); // результат в обох випадках однаковий, але коротке звернення зручніше та частіше використовується

// обчислювані властивості (computed properties).
// Бувають випадки, якщо нам заздалегідь ми не знаємо, то му що воно може зберігатися у якості значення змінної або бути передана нам в якості результату виконання функції. В такому випадку може бути використано 2 підходи:

// Застарілий:
// // оголошення змінної з назвою властивості, яку необхідно додати:
// const propName = 'name';
// // створення об'єкта
// const user = {
//     age:46,
// }
// // отримання значення для властивості з функції
// user[propName] = 'Vitalii';
// console.dir(user);

// Сучасний:
// // оголошення змінної з назвою властивості, яку необхідно додати:
// const propName = 'name';
// // створення об'єкта
// const user = {
//   age: 46,
//   // ім'я властивості буде взято зі значення propName:
//     [propName]: 'Vitalii',
// };
// console.dir(user);

// // ❗️❗️❗️ Методи об'єкта
// // Для об'єкта можуть бути додані методи або функції, які будуть використовуватися саме для обробки властивостей та їх значень того самого об'єкта. Якщо властивість об'єкта - це функція, то вона зветься методом об'єкта.

// // Доступ до властивостей об'єкта в методах (this). При використанні функції-метода об'єкта для неї використовується ключове слово 'this'. 'this' виконує операції з тім об'єктом, котрий його викликає - особливо наявно при роботі з прототипнима об'єктами.

// const user = {
//   name: 'Vitalii',
//   age: 45,
//   skills: {
//     html: true,
//     css: true,
//     js: true,
//     nodeJs: false,
//   },
//   hobby: ['hiking', 'computer programming'],
//   getNameAge() {
//     console.log(`${this.name} - ${this.age} y.o.`);
//   },
//   getCountHobby() {
//     return this.hobby.length;
//   },
// };
// // user.getNameAge(); // 'Vitalii - 46 y.o.'
// // console.log(user.getCountHobby()); // 2

// // ❗️ Цикл for...in
// // В зв'язку з тим, що об'єкт то не ітерабельний елемент, то для нього не підходе цикл перебору for...of. На зміну його використовується цикл пошуку for...in - для перебору ключів об'єкту та отримання їх назв та/або значень (нібито ітерування по ключах):
// for (const key in object) {
//     // інструкція
// }

// const user = {
//   name: 'Vitalii',
//   age: 45,
//   skills: {
//     html: true,
//     css: true,
//     js: true,
//     nodeJs: false,
//   },
//   hobby: ['hiking', 'computer programming'],
//   getNameAge() {
//     console.log(`${this.name} - ${this.age} y.o.`);
//   },
//   getCountHobby() {
//     return this.hobby.length;
//   },
// };

// for (const key in user) {
//   // ключ
//   console.log(key);
//   // значення
//   console.log(user[key]);
// }

// // ❗️ Метод Object.create()
// // Створює новий об'єкт на основі прототипу. Наслідує, але не додає в новий об'єкт значення прототипу. Але при зміні властивостей, власних прототипу, створює власну, змінену властивість.
// const user0 = {
//   name: 'Vitalii',
//   age: 46,
// };
// // console.log(user0);
// const user1 = Object.create(user0);
// user1.name = 'Denys';
// user1.age = 0;
// user1.stat = 'inFuture';
// console.log(user1); // Змінено тільки ім'я, все останнє береться з прототипу

// // ❗️ Прототипне наслідування
// // Якщо об'єкт створено з прототипу, то при виводі його в консоль відображаються всі його властивості, як особисті так і наслідувані.

// // ❗️ Метод hasOwnProperty()
// // Повертає буль приналежності властивості тої сутності (об'єкту) для котрого він викликаний (при роботі з прототипованими об'єктами). Використовується при переборі за допомогою for...in для відображення значень лише власних властивостей

// for (let key in user1) {
//   if (user1.hasOwnProperty[key]) {
//     console.log(user1[key]); // Denys (??? не зрозуміло, чому тільки 1 значення повертає)
//   }
// }

// console.log(user1.hasOwnProperty(stat)); // false

// // ❗️ Метод Object.keys()
// // Повертає масив власних ключів об'єкту ['key0', 'key1', ... 'keyZ']
// console.dir(Object.keys(user));
// console.dir(Object.keys(user2));

// // ❗️ Метод Object.values()
// // Повертає масив значень власних ключів об'єкта ['value0', 'value1',...'valueZ']

// // ❗️ Метод Object.entries()
// // Повертає масив зі значенням ['key', 'value']

// // ❗️ Метод Object.freeze()
// // "Заморожує" вказаний об'єкт - захищає його від будь якої зміни

// // ❗️ Метод Object.assign()
// // Дозволяє зробити копію об'єкта (одного або кількох - злиття) зі всіма властивостями в новий об'єкт. Умовно, мутуючий
// // Object.assign(target, ...sources)
// // target - цільовий об'єкт (куда копіювати)
// // sources - вихідні об'єкти (звідки копіювати)

// // Клонування:
// const obj1 = { a: 1, };
// const copyObj1 = Object.assign({}, obj1);
// console.log(copyObj1); // { a: 1 }

// // Злиття
// const obj2 = { b: 2, };
// const obj3 = { c: 3 };
// const obj4 = Object.assign({}, obj1, obj2, obj3);
// console.log(obj4); // {a: 1, b: 2, c: 3}

// // Додавання нових властивостей до об'екту
// const obj = { a: 1, };
// Object.assign(obj, { b: 2, c: 3 });
// console.log(obj); // {a: 1, b: 2, c: 3} - мутування об'єкту

// // ❗️❗️❗️ Перевірка наявності властивостей

// // Опціональний ланцюжок
// // Для перевірки, чи є вкладені властивості (об'єкт в об'єкті):

// const user = {
//   name: 'Vitalii',
//   address: {
//     city: 'Kiyv',
//     street: 'Nyvska',
//   },
// };

// // console.log(user.address.city); // 'Kiyv' - якщо властивість є, але якщо властивості немає (закоментовано), то буде помилка 'Cannot read properties of undefined (reading 'city')'; для того, щоб цього не траплялось, використовується опціональний ланцюжок:
// console.log(user?.address?.city); // undefined - немає, 'Kiyv' - є

// // Оаператор in. Корисно у випадках, коли властивісь є, але вона undefined
// const user = { name: 'Vitalii', age: undefined };
// if ('name' in user) {
//   console.log(user.name); // 'Vitalii'
// }
// if ('address' in user) {
//   console.log(user.address); // ничого не повретає
// }
// if ('age' in user) {
//   console.log(user.age); // undefined (властивість є, але значення не задано)
// }

// //  * id: Date.now() - оголошення id по поточної даті в мілісекундах

// // ❗️❗️❗️ Масив об'єктів
// // Набір об'єктів з однаковима властивостями та, можливо, різними значеннямі, з якима можливи манипуляції (перебір for...of) для отримання певних резульитатів та/або значень

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
