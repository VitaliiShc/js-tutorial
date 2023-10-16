// // ❗️❗️❗️ Об'єктно-орієнтоване програмування (ООП)
// // ❗️ Процедурне програмування - набфр не пов'язаних явно функцій для зберігання та обробки інформації. Підхід використовується для задач, в яких немає тісно пов'язаних суиностей (даних та функцій для іх обробки).
// // Приклад:
// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;

// const getWage = (baseSalary, overtime, rate) => {
//   return baseSalary + overtime * rate;
// };

// console.log(getWage(baseSalary, overtime, rate));

// // ❗️ Об'єктно-орієнтоване програмування - методологія, яка описує програму як сукупність об'єктів, кожен з яких містить двні (властивості)і методи взаємодії з ними.
// // ООП - це підхід до программування як до моделювання, що вирішує основне завдання - структурування інформаціїз точки зору керованності, що суттево покращує контроль процесу моделювання.
// // Приклад: використовуємо ООП, зібравшидані в об'єкт дані та метод, в якому відсутні параметри, та використовуються властивості об'єкта, які задаються на омент створення об'єкта, та можуть змінбватися іншими методами. Отримуємо сутність з простим інтерфейсом , що зменшує складність програми.

// const employee = {
//   baseSalary: 30000,
//   overtime: 10,
//   rate: 20,
//   getWage() {
//     return this.baseSalary + this.overtime * this.rate;
//   },
// };
// console.log(employee.getWage());

// // ❗️ Сутності ООП
// // Клас - спосіб опису сутності, що визначає стан та поведінку, яка залежить від цього стану, а також правила для взаімодії з цією сутністю (контракт).
// // Екземпляр (об'єкт) - окремий прдставник класу, який має конкретний стан та поведінку, що повнистью визначається класом.
// // Інтерфейс - це набір властивостей і методів класу, доступних для використання у робюоті з екземпляром. Інтерфейс описує клас, чітко визначаючи усі можливи діїї над ним.

// // ❗️❗️❗️ Прототипне наслідування
// // ❗️ Метод Object.create(obj) - створює і повртає новий об'єкт, зв'зуючи його з об'єктом obj. Новий об'єкт має тіж самі властивості, що і прототип, а також може мати своі сосбисті властивості. Якщо змінити наслідувану від прототипу властивість, то вона стає особистої зі значеням, вдрізнаючимся від прототипної.

// const employee = {
//   baseSalary: 30000,
//   overtime: 10,
//   rate: 20,
//   getWage() {
//     return this.baseSalary + this.overtime * this.rate;
//   },
// };

// const programmer = Object.create(employee);
// console.log(programmer); // { baseSalary: 40000; employeeName: "Vitalii S"; _proto_: employee } - виводяться поточні властивості нового об'єкта, незалежно від місця іх зміни або присвоєня
// programmer.baseSalary = 40000;
// programmer.employeeName = 'Vitalii S';

// console.log(programmer);
// console.log(employee.isPrototypeOf(programmer)); // true

// // ❗️ Метод proto.isPrototypeOf(obj) перевіряє, чи є об'єкт proto прототипом для об'єкта obj. Повертає true або false.

// // ❗️ Метод hasOwnProperty(prop)
// // Повертає буль приналежності властивості (власної) тої сутності (об'єкту) для котрого він викликаний (при роботі з прототипованими об'єктами). Назва властивості (ключ) передається в лапках.

// console.log('employeeName' in programmer); // true - власна властивість
// console.log('baseSalary' in programmer); // true - наслідувана та власна
// console.log('rate' in programmer); // true -  наслідувана від прототипу, але не власна: інтерпретатор, не знайдя властиволсті в об'єкті шакає таку властивість у прототипа ({baseSalary: 40000; employeeName: "Vitalii S"; __proto__: employee }), тобто переходить за посиланням до об'єкта-прототипу

// // Прототип це резервне сховище властивостей та методів, автоматично використовується під час їх пошуку. Об'єкт, який виступає прототипом також може мати свій прототип.

// console.log(programmer.hasOwnProperty('employeeName')); // true
// console.log(programmer.hasOwnProperty('baseSalary')); // true (було наслідовано від прототипу та змінено - тім самим привласнено)
// console.log(programmer.hasOwnProperty('rate')); // false - не є у об'єкта, є у прототипа

// // При переборі циклом for...in завжди потрібно перевіряти, чи властивість є власною.

// for (const key in programmer) {
//     // якщо властивість власна - виконуємо тіло if
//     if (programmer.hasOwnProperty(key)) {
//       console.log(key);
//       console.log(programmer[key]);
//     }
//     // якщо властивість не влана - нічого не робимо
// };

// // ❗️ Метод Object.keys(obj) - приймає об'єкт та повертає масив ключів його власних властивостей

// const keys = Object.keys(programmer);
// console.log(keys); // ['baseSalary', 'employeeName']
// // // далі можливо використовувати цікл for...of можна отримати доступ до власних властивостенй:
// for (const key of keys) {
//     console.log(key);
//     console.log(programmer[key]);
// };

// // ❗️❗️❗️ Класи
// // Синатаксис литерала об'єкт дозволяє зробити один об'єкт. Але іноді потрібно дінамично створювати кілька однотипних об'єктів з однаковим набором властивостей (але різними значеннями і методами для взаємодії з ними). З цією метою використовуються класи - спеціальний синтаксис оголошеннЯ функції для створення об'єкта. По суті, клас - це функція створення об'екта.

// class User {
//     // тіло класу
// };

// console.dir(User); // функція з властивістью 'prototype: {constructor: ƒ}'

// // ❗️ Оголошення класу
// // оголошення класу почінається зі слова class, ставиться його назва (зазвичай з великоъ лытери (конвенцыя)), та ставляться фыгурны дужки:

// class User {
//     // тіло класу
// };

// // Екземпляр класу створюється викликом класу з оператором new:

// const mango = new User();
// console.log(mango); // User {}

// // Екземпляр класу містить дані та поведінку,, що описуються класом

// // ❗️ Конструктор класу
// // Для ініціалізації екземплярав класі використовується метод constructor (якщо не оголошений, то по дефолту - це порожня функція)

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User('Mango', 'mango@mail.com');
// console.log(mango); // {"name": "Mango", "email": "mango@mail.com"}

// // Виклик класу з олпертором new створює новий об'єкт та викликає конструктор в контексті цього об'єкта - this в середині конструктора посилається на новостворений об'єкт.

// // ❗️ Публічні властивості: Властивості name та email - є власнимі властивостями об'єкта та вони є публічними - до ніх можна отримати доступ, звернувшись через крапку.
// console.log(mango.name); // 'Mango'

// // ❗️ Об'єкт параметрів (патерн)
// При сстворенні нового екземпляяра можна передати не в вигляді окремих значень, а у вигляді об'єкта, попередньо деструктурізувавши об'єкт в конструкторі класу

// class User {
//   // Деструктуризуємо об'єкт
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User({
//   name: 'Mango',
//   email: 'mango@mail.com',
// });
// console.log(mango); // { name: "Манго", email: "mango@mail.com" }

// // ❗️ Методи класу
// // В класі можуть бути додлани функції - методи для роботи з властивостями екземпляру та доступнимі в прототипі.

// class User {
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }

//   getEmail() {
//     return this.email;
//   }

//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// const mango = new User({
//   name: 'Mango',
//   email: 'mango@mail.com',
// });

// console.log(mango.getEmail()); // 'mango@mail.com'
// mango.changeEmail('mango@supermail.com');
// console.log(mango.getEmail()); // 'mango@supermail.com'

// // ❗️ Приватні властивості - властивості, доступ доя яких можна отримати тільки всередині класу (тільки використовуючи методи класу)
// // Інкапсуляція - концепція, що дозволяє приховати внутрішні (приватні) властивості та методи. Щоб зробит ивластивість приватною, до її назви необхідно додати символ # та обов'язково оголосити до ініціалізації в конструкторі:

// class User{
//     name;
//     #email;
//     constructor({ name, email }) {
//         this.name = name;
//         this.#email = email;
//     }

//     getEmail() {
//         return this.#email;
//     }

//     changeEmail(newEmail) {
//         this.#email = newEmail;
//     }
// };

// const mango = new User({
//     name: 'Mango',
//     email: 'mango@mail.com'
// });
// mango.changeEmail("mango@supermail.com");
// console.log(mango.getEmail()); // mango@supermail.com
// // console.log(mango.#email); // Виникне помилка, це приватна властивість

// // Методи класу також можуть бути приватними, тобто доступнимі тільки у тілі класу. Для цього перед їх ім'ям необхідно поставити символ #.

// // ❗️ Геттери і сеттери - короткий синтаксис оголошення методів для отримання (get) та зміни (set) властивостей, в тому чіслі приватних. Це публічний інтерфейс. Завжди мають використовуватися парою з однаковим ім'ям (не працюють один без іншого)! Але! Гетери та сетери не можуть назватися такім же ім'ям, як властивість! (в наведенному нижче прикладі властивість приватна, та має назву '#email', тому гетер та сетер можуть зватися просто 'email', але не '#email' - буде помилка!)

// class User {
//   #email;
//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }
//   // це методи, а тому під час їх запису можна виконати додатковий код:
//   set email(newEmail) {
//     if (newEmail === '') {
//       console.error('Ups!');
//       return;
//     }
//     this.#email = newEmail;
//   }
// }

// const mango = new User({ name: 'Mango', email: 'mango@mail.com' });
// console.log(mango.email); // 'mango@mail.com' - виклик геттера - операція читання
// mango.email = 'mango@supermail.com'; // виклик сеттера, перевизначення властивості
// mango.email = ''; // виклик сеттера з перевіркою
// console.log(mango.email); // 'mango@supermail.com'

// // *** Гетери і сетери - це методи об'єктів та можуть використовуватися при роботі з об'єктами (Object.defineProperty(): https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

// // ❗️ Статичні властивості - це властивості, доступні тільки в самому класі, но не його екземплярам. Використовуються для зберігання інформації, яка стосується самого класу. Оголошується за допомогою слова static перед назвою властивості. Статичні властивості можуть бути також априватними (для цього пенред назвою влстивості має бути #); звернення до приватної статичної властивості за межамі тіла класу викличе помилку.

// class User {
//   // оголошення статічної властивості, яка є об'єктом з переліком ролей користувача
//   static Roles = {
//     ADMIN: 'admin',
//     EDITOR: 'editor',
//   };
//   #email;
//   #role;

//   constructor({ email, role }) {
//     this.#email = email;
//     this.#role = role;
//   }

//   get role() {
//     return this.#role;
//   }

//   set role(newRole) {
//     this.#role = newRole;
//   }
// }

// const mango = new User({
//   email: 'mango@mail.com',
//   role: User.Roles.ADMIN,
// });

// console.log(mango); // {#email: 'mango@mail.com', #role: 'admin'}
// console.log(User.Roles); // {ADMIN: 'admin', EDITOR: 'editor'}
// console.log(mango.Roles); // undefined
// console.log(mango.role); // 'admin'
// mango.role = User.Roles.EDITOR;
// console.log(mango.role); // 'editor'

// // ❗️ Статичні методи - методи (як публічні, так і приватні), які доступні тільки класу. Оголошуються таким же чином, як і властивості - зі слова static. Особливість в тому, що під час виклику this посилається на сам клас, такім чином, статичний метод може отримувати доступ лише до статичних властивостей класу, але не до властивостей екземпляра, та не може бути викликаний екземпляром.

// class User {
//     static #takenEmails = [];

//     static isEmailTaken(email) {
//         return User.#takenEmails.includes(email);
//     }
//     #email;

//     constructor({ email }) {
//         this.#email = email;
//         User.#takenEmails.push(email);
//     }
// }

// const mango = new User({ email: 'mango@mail.com' });

// console.log(User.isEmailTaken('poly@mail.com')); // false
// console.log(User.isEmailTaken('mango@mail.com')); // true

// // ❗️ Наслідування класів
// // Новий клас може бути наслідувачем іншого класу - тобто наслідує властивості та методи (окрім приватних).  Для реалізації наслідування використовуєтиься ключове слово extends.
// // class Child extends Parent{
// //     //
// // }

// // Базовий клас зберігає загальні властивості та методи, а похідні класи наслідують їх та мають сволї унікальні.

// class User {
//     #email;
//     constructor(email) {
//         this.#email = email;
//     }
//     get email() {
//         return this.#email;
//     }

//     set email(newEmail) {
//         this.#email = newEmail;
//     }
// }

// class ContentEditor extends User {
//     // тіло похідного класу
// }

// const editor = new ContentEditor('mango@mail.com');

// console.log(editor);
// console.log(editor.email);

// // ❗️ Конструктор дочірнього класу
// // Для створення дочірнего класу в її конструкторі необхідно викликати спеціальну функцію - псевдонім конструктора батьківського класу -  super(аргументи), інакше при спробі звернутися через this в конструкторі дочірнего класу виникне помилка. Тобто, в дочцірнем класі потрібно викликати конструктор батьківського класу із зазначенням властивостей, яки потрібно унаслідувати від батька. Під час виклику конструктора батьківського класу (super) передаємо йому необхідні аргументи для ініціалізаціі властивостей.

// class User {
//   #email;
//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     // виклик конструктора батьківського класу
//     super(email);
//     this.posts = posts;
//   }
// }

// const editor = new ContentEditor({ email: 'mango@mail.com', posts: []});

// console.log(editor);
// console.log(editor.email);

// // ❗️ Методи дочірнього класу. Методи дочірнего класу доступні тільки його екземплярам.

// class User {
//   #email;
//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
//     constructor({ email, posts }) {
//         super(email);
//         this.posts = posts;
//     }

//     addPosts(post) {
//         this.posts.push(post);
//     }
// }

// const editor = new ContentEditor({ email: 'mango@mail.com', posts: [] });
// console.log(editor); // {posts: Array(0), #email: 'mango@mail.com'}
// console.log(editor.email); // mango@mail.com
// editor.addPosts('post-1');
// console.log(editor.posts); // ['post-1']
