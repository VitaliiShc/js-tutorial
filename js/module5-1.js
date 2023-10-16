// // ❗️❗️❗️ This (контекст)
// // ключове слово This використовується для звернення для властивостей об'єкта всередині методів цього об'єкта.
// // This - це як займенник для використання в функції об'єкта.
// // !!! Значення контексту всередині функції з this визначається на момент її виклику. Тобто, значення this визначається тим, як викликається функція, а не де та коли вона була оголошена.

// const user = {
//     name: 'Vitalii',
//     showName() {
//         console.log(`showName:`, this); // функція оголошена, але контекст не визначається в цей момент
//     },
// };

// user.showName(); // контекст визначається в момент виклику (виклик в контексті об'єкта) - це посилання на той об'єкт, в якому лежить метод: this - це той самий об'єкт

// Я// кщо функція була викликана як метод об'єкта, то контекст буде посилатися на об'єкт, частиною котрого є метод. Хто зліва от назви функції, в якої є this - то й викликає функцію, як метод об'єкта.

// // Якщо функція з this викликається поза об'єктом (не зрозуміло, який об'єкт цю функцію викликає), то в строгому режимі this показує відсутність посилання (не зрозуміло, який об'єкт викликав), в не строгому - виклик в контексті глобального об'єкта window (~ вкладка браузера зі всіма методами)

// const foo = function () {
//   console.log(`foo -> this`, this);
// };
// // немає посилання на об'єкт:
// foo(); // в строгому режимі - undefind (об'єкт, який викликав функцію, не знайдено) ; в не строгому режимі - посилання на window (об'єкт вищого порядку).

// // При передачі метода об'єкта з this, як колбека контекст не зберігається (не прив'язується).

// // В стрілочних функціях this завжди посилається на батьківський об'єкт та не визначається тім, хто її викликав та використовує контекст свого фактичного місця написання - стрілочна функція завжди зчитує контекст з window.

// // В declaration і extention this повертає контекст того методу (об'єкту), який його викликав.

// // Кроки для визначення, який this поверне функція:
// // 1. Визначаємо тип функції:

// // 2.1. Declaration - перший, хто зліва - той викликає:
// // 2.1.1. Викликав об'єкт : this === об'єкт
// // 2.1.2. Ніхто не викликав (нікого зліва):
// // 2.1.2.1. строгий режим : this === undefind
// // 2.1.2.2. не строгий режим : this === window

// // 2.2. Arrow - в рамках чого була створена - де прописана:
// // 2.2.1. в рамках функції - приймає її контекст - переходимо на начало та визначаємо тип функції-контексту (на п 1)
// // 2.2.2. Всі інші випадки завжди : this === window

// // ❗️❗️❗️ Методи функцій (call(), bind(), apply())
// // Якщо в якомусь об'єєкті є метод (функція) з контекстом this (тобто поисланням на об'єкт в якому знаходиться), та яка є колбеком для іншої сторонеї функції, то при виклику сторонеї функції в неї цей метод івтрачає зв'язок з самим об'єктом, тому що в сторонню функцію колбек передається як посилання на коміпку пам'яті. Та отримується несподівавана робота функції.
// // Або коли потрібно зв'язати якісь об'єкт та функцію, в тілі якої використовується контекст this, але немає явної сприв'язки до об'екту, в контексті якого вана має бути виконана.
// Щоб сберегти зв'язок з об'єктом, використовуються методи функції. Якщо функцію потрібно викликати як метод об'єкта, при цьому функція не є методом цього об'єкта, використовуються методи call(), apply(), bind() для функції.

const user = {
  name: 'Vitalii',
  surname: 'Shchukin',
  // створено метод об'єкта, який повретає повне ім'я
  getFullName() {
    return `${this.name} ${this.surname}`;
  },
};

// console.log(user.getFullName()); // 'Vitalii Shchukin'
// console.log(user.getFullName); // getFullName() {return `${this.name} ${this.surname}`;} - отримуємо саме тіло функції з пам'яті

// створено функцію, яка виводить привітання для юзера з колбеку
function makeMessage(callback) {
  console.log(callback); // отримуємо тіло колбека ( getFullName() {return `${this.name} ${this.surname}`;} )
  console.log(this); // underfind, тому що звй'язок з об'єктом втрачено
  console.log(`Hello, ${callback}`); // 'Hello, __тіло колбека__'
  // callback() - виклик методцу getFullName без об'єкта
  console.log(`Hello, ${callback()}`); // помилка!
}

makeMessage(user.getFullName); 

// // ❗️ Метод call()
// // foo.call(obj, aarg1, arg2, ...)
// // Викликає функцію таким чином, що в контексті (this) буде посилання на об'єкт (obj), а також передає аргументи. Тобто, this-ом для функції буде об'єкт, який вказано, та функція буде використовуватися для цього об'єкта.

// function hello(message) {
//     console.log(`${message}, ${this.name}!`)
// }

// const user = {
//     name: 'Vitalii'
// }

// hello.call(user, 'Hello'); // Hello, Vitalii!
// hello.call(user, 'Hi'); // Hi, Vitalii!

// function showMaxSpeed() {
//     console.log(`${this.brand} має максимальну швидкість ${this.speed}`)
// };

// const audi = {
// brand: 'Audi',
//     speed: 240,
// }

// const bmw = {
//   brand: 'BMW',
//   speed: 270,
// };

// showMaxSpeed.call(audi); // Audi має максимальну швидкість 240
// showMaxSpeed.call(bmw); // BMW має максимальну швидкість 270

// // ❗️ Метод apply()
// // Аналог call(), але в якості аргументу (одного), передається масив.
// // foo.apply(obj, [arg1, arg2, ...])
// // Метод викликає таким чином, що в this буде посилання на об'єкт (obj), а також передасть елементи масиву як окремі аргументи.

// function hello(message) {
//     console.log(`${message}, ${this.name}!`)
// }

// const user = {
//     name: 'Vitalii'
// }

// hello.apply(user, ['Hello']); // Hello, Vitalii!
// hello.apply(user, ['Hi']); // Hi, Vitalii!

// // ❗️ Метод bind()
// // Використовується для виконання колбек-функції, коли потрібно викликати функцію не відразу, а передати посилання на неї з прив'язаним контекстом
// // foo.bind(obj, arg1, arg2, ...)
// // Метод створює і повертає копію функції з прив'язаним контекстом (obj) і аргументами - утворюється копія функції, яку можна передати куди завгодно та коли завгодно.

// function greet(name) {
//   return `Welcome to ${this.city}, ${name}!`;
// }

// const location1 = {
//   city: 'Kyiv',
// };

// const location2 = {
//   city: 'Myrgorod',
// };

// const kyivGreeting = greet.bind(location1);
// const myrgorodGreeting = greet.bind(location2);

// console.log(kyivGreeting(`Vitalii`)); // Welcome to Kyiv, Vitalii!
// console.log(myrgorodGreeting(`Inna`)); // Welcome to Myrgorod, Inna!

// // Приклад завдання з лекції

// // BIND

// const inventory = {
//     items: ['Knife', 'Mask'],
//     add(itemName) {
//         console.log(`Adding ${itemName} to inventory.`);

//         this.items.push(itemName);
//     },
//     remove(itemName) {
//         console.log(`Removing ${itemName} from inventory.`);

//         this.items = this.items.filter(item => item !== itemName);
//     },
// }

// const invokeInventoryAction = function (itemName, action) {
//     console.log(`Invoking action on ${itemName}.`);
//     action(itemName);
// }
// // const add = inventory.add.bind(inventory); // передаємо колбек-функцію, яка копіюється з прив'язкою до об'єкта
// // invokeInventoryAction('Medkit', add);

// // коротший запис, без оголошення зайвої змінної:
// invokeInventoryAction('Medkit', inventory.add.bind(inventory));

// console.log(inventory.items);

// invokeInventoryAction('Mask', inventory.remove.bind(inventory));

// console.log(inventory.items);

// // CALL - довгий шлях

// const inventory = {
//   items: ['Knife', 'Mask'],
//   add(itemName) {
//     console.log(`Adding ${itemName} to inventory.`);

//     this.items.push(itemName);
//   },
//   remove(itemName) {
//     console.log(`Removing ${itemName} from inventory.`);

//     this.items = this.items.filter(item => item !== itemName);
//   },
// };

// const invokeInventoryAction = function (itemName, action) {
//   console.log(`Invoking action on ${itemName}.`);
//   action.call(this, itemName); //транзитний шлях
// };
// // const add = inventory.add.bind(inventory); // передаємо колбек-функцію, яка копіюється з прив'язкою до об'єкта
// // invokeInventoryAction('Medkit', add);

// // коротший запис, без оголошення зайвої змінної:
// invokeInventoryAction.call(inventory, 'Medkit', inventory.add);

// console.log(inventory.items);

// // invokeInventoryAction('Mask', inventory.remove.bind(inventory));

// // console.log(inventory.items);

// // APPLY - довгий шлях

// const inventory = {
//   items: ['Knife', 'Mask'],
//   add(itemName) {
//     console.log(`Adding ${itemName} to inventory.`);

//     this.items.push(itemName);
//   },
//   remove(itemName) {
//     console.log(`Removing ${itemName} from inventory.`);

//     this.items = this.items.filter(item => item !== itemName);
//   },
// };

// const invokeInventoryAction = function (itemName, action) {
//   console.log(`Invoking action on ${itemName}.`);
//   action.apply(this, [itemName]); //транзитний шлях
// };
// // const add = inventory.add.bind(inventory); // передаємо колбек-функцію, яка копіюється з прив'язкою до об'єкта
// // invokeInventoryAction('Medkit', add);

// // коротший запис, без оголошення зайвої змінної:
// invokeInventoryAction.apply(inventory, ['Medkit', inventory.add]);

// console.log(inventory.items);

// // invokeInventoryAction('Mask', inventory.remove.bind(inventory));

// // console.log(inventory.items);
