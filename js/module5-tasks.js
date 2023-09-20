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

// 💡 Task 04

// 💡 Task 05

// 💡 Task 05

// 💡 Task 06

// 💡 Task 07

// 💡 Task 08

// 💡 Task 09

// 💡 Task 10

// 💡 Task 11

// 💡 Task 12

// 💡 Task 13

// 💡 Task 14

// 💡 Task 15

// 💡 Task 16

// 💡 Task 17

// 💡 Task 18

// 💡 Task 19

// 💡 Task 20
