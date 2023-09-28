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

// ❗️❗️❗️ Методи об'єкта
// Для об'єкта можуть бути додані методи або функції, які будуть використовуватися саме для обробки властивостей та їх значень того самого об'єкта. Якщо властивість об'єкта - це функція, то вона зветься методом об'єкта.

// Доступ до властивостей об'єкта в методах (this). При використанні функції-метода об'єкта для неї використовується ключове слово 'this'. 'this' виконує операції з тім об'єктом, котрий його викликає - особливо наявно при роботі з прототипнима об'єктами.

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

// Цикл for...in
// В зв'язку з тим, що об'єкт то не ітерабельний елемент, то для нього не підходе цикл перебору for...of. На зміну його використовується цикл пошуку for...in - для перебору ключів об'єкту та отримання їх назв та/або значень (нібито ітерування по ключах):
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

// Метод Object.create()
// Створює новий об'єкт на основі прототипу. Наслідує, але не додає в новий об'єкт значення прототипу. Але при зміні властивостей, власних прототипу, створює власну, змінену властивість.
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

// Прототипне наслідування
// Якщо об'єкт створено з прототипу, то при виводі його в консоль відображаються всі його властивості, як особисті так і наслідувані.

// Метод hasOwnProperty()
// Повертає буль приналежності властивості тої сутності (об'єкту) для котрого він викликаний (при роботі з прототипованими об'єктами). Використовується при переборі за допомогою for...in для відображення значень лише власних властивостей

// for (let key in user1) {
//   if (user1.hasOwnProperty[key]) {
//     console.log(user1[key]); // Denys (??? не зрозуміло, чому тільки 1 значення повертає)
//   }
// }

// console.log(user1.hasOwnProperty(stat)); // false

// Метод Object.keys()
// Повертає масив власних ключів об'єкту ['key0', 'key1', ... 'keyZ']
// console.dir(user.Object.keys());
// console.dir(user2.Object.keys());

// Метод Object.values()
// Повертає масив значень власних ключів об'єкта ['value0', 'value1',...'valueZ']

// Метод Object.entries()
// Повертає масив зі значенням ['key', 'value']

// Метод Object.freeze()
// "Заморожує" вказаний об'єкт - захищає його від будь якої зміни

// // Метод Object.assign()
// // Дозволяє зробити копію об'єкта (одного або кількох - злиття) зі всіма властивостями в новий об'єкт. Умовно, мутуючий
// // Object.assign(target, ...sources)
// // target - цільовий об'єкт (куда копіювати)
// // sources - вихідні об'єкти (звідки копіювати)

// // Клонування:
// const obj1 = { a: 1, };
// const copeObj1 = Object.assign({}, obj1);
// console.log(copeObj1); // { a: 1 }

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

// // Оаператор in . Корисно у випадках, коли властивісь є, але вона undefined
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

// * id: Date.now() - оголошення id по поточної даті в мілісекундах

// ❗️❗️❗️ Масив об'єктів


