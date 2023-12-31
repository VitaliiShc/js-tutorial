// // 💡 Task 01
// // Виконай рефакторинг методів об'єкта pizzaPalace, розставивши відсутні this в місцях звернення до властивостей і методів об'єкта. Метод checkPizza об'єкта pizzaPalace використовує this. Метод order об'єкта pizzaPalace використовує this

// const pizzaPalace = {
//   pizzas: ['Supercheese', 'Smoked', 'Four meats'],
//   // Change code below this line

//   //   checkPizza(pizzaName) {
//   //     return pizzas.includes(pizzaName);
//   //   },
//   //   order(pizzaName) {
//   //     const isPizzaAvailable = checkPizza(pizzaName);

//   //     if (!isPizzaAvailable) {
//   //       return `Sorry, there is no pizza named «${pizzaName}»`;
//   //     }

//   //     return `Order accepted, preparing «${pizzaName}» pizza`;
//   //   },

//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };

// console.log(pizzaPalace.order('Smoked')); // "Order accepted, preparing «Smoked» pizza"
// console.log(pizzaPalace.order('Four meats')); // "Order accepted, preparing «Four meats» pizza"
// console.log(pizzaPalace.order('Big Mike')); // "Sorry, there is no pizza named «Big Mike»"
// console.log(pizzaPalace.order('Viennese')); // "Sorry, there is no pizza named «Viennese»"

// // 💡 Task 02
// // ЗАДАЧА: АКАУНТ КОРИСТУВАЧА
// // Перед звільненням розробник зламав вихідний код управління акаунтами користувачів нашого сервісу доставки їжі. Виконай рефакторинг методів об'єкта customer, розставивши відсутні this під час звернення до властивостей об'єкта.
// // Після оголошення об'єкта ми додали виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.
// // Значення змінної customer - це об'єкт з властивостями і методами.
// // Метод getBalance об'єкта customer використовує this
// // Метод getDiscount об'єкта customer використовує this
// // Метод setDiscount об'єкта customer використовує this
// // Метод getOrders об'єкта customer використовує this
// // Метод addOrder об'єкта customer використовує this

// const customer = {
//   username: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['Burger', 'Pizza', 'Salad'],
// //   // Change code below this line

// //   getBalance() {
// //     return balance;
// //   },
// //   getDiscount() {
// //     return discount;
// //   },
// //   setDiscount(value) {
// //     discount = value;
// //   },
// //   getOrders() {
// //     return orders;
// //   },
// //   addOrder(cost, order) {
// //     balance -= cost - cost * discount;
// //     orders.push(order);
// //   },

//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // // Change code above this line
// };

// // customer.setDiscount(0.15);
// // console.log(customer.getDiscount()); // 0.15
// // customer.addOrder(5000, 'Steak');
// // console.log(customer.getBalance()); // 19750
// // console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// console.log(customer.getDiscount()); // повертає поточне значення властивості discount
// console.log(customer.setDiscount(0.15)); // оновлює значення властивості discount
// console.log(customer.getDiscount()); // повертає поточне значення властивості discount
// console.log(customer.getBalance()); // повертає поточне значення властивості balance.
// console.log(customer.getOrders()); // повертає поточне значення властивості orders
// console.log(customer.addOrder(5000, 'Steak')); // додає "Steak" в масив значень властивості orders і оновлює баланс
// console.log(customer.getOrders()); // повертає поточне значення властивості orders
// console.log(customer.getBalance()); // повертає поточне значення властивості balance.

// // 💡 Task 03
// // ЗАДАЧА: ІСТОРІЯ ЗАМОВЛЕНЬ
// // Тестувальники знайшли баги в коді сервісу зберігання історії замовлень їжі. Тобі необхідно виправити їх, правильно розставивши this в методах об'єкта historyService, щоб методи почали працювати правильно.
// // Значення змінної historyService - це об'єкт з вихідними властивостями та методами.
// // Метод getOrdersLog об'єкта historyService використовує this
// // Метод getEmails об'єкта historyService використовує this
// // Метод getOrdersByEmail об'єкта historyService використовує this

// const historyService = {
//   orders: [
//     { email: 'jacob@hotmail.com', dish: 'Burrito' },
//     { email: 'solomon@topmail.net', dish: 'Burger' },
//     { email: 'artemis@coldmail.net', dish: 'Pizza' },
//     { email: 'solomon@topmail.net', dish: 'Apple pie' },
//     { email: 'jacob@hotmail.com', dish: 'Taco' },
//   ],

//   //   // Change code below this line
//   //   getOrdersLog() {
//   //     return orders
//   //       .map(order => `email: ${order.email} dish: ${order.dish}`)
//   //       .join(" - ");
//   //   },
//   //   getEmails() {
//   //     const emails = orders.map(order => order.email);
//   //     const uniqueEmails = new Set(emails);
//   //     return [...uniqueEmails];
//   //   },
//   //   getOrdersByEmail(email) {
//   //     return orders.filter(order => order.email === email);
//   //   },
//   // ---
//   getOrdersLog() {
//     return this.orders
//       .map(order => `email: ${order.email} dish: ${order.dish}`)
//       .join(' - ');
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
//   //---
//   //   // Change code above this line
// };

// console.log(historyService.getOrdersLog()); // повертає рядок з переліком даних всіх замовлень з властивості orders
// console.log(historyService.getEmails()); // повертає масив всіх унікальних поштових адрес з властивості orders
// console.log(historyService.getOrdersByEmail('solomon@topmail.net')); // [{ email: "solomon@topmail.net", dish: "Burger" }, { email: "solomon@topmail.net", dish: "Apple pie" }]
// console.log(historyService.getOrdersByEmail('artemis@coldmail.net')); // [{ email: "artemis@coldmail.net", dish: "Pizza" }]

// // 💡 Task 04
// // Зміни код таким чином, щоб об'єкт parent став прототипом для об'єкта у змінній сhild. Використовується метод Object.create().

// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish',
// };
// // Change code below this line

// // const child = {};

// const child = Object.create(parent);

// // Change code above this line
// child.name = 'Jason';
// child.age = 27;

// console.log(parent.hasOwnProperty('surname')); // true
// console.log(parent.hasOwnProperty('heritage')); // true
// console.log(child.hasOwnProperty('name')); // true
// console.log(child.name); // "Jason"
// console.log(child.hasOwnProperty('age')); // true
// console.log(child.age); // 27
// console.log(child.hasOwnProperty('surname')); // false
// console.log(child.surname); // "Moore"
// console.log(child.hasOwnProperty('heritage')); // false
// console.log(child.heritage); // "Irish"
// console.log(parent.isPrototypeOf(child)); // true

// // 💡 Task 05
// // ЗАДАЧА: ЛАНЦЮЖОК ПРОТОТИПІВ
// // Зміни код, побудувавши ланцюжок прототипів таким чином, щоб об'єкт ancestor був прототипом для parent, а той, своєю чергою, був прототипом для child. Використовується метод Object.create()

// const ancestor = {
//   name: 'Paul',
//   age: 83,
//   surname: 'Dawson',
//   heritage: 'Irish',
// };
// // Change code below this line

// // const parent = {};
// // parent.name = "Stacey";
// // parent.surname = "Moore";
// // parent.age = 54;

// // const child = {};
// // child.name = "Jason";
// // child.age = 27;

// const parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// // Change code above this line

// console.log(ancestor.isPrototypeOf(parent)); // true
// console.log(parent.isPrototypeOf(child)); // true
// console.log(ancestor.hasOwnProperty('surname')); // true
// console.log(ancestor.surname); // "Dawson"
// console.log(parent.hasOwnProperty('surname')); // true
// console.log(parent.surname); // "Moore"
// console.log(child.hasOwnProperty('surname')); // false
// console.log(child.surname); // "Moore"
// console.log(ancestor.hasOwnProperty('heritage')); // true
// console.log(ancestor.heritage); // "Irish"
// console.log(parent.hasOwnProperty('heritage')); // false
// console.log(parent.heritage); // "Irish"
// console.log(child.hasOwnProperty('heritage')); // false
// console.log(child.heritage); // "Irish"

// // 💡 Task 06
// // Використовуючи ключове слово class, оголоси клас Car з порожнім тілом.

// class Car {}

// console.log(new Car()); // Car{__proto__}

// // 💡 Task 07
// // Додай класу Car метод constructor, який приймає три параметри:
// // brand - марка автомобіля.
// // model - модель автомобіля.
// // price - ціна автомобіля.
// // Клас Car повинен створювати об'єкт з однойменними властивостями brand, model і price, значеннями яких повинні бути передані аргументи під час його виклику з оператором new.

// class Car {
//   // Change code below this line

//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   // Change code above this line
// }

// const audiQ3 = new Car('Audi', 'Q3', 36000)
// console.log(audiQ3); // утвориться об'єкт { brand: "Audi", model: "Q3", price: 36000 }

// const bmwX5 = new Car('BMW', 'X5', 58900);
// console.log(bmwX5); // утвориться об'єкт { brand: "BMW", model: "X5", price: 58900 }

// const nissanMurano = new Car('Nissan', 'Murano', 31700);
// console.log(nissanMurano); // утвориться об'єкт { brand: "Nissan", model: "Murano", price: 31700 }

// // 💡 Task 08
// // Виконай рефакторинг класу Car таким чином, щоб він приймав один параметр - об'єкт з властивостями brand, model і price. Деструктуризуй об'єкт в сигнатурі (підписі) конструктора.

// class Car {
//   // Change code below this line
//   // constructor(brand, model, price) {
//   //   this.brand = brand;
//   //   this.model = model;
//   //   this.price = price;
//   // }

//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code above this line
// }

// const audiQ3 = new Car({
//   brand: 'Audi',
//   model: 'Q3',
//   price: 36000,
// });
// console.log(audiQ3); // утвориться об'єкт { brand: "Audi", model: "Q3", price: 36000 }

// const bmwX5 = new Car({
//   brand: 'BMW',
//   model: 'X5',
//   price: 58900,
// });
// console.log(bmwX5); // утвориться об'єкт { brand: "BMW", model: "X5", price: 58900 }

// const nissanMurano = new Car({
//   brand: 'Nissan',
//   model: 'Murano',
//   price: 31700,
// });
// console.log(nissanMurano); // утвориться об'єкт { brand: "Nissan", model: "Murano", price: 31700 }

// 💡 Task 09
// Додай класу Car два методи.
// getPrice() - повертає значення властивості price з об'єкта, який буде його викликати.
// changePrice(newPrice) - оновлює значення властивості price в об'єкта, який буде його викликати, на newPrice.

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code below this line
//   getPrice() {
//     return this.price;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
//   // Change code above this line
// }

// // 💡 Task 10
// // ЗАДАЧА: СКЛАД
// // Напиши клас Storage, який буде створювати об'єкти для управління складом товарів. Клас очікує тільки один аргумент - початковий масив товарів, який записується у властивість items об'єкта, що створюється.
// // Оголоси наступні методи класу:
// // getItems() - повертає масив поточних товарів у властивості items об'єкта, який викликає цей метод.
// // addItem(newItem) - приймає новий товар newItem і додає його в масив товарів у властивості items об'єкта, який викликає цей метод.
// // removeItem(itemToRemove) - приймає товар itemToRemove і видаляє його з масиву товарів у властивості items об'єкта, який викликає цей метод.
// // Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(newItem) {
//     if (!this.items.includes(newItem)) {
//       this.items.push(newItem);
//     }
//   }
//   removeItem(itemToRemove) {
//     if (this.items.includes(itemToRemove)) {
//       this.items.splice(this.items.indexOf(itemToRemove), 1);
//     }
//   }
// }

// // Change code above this line

// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);

// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// // 💡 Task 11
// // ЗАДАЧА: КОНСТРУКТОР РЯДКІВ
// // Напиши клас StringBuilder, який приймає один параметр initialValue - довільний рядок, який записується у властивість value об'єкта, що створюється.
// // Оголоси наступні методи класу:
// // getValue() - повертає поточне значення властивості value.
// // padEnd(str) - отримує параметр str (рядок) і додає його в кінець значення властивості value об'єкта, який викликає цей метод.
// // padStart(str) - отримує параметр str (рядок) і додає його на початок значення властивості value об'єкта, який викликає цей метод.
// // padBoth(str) - отримує параметр str (рядок) і додає його на початок і в кінець значення властивості value об'єкта, який викликає цей метод.
// // Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.

// class StringBuilder {
//   constructor(value) {
//     this.value = value;
//   }
//   getValue() {
//     return this.value;
//   }

//   padEnd(str) {
//     this.value += str;
//   }

//   padStart(str) {
//     this.value = str + this.value;
//   }

//   padBoth(str) {
//     this.value = str + this.value + str;
//   }
// }

// // Change code above this line
// const builder = new StringBuilder('.');

// console.log(builder.getValue()); // "."
// builder.padStart('^');
// console.log(builder.getValue()); // "^."
// builder.padEnd('^');
// console.log(builder.getValue()); // "^.^"
// builder.padBoth('=');
// console.log(builder.getValue()); // "=^.^="

// // 💡 Task 12
// // Виконай рефакторинг класу Car таким чином, щоб властивість brand була приватною, і додай два методи для публічного інтерфейсу, для читання і зміни цієї властивості.
// // getBrand() - повертає значення приватної властивості brand.
// // changeBrand(newBrand) - змінює значення приватної властивості brand на newBrand.

// class Car {
//   // Change code below this line

//   // constructor({ brand, model, price }) {
//   //   this.brand = brand;
//   //   this.model = model;
//   //   this.price = price;
//   //   }
//   #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   getBrand() {
//     return this.#brand;
//   }

//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }

//   // Change code above this line
// }
// const audiQ3 = new Car({
//   brand: 'Audi',
//   model: 'Q3',
//   price: 36000,
// });
// console.log(audiQ3); // утвориться об'єкт { brand: "Audi", model: "Q3", price: 36000 }

// const bmwX5 = new Car({
//   brand: 'BMW',
//   model: 'X5',
//   price: 58900,
// });
// console.log(bmwX5); // утвориться об'єкт { brand: "BMW", model: "X5", price: 58900 }

// const nissanMurano = new Car({
//   brand: 'Nissan',
//   model: 'Murano',
//   price: 31700,
// });
// console.log(nissanMurano); // утвориться об'єкт { brand: "Nissan", model: "Murano", price: 31700 }

// nissanMurano.changeBrand('Honda');
// console.log(nissanMurano); // утвориться об'єкт { brand: "Honda", model: "Murano", price: 31700 }

// // 💡 Task 13
// // ЗАДАЧА: СКЛАД 2.0
// // Виконай рефакторинг класу Storage, зробивши властивість items приватною.
// // Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.

// class Storage {
//   // Change code below this line
//   #items;
//   constructor(items) {
//     this.#items = items;
//   }

//   getItems() {
//     return this.#items;
//   }

//   addItem(newItem) {
//     this.#items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     this.#items = this.#items.filter(item => item !== itemToRemove);
//   }
// }

// // Change code above this line
// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);

// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]

// // 💡 Task 14
// // ЗАДАЧА: КОНСТРУКТОР РЯДКІВ 2.0
// // Виконай рефакторинг класу StringBuilder, зробивши властивість value приватною.
// // Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.

// class StringBuilder {
//   // Change code below this line
//   #value;
//   constructor(initialValue) {
//     this.#value = initialValue;
//   }

//   getValue() {
//     return this.#value;
//   }

//   padEnd(str) {
//     this.#value += str;
//   }

//   padStart(str) {
//     this.#value = str + this.#value;
//   }

//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }
// }

// // Change code above this line
// const builder = new StringBuilder('.');
// console.log(builder);
// console.log(builder.getValue()); // "."
// builder.padStart('^');
// console.log(builder.getValue()); // "^."
// builder.padEnd('^');
// console.log(builder.getValue()); // "^.^"
// builder.padBoth('=');
// console.log(builder.getValue()); // "=^.^="

// // 💡 Task 15
// // Виконай рефакторинг класу Car. Зроби властивості model і price приватними, а також #brand. Стандартизуй публічний інтерфейс класу, замінивши вже оголошені методи на гетери та сетери brand, model і price, для взаємодії з приватними властивостями.

// class Car {
//   // Change code below this line
//   #brand;
//   #model;
//   #price;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
//   // Change code above this line
// }

// const audiQ3 = new Car({
//   brand: 'Audi',
//   model: 'Q3',
//   price: 36000,
// });

// console.log(audiQ3); // утвориться об'єкт { brand: "Audi", model: "Q3", price: 36000 }
// console.log(audiQ3.brand);
// console.log(audiQ3.model);
// console.log(audiQ3.price);

// audiQ3.brand = 'Honda';
// audiQ3.model = 'Civic';
// audiQ3.price = 3200;

// console.log(audiQ3.brand);
// console.log(audiQ3.model);
// console.log(audiQ3.price);

// // 💡 Task 16
// // Виконай рефакторинг класу Car. Додай публічну статичну властивість MAX_PRICE зі значенням 50000 - максимально допустима ціна автомобіля.
// // Додай сетеру price перевірку значення параметра newPrice, що передається. Якщо воно більше за MAX_PRICE, сеттер нічого не робить, а якщо менше або дорівнює, то перезаписує ціну автомобіля.

// class Car {
//   // Change code below this line
//   #price;
//   static MAX_PRICE = 50000;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice < Car.MAX_PRICE) {
//       this.#price = newPrice;
//     }
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// // 💡 Task 17
// // Додай класу Car публічний статичний метод checkPrice (price), що приймає ціну автомобіля. Метод повинен порівняти значення параметра price і приватної статичного властивості MAX_PRICE.
// // Якщо ціна автомобіля перевищує максимальну, метод повинен повернути рядок "Error! Price exceeds the maximum".
// // В іншому випадку метод повинен повернути рядок "Success! Price is within acceptable limits".
// // Під оголошенням класу ми додали ініціалізацію екземпляра і виклики методів, щоб показати, як буде використовуватися метод checkPrice(price).

// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
//   static checkPrice(price) {
//     if (price > Car.#MAX_PRICE) {
//       return 'Error! Price exceeds the maximum';
//     }
//     return 'Success! Price is within acceptable limits';
//   }

//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// console.log(Car.checkPrice(36000)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(18000)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(64000)); // "Error! Price exceeds the maximum"
// console.log(Car.checkPrice(57000)); // "Error! Price exceeds the maximum"

// // 💡 Task 18
// // У застосунку потрібен адміністратор з можливістю додавати пошти користувачів у чорний список.
// // Оголоси клас Admin, який наслідує від класу User.
// // Додай класу Admin публічну статичну властивість AccessLevel (рівень доступу), значення якої — це об'єкт {BASIC: "basic", SUPERUSER: "superuser"}.

// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Change code below this line

// class Admin extends User {
//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };
// }

// console.log(Admin.AccessLevel.BASIC); // "basic"
// console.log(Admin.AccessLevel.SUPERUSER); // "superuser"

// // 💡 Task 19
// // Додай класу Admin метод constructor, який приймає один параметр - об'єкт налаштувань з двома властивостями email і accessLevel. Додай класу Admin публічну властивість accessLevel, значення якої буде передаватися під час виклику конструктора.
// // Щоб показати, як буде використовуватися клас Admin, ми додали ініціалізацію екземпляра під оголошенням класу.

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//     };
//     constructor({email, accessLevel}) {
//         super(email);
//         this.accessLevel = accessLevel;
//     }

//   // Change code above this line
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// console.log(Admin.AccessLevel.BASIC); // "basic"
// console.log(Admin.AccessLevel.SUPERUSER); // "superuser"

// // 💡 Task 20
// // Додай класу Admin наступні властивості і методи.
// // Публічну властивість blacklistedEmails для зберігання чорного списку поштових адрес користувачів. Значення за замовчуванням — це порожній масив.
// // Публічний метод blacklist(email) для додавання пошти у чорний список. Метод повинен додавати значення параметра email в масив, що зберігається у властивості blacklistedEmails.
// // Публічний метод isBlacklisted(email) для перевірки пошти у чорному списку. Метод повинен перевіряти наявність значення параметра email в масиві, що зберігається у властивості blacklistedEmails, і повертати true або false.
// // Після оголошення класу ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };

//   constructor({ email, accessLevel, blacklistedEmails = [] }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     this.blacklistedEmails = blacklistedEmails;
//   }
//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }

//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//   }

//   // Change code above this line
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted('mango@mail.com')); // false
// console.log(mango.isBlacklisted('poly@mail.com')); // true

// // 📜📜📜 Практика

// // 📜 1
// // Є об'єкт і функція для підрахунку суми чисел. Виведить у консоль результат функції, якщо a = 3, b = 5.

// var obj = { num: 2 };

// function add(a, b) {
//   return this.num + a + b;
// }
// // не вірно, яле працює
// // obj.res = add;
// // console.log(obj.res(3, 5));

// console.log(add.call(obj, 3, 5));
// console.log(add.apply(obj,[3, 5]));

// const res = add.bind(obj, 3, 5);
// console.log(res());

// // 📜 2
// // Є два об'єктиб які описують деякі характеристики телефонів. Потрібно викликати метод showInfo, щоб він логував інформацію про кожний телефон, передаючи аргументом країну-виробник телефону ('HUAWEI' - 'China', 'SAMSUNG' - 'South Korea').

// const tel1 = {
//   regNumber: 'A1B2D3',
//   brand: 'HUAWEI',
//   showInfo(country) {
//     console.log(`${country} ${this.regNumber} ${this.brand}`);
//   },
// };
// const tel2 = {
//   regNumber: 'B2D3C4',
//   brand: 'SAMSUNG',
// };

// tel1.showInfo('China');
// tel1.showInfo.call(tel2, 'South Korea');
// tel1.showInfo.apply(tel2, ['South Korea']);

// const res = tel1.showInfo.bind(tel2, 'South Korea');
// res();

// // 📜 3
// // 1. Створить об'єкт car з трьома властивостями:
// // carBrand: 'Audi Q3'
// // price: 23000
// // метолд getData() котрий буде логувати рядок: 'Audi Q3 за 23000 $'
// // 2. Напишіть функцію makeMessage(callback), котра отримує в якості параметра колбек-функцію getData() і логує повідомлення 'Ви замовили ${callback()}'

// const car = {
//   carBrand: 'Audi Q3',
//   price: 23000,
//   getData() {
//     // console.log(`${this.carBrand} за ${this.price} $`);
//     return `${this.carBrand} за ${this.price} $`;
//   },
// };
// car.getData();

// function makeMessage(callback) {
//   // console.log(`Ви замовили ${callback}`);
//   console.log(`Ви замовили ${callback()}`);
// }

// makeMessage(car.getData.bind(car));

// // 📜 4
// // Наепишить код таким чином, щоб об'єкт apples став прототипом для об'єкта fuji.
// // Перевірте, чи став об'єкт apples прототипом для об'єкта fuji.
// // Додайте об'єкту fuji властивість color: 'pink' і виведить його у консоль.
// // Виведить у консоль значення властивості type для об'єкту fuji.
// // Перевірте і виведіть у консоль чи є властивість vitamins власною властивістю об'єкту apples.
// // Перевірте і виведіть у консоль чи є властивість cookingMethod власною властивістю об'єкту fuji.

// const apples = {
//   type: 'fruit',
//     cookingMethod: ['jam', 'juice', 'baked', 'dried', 'fresh'],
//   vitamins: ['A', 'B1', 'B2', 'E'],
// };

// const fuji = Object.create(apples);
// console.log(fuji);
// console.log(apples.isPrototypeOf(fuji)); // true

// fuji.color = 'pink'
// console.log(fuji.color); // 'pink'

// console.log(fuji.type); // 'fruit'

// console.log(apples.hasOwnProperty('vitamins')); // true
// console.log(fuji.hasOwnProperty('cookingMethod')); // false

// // 📜 5
// // Створити клас для калькулятора, який має такі методи:
// // метод number, який наубває початкового значення для наступних операцій
// // метод getResult, який повертає фінальний результат усіх операцій, проведених з числом
// // методи add, substruct, divide, multiply
// // Об'єкт класу приймає число і може проводити з ним послідовні операції у вигляді ланцюжка

// class Calculator {
//   constructor() {
//     this.result = 0;
//   }
//   number(num) {
//     this.result = num;
//     return this;
//   }

//   add(num) {
//     this.result += num;
//     return this;
//   }
//   substruct(num) {
//     this.result -= num;
//     return this;
//   }
//   divide(num) {
//     this.result /= num;
//     return this;
//   }
//   multiply(num) {
//     this.result *= num;
//     return this;
//   }

//   getResult() {
//     return this.result;
//   }
// }

// const operation = new Calculator();

// const resAdd = operation.number(5).add(5).getResult();
// console.log(resAdd); // 10

// const resSubstruct = operation.number(5).substruct(5).getResult();
// console.log(resSubstruct); // 0

// const resDivide = operation.number(5).divide(5).getResult();
// console.log(resDivide); // 1

// const resMultiply = operation.number(5).multiply(5).getResult();
// console.log(resMultiply); // 25

// // 📜 6
// // Напиши клас Rectangle, який створює об'єкт з властивостями height та width і методом calculateArea() для пфдрвхунку площі прямокутника.

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
//   calculateArea() {
//     return this.height * this.width;
//   }
// }

// const rect1 = new Rectangle(5, 10)
// console.log(rect1.calculateArea())

// // 📜 7
// // Створить клас Car, який має конструктор для зберігання марки та року виробництва автомобіля. Додайте метод, який обчислює вік автомобіляна основі поточного року та року виробництва і виведе в консорль рядок 'Вік автомобіля: age років'.

// // let currentYear =  Date().getFullYear();
// // console.log(new Date().getFullYear());

// class Car {
//   constructor(model, made) {
//     this.model = model;
//     this.made = made;
//   }

//   getAge() {
//     console.log(
//       `Вік автомобіля: ${new Date().getFullYear() - this.made} років`
//     );
//   }
// }

// const car1 = new Car('Nissan', 2011)
// car1.getAge()

// // 📜 7
// // Напиши клас Client, який створбєж об'єкт з властивостями login та email.
// // Оголоси приватні властивості #login та #email, доступ до яких зроби через гетер та сетер login та email.

// class Client {
//   #login;
//   #email;
//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     if (newLogin) {
//       this.#login = newLogin;
//     }
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     if (newEmail) {
//       this.#email = newEmail;
//     }
//   }
// }

// const client1 = new Client('Bob', 'bob@em.el')
// console.log(client1);
// console.log(client1.login);
// client1.login = '';
// console.log(client1.login);

// console.log(client1);
// console.log(client1.email);
// client1.email = '';
// console.log(client1.email);

// // 📜 8
// // Створи клас Phone, який створює об'єкт з властивістю price.
// // Додай статичну властивість MAX_PRICE зі значенням 4000 - максимально допустима ціна телефону.
// // Оголоси приватну властивість price, доступ до якої буде через геттер та сеттер.
// // Додай сеттеру price перевірку значення параметра newPrice, що передається. Якщо воно більше за MAX_PRICE, сеттер нічого не робить, а якщо менше або дорівнює, то перезаписує ціну телефона.

// class Phone {
//   static MAX_PRICE = 4000;
//   #price;
//   constructor(price) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Phone.MAX_PRICE) {
//       this.#price = newPrice;
//     }
//   }
// }

// const phone1 = new Phone(2000);
// console.log(phone1.price); // 2000
// phone1.price = 4000;
// console.log(phone1.price); // 4000
// phone1.price = 5000;
// console.log(phone1.price); // 4000

// // 📜 9
// // Створить клас BankAccount, який має конструктор для зберігання номеру рахунку та балансу. Додайте методи:
// // withdraw - метод для зняття готівки. Отримує в якості аргументу суму готівки, котру потрібно зняти. Готівку можна зняти за умови, що баланс більше або дорівнює сумі, котру хоче зняти користувач. Виводить повідомлення: 'Знято 100 грн. Залишок на рахунку: 3000 грн' або 'Недостатньо коштів на рахунку'.
// // deposit - метод для поповнення балансу. Отримує в якості аргументу суму, котру користувач хоче покласти на рахунок. Виводить повідомлення: 'Поповнено 100 грн. Залишок на рахунку: 3100 грн'.
// // checkBalance - метод для преревірки балансу. Виводить повідомлення: 'Залишок на рахунку: 3100 грн'.

// class BankAccount {
//   constructor({ account, balance }) {
//     this.account = account;
//     this.balance = balance;
//   }
//   checkBalance() {
//     console.log(`Залишок на рахунку: ${this.balance} грн`);
//   }

//   withdraw(summ) {
//     if (summ > this.balance) {
//       console.log(`Недостатньо коштів на рахунку`);
//       return;
//     }
//     this.balance -= summ;
//     console.log(`Знято ${summ} грн. Залишок на рахунку: ${this.balance} грн`);
//   }

//   deposit(summ) {
//     this.balance += summ;
//     console.log(
//       `Поповнено ${summ} грн. Залишок на рахунку: ${this.balance} грн`
//     );
//   }
// }

// const acc1 = new BankAccount({ account: 123, balance: 3000 });
// console.log(acc1);
// acc1.checkBalance();
// acc1.deposit(100);
// acc1.withdraw(4000);
// acc1.withdraw(100);

// // 📜 10
// // Написати клас StudentList, котрий має приватну властивість students - масив для зберігання іиен студентів.
// // Додайте метод addStudent, який отримує аргуметом ім'я студента та додає його в масив students (в масиві зберігаються тільки унікальні імена) та виводить рядок 'Студента student додано до списку' або 'Студент student вже є у списку', якщо такий студент вже є.
// // Додайте метод removeStudent, який отримує аргументом ім'я студента та видаляє студента з масиву students, якщо такий є, та виводить в консоль рядок 'Студента student видалено зі списку', або 'Студента student не знайдено у списку'.
// // Долдайте метод getStudents, який виводить масив всіх студентів.
// // Додайте метод clearList, який очищає масив студентів і виводить повідомлення 'Список студентів очищено'.

// class StudentList {
//   #students;

//   constructor() {
//     this.#students = [];
//   }

//   addStudent(student) {
//     if (this.#students.includes(student)) {
//       console.log(`Студент ${student} вже є в списку`);
//       return;
//     }
//     this.#students.push(student);
//     console.log(`Студента ${student} додано до списку`);
//   }
//   removeStudent(student) {
//     const idx = this.#students.indexOf(student);
//     if (!!~idx) {
//       this.#students.splice(idx, 1);
//         console.log(`Студента ${student} видалено зі списку`);
//         return
//     }
//     console.log(`Студента ${student} не знайдено в списку`);
//   }

//   getStudents() {
//     console.log(this.#students);
//   }

//   clearList() {
//     this.#students = [];
//     console.log(`Список студентів очищено`);
//   }
// }

// const newList1 = new StudentList();
// newList1.addStudent('Bob');
// newList1.addStudent('Bob');
// newList1.addStudent('Mango');
// newList1.addStudent('Poly');
// // console.log(newList1);
// // newList1.clearList()
// // newList1.removeStudent('Bob');
// // newList1.removeStudent('Ajax');
// newList1.getStudents();

