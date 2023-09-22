'use strict';

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

// 💡 Task 14
// ЗАДАЧА: КОНСТРУКТОР РЯДКІВ 2.0

// 💡 Task 15

// 💡 Task 16

// 💡 Task 17

// 💡 Task 18

// 💡 Task 19

// 💡 Task 20
