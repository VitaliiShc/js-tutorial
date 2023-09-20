// ❗️❗️❗️ This (контекст)
// ключове слово This аикористовується для звернення для властивостей об'екта всередині методів цього об'екта.
// This - це як займенник для використання в функції об'екта.
// !!! Зеначення контексту всередині функції з this визначаеться на момент ії виклику. Тобто, значення this визначаеться тим, як викликається функція, а не де та коли вона була оголошена.

// const user = {
//     name: 'Vitalii',
//     showName() {
//         console.log(`showName:`, this); // функцыя огологшена, але контекст не визначаэться в цей момент
//     },
// };

// user.showName(); // контекст визначається в мемент виклику (виклик в контексті об'екта) - це посилання на той об'ект, в якому лежить метод: this - це той самий об'ект

// Якщо функція була викликана як метод об'екта, то контекст буде посилатися на об'ект, частиною котрого є метод. Кто зліва от нащви функції, в якої є this - то й викликає функцію, як метод об'екта.

// Яущо функція з this викликається вне об'ета (не зрозумило, який об'ект цю функцію викликає), то в сторогому режимі this показує відсутність посилання (не зрозусмило, який об'ект викликав), в не строгому - виклик в контексті глобального об'екта window (~ вкалдка браузера зі всіма методамі)

// const foo = function () {
//   console.log(`foo -> this`, this);
// };
// // немає посилання на об'ект:
// foo(); // в строгому режимі - undefind (об'ект, який виклдикав функцію, не знайдено) ; в не строгому режимі - посилання на window (вісь документ - нибито викликаючий об'ект - сам документ).

// При передачі метода об'екта з this, як коллбека контекст не зберігається (не прив'язується).

// В стрілочних функціях this завжди посилається на батьківсткий об'ект та не визначається тім, хто ії викликав та використовує контекст свого фактичного місця написання - стрілочгна функція завжди считує контекст з window.

// В declaration і extention this повертає контекст того методу (об'екту), який його викликав.

// Кроки для визначення, який this поврене функція:
// 1. Визначаемо тип функції:

// 2.1. Declsrstion - перший, хто зліва - той викликає:
// 2.1.1. Викликав об'ект : this === об'ект
// 2.1.2. Нихто не викликав (никого зліва):
// 2.1.2.1. стогий режим : this === undefind
// 2.1.2.2. не стогий режим : this === window

// 2.2. Arrow - в рамках чого була створена - де прописана:
// 2.2.1. в рамках функції - приймає ії контекст - переходмо на начало та визначаємо тип функції-контекста (на п 1)
// 2.2.2. Всі інши випадки завжди : this === window

// ❗️❗️❗️ Методи функцій
// Якщо функцію потрібно викликати як метод об'екта, при цьому функція не є методом цього об'екта, вікористовуються методи call(), apply(), bind() для функції.

// ❗️❗️❗️ Метод call()
// foo.call(obj, aarg1, arg2, ...)
// Викеликає функцію таким чином, що в контексті (this) буде посилання на об'ект (obj), а також передає аргументи. Тобто, this-ом для функції буде об'ект, який свказано, та функція буде використовуватися для цього об'екта.

// function hello(message) {
//     console.log(`${message}, ${this.name}!`)
// }

// const user = {
//     name: 'Vitalii'
// }

// hello.call(user, 'Hello'); // Hello, Vitalii!
// hello.call(user, 'Hi'); // Hi, Vitalii!

// function showMaxSpeed() {
//     console.log(`${this.brand} має максимальну швідкість ${this.speed}`)
// };

// const audi = {
// brand: 'Audi',
//     speed: 240,
// }

// const bmw = {
//   brand: 'BMW',
//   speed: 270,
// };

// showMaxSpeed.call(audi); // Audi має максимальну швідкість 240
// showMaxSpeed.call(bmw); // BMW має максимальну швідкість 270

// ❗️❗️❗️ Метод apply()
// Аналог call(), але в якості аргумета (одного), переадеться масив.
// foo.apply(obj, [arg1, arg2, ...])
// Метод викликає таким чином, що в this буде посилання на об'ект (obj), а також передасть елементи масиву як окреми аргументи.

// function hello(message) {
//     console.log(`${message}, ${this.name}!`)
// }

// const user = {
//     name: 'Vitalii'
// }

// hello.apply(user, ['Hello']); // Hello, Vitalii!
// hello.apply(user, ['Hi']); // Hi, Vitalii!

// ❗️❗️❗️ Метод bind()
// Використовується для виконання колбек=функції, коли потрібно викликати функцію не відразу, а передати посилання на неї з прив'язаним контекстом
// foo.bind(obj, arg1, arg2, ...)
// Метод створює і повертає копію функції з прив'язаним контекстом (obj) і аргументами - утворюєиться кеопія функції, яку можна передати куда завгодно та коли завгодно.

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

// Приклад завдання з леккції

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
// // const add = inventory.add.bind(inventory); // передаємо коллбек-функцію, яка копиюється з прив'язкою до об'екта
// // invokeInventoryAction('Medkit', add);

// // коротший запис, без оголошення зайвої змфнної:
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
//   action.call(this, itemName); //транзитнипй шлях
// };
// // const add = inventory.add.bind(inventory); // передаємо коллбек-функцію, яка копиюється з прив'язкою до об'екта
// // invokeInventoryAction('Medkit', add);

// // коротший запис, без оголошення зайвої змфнної:
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
//   action.apply(this, [itemName]); //транзитнипй шлях
// };
// // const add = inventory.add.bind(inventory); // передаємо коллбек-функцію, яка копиюється з прив'язкою до об'екта
// // invokeInventoryAction('Medkit', add);

// // коротший запис, без оголошення зайвої змфнної:
// invokeInventoryAction.apply(inventory, ['Medkit', inventory.add]);

// console.log(inventory.items);

// // invokeInventoryAction('Mask', inventory.remove.bind(inventory));

// // console.log(inventory.items);
