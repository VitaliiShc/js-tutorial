// // ❗️❗️❗️ Асинхронність
// // Взагалі код виконується синхронно - послідовно виконуєть кожна функція, наступнеа виконується після завршення попередньої. Виконання попередньої функції блокує виконання наступної.
// // Асінхронність дозволяє налаштувати роботу коду такім чином, щоб трівала оперція не блокувала роботу коду, а переносила його виконання на "потім" (кли звільнится стек викликів, але не раніше, ніж через вказаний час). Не є аналогом багатопотоковості (оперуії викону.тьяся одночасно, паралельно).

// // ❗️ Воркери - можливість браузера відкрити другий поток виконання сінхронного громодкого коду паралельно, щоб звільнити пам'ять для виконання поточних операцій
// // https://bitsofco.de/web-workers-vs-service-workers-vs-worklets/

// // ❗️❗️❗️ Таймери
// // ❗️ Метод setTimeout() дозволяє запланувати виклик функції через певний час:
// // const timerId = setTimeout(callback, delay, arg1, arg2, ...);
// // Де:
// // callback - функція, виконання якої необхідно запланувати,
// // delay - час в мілісекундах, через який callback-функція буде викликана один раз,
// // arg1, arg2 - аргументи що будуть передані callback-функції під час виклику.
// // Повертає цифровий ідентифікатор створеного таймера, який використовується для його видалення (методом clearTimeout(timerId)).

// const onClick = () => {
//   const timerId = setTimeout((x) => {
//     console.log('I love async JS!');
//       console.log('це x', x);
//   }, 2000, 5); // аргументом передано 5 для x
//   console.log(timerId);
// };
// document.addEventListener('click', onClick);

// const onClick = () => {
//   const timerId = setTimeout(
//     (msg) => {
//       console.log(msg);
//     },
//     2000,
//     'I love async JS!'
//   ); // аргументом передано  'I love async JS!' для msg
//   console.log(timerId);
// };
// document.addEventListener('click', onClick);

// // Якщо для таймера встановлено delay = 0, то колбек-функція з таймаутом все одне буде викоикана після виконання після всього синхронного коду - тільки коли стек очистився, бо вона відкладена.
// console.log('До таймаута');
// setTimeout(() => {
//   console.log('Відкладена функція');
// }, 0);
// console.log('Після таймаута 1');
// console.log('Після таймаута 2');
// console.log('Після таймаута 3');

// // ❗️ Метод clearTimeout(timerId) застиосовується для скасування виклику функції. Приймає ідентіфікатор таймера та видаляє його.

// const greet = () => {
//   console.log('Hello!');
// };
// const timerId = setTimeout(greet, 3000);
// clearTimeout(timerId); // в консоль не буде нічго виведено, тому що clearTimeout() спрацьовує до настання моменту виклику функції.

// // ❗️ Метод setInterval() - дозволяє задавати многоразовий виклик функції з заданим інтервалом
// const timerId = setInterval(callback, delay, arg1, arg2, ...);
// // Де:
// // callback - функція, виконання якої необхідно запланувати,
// // delay - час інтервалу в мілісекундах, через який callback-функція регулярно викликатися буде викликана один раз,
// // arg1, arg2 - аргументи що будуть передані callback-функції під час виклику.
// // Повертає цифровий ідентифікатор створеного таймера, який використовується для його видалення (методом clearInterval(timerId)).

// const body = document.querySelector('body')
// body.innerHTML =
//   '<button type="button" class="js-start">Start</button><button type="button" class="js-stop">Stop</button>';

// const startBtn = document.querySelector('.js-start');
// const stopBtn = document.querySelector('.js-stop');
// let timerId = null;

// startBtn.addEventListener('click', () => {
//   timerId = setInterval(() => {
//     console.log(`I love async JS!  ${Math.random()}`);
//   }, 1000);
// });

// stopBtn.addEventListener('click', () => {
//   clearInterval(timerId);
//   console.log(`Interval with id ${timerId} has stopped!`);
// });

// // За стандартом мінімальна затримка тайм-айта становіть 4 мс. таймер може спрацьовувати рідше, ніж встановлено delay при занадто великому завантаженні процессора - деякі запуски можутьт бути пропущени або виконані із запізненням. Браузери можуть виконувати запуски функецій по тайм-ауту та інтервалу навіть якщо вкладка браузера не активна, але знижують частоту запусків.

// ❗️ Цикл подій
// latentflip.com/loupe


// // ❗️❗️❗️ Дата та час
// // Для роботі з датою та часом використовується глобальний абстрактний клас Date, який дозволяє створювати годинникилічильники, календарі та інші інтерактівні елементи інтерфейсу.
// // Ліба для роботи з датамі - https://date-fns.org/
// // Екземпляр класу Date - це об'єкт, що відображає певний момент часу. Створення дати без аргументів повертає об'єкт поточної дати та часу (під капотом в косолі виводиться  в форнматі рядка як результат виклику методу toString()).
// const date = new Date();
// console.log(date); // "Fri Jun 18 2021 15:01:35 GMT+0300 (EET)"
// console.log(date.toString()); // "Fri Jun 18 2021 15:01:35 GMT+0300 (EET)"

// // ❗️ Unix час
// // Відлік часму ведеться в мілісекундах та вкедеться від 1 січня 1970 року часовому поясі UTC (Coordinated Universal Time, Всесвітній координований час, співпадає з часом по Грінвічу) - це Unix час.
// const date = new Date();
// console.log(new Date(0)); // "Thu Jan 01 1970 03:00:00 GMT+0300 (EET)"
// console.log(new Date(15000)); // "Thu Jan 01 1970 03:00:15 GMT+0300 (EET)"

// // ❗️ Метод getTime() повертає числове значення вказаної дати (timestamp).
// const BIRTHDAY = new Date('December 13, 1976');
// console.log(BIRTHDAY.getTime()); // 219272400000;
// console.log(new Date(219272400000)); // "Mon Dec 13 1976 00:00:00 GMT+0300 (EET)"

// // ❗️ Встановлення дати
// // При створенны екземпляру класу Date дату можна встановити рядком або числами.
// // Рядок може описувати лише дату та час. Встановлення часу у вигляді рядка внутрішньо викликажє метод Date.parse(), який перетворює рядок у число - кількість мілісекунд.
// const teamMeetingDate = new Date("March 16, 2030");
// console.log(teamMeetingDate); // "Mon Mar 16 2030 00:00:00 GMT+0200 (EET)"
// const preciseTeamMeetingDate = new Date("March 16, 2030 14:25:00");
// console.log(preciseTeamMeetingDate); // "Mon Mar 16 2030 14:25:00 GMT+0200 (EET)"
// //  Приклади рядкив:
// new Date('2030-03-16');
// new Date('2030-03');
// new Date('2018');
// new Date('03/16/2030');
// new Date('2030/03/16');
// new Date('2030/3/16');
// new Date('March 16, 2030');
// new Date('March 16, 2030 14:25:00');
// new Date('2030-03-16 14:25:00');
// new Date('2030-03-16T14:25:00');
// new Date('16 March 2030');

// // Числа - 7 чмсел, які описують:
// // рік, місяць (починається з 0), день, години, хвилини, секунди і мілісекунди. Обов'язкові тільки перші три.

// const BIRTHTAME = new Date(1976, 11, 13, 10, 0, 0, 0);
// console.log(BIRTHTAME); // "Mon Dec 13 1976 10:00:00 GMT+0300 (EET)"
// const BIRTHDAY = new Date(1976, 11, 13);
// console.log(BIRTHDAY); // "Mon Dec 13 1976 00:00:00 GMT+0300 (EET)"

// // ❗️❗️❗️ Методи
// // ❗️ Геттери - застосовуються для читання дати або її складової.
// // Повернення значення, які залежєить від поточної дати, встановленої на компі:
// console.log('Date: ', Date.now()); // поточна дата в ms (timestamp - отметка часу), стиатичний метод для отримання без оголошення екземпляру калса Date (бережемо пам'ять)
// console.log('Date: ', date);
// console.log('getDate(): ', date.getDate()); // Повертає день місяця від 1 до 31
// console.log('getDay(): ', date.getDay()); // Повертає день тижня від 0 до 6 (неділя = 0)
// console.log('getMonth(): ', date.getMonth()); // Повертає місяць від 0 до 11 (january = 0)
// console.log('getFullYear(): ', date.getFullYear()); // Повертає рік з 4 цифр
// console.log('getHours(): ', date.getHours()); // Повертає години
// console.log('getMinutes(): ', date.getMinutes()); // Повертає хвилини
// console.log('getSeconds(): ', date.getSeconds()); // Повертає секунди
// console.log('getMilliseconds(): ', date.getMilliseconds()); // Повертає мілісекунди

// // Повернення значення у форматі UTC (Coordinated Universal Time), не залежєить від поточної дати, встановленої на компі:
// const date = new Date();
// console.log('Date: ', date);
// console.log('getUTCDate(): ', date.getUTCDate()); // Повертає день місяця від 1 до 31
// console.log('getUTCDay(): ', date.getUTCDay()); // Повертає день тижня від 0 до 6
// console.log('getUTCMonth(): ', date.getUTCMonth()); // Повертає місяць від 0 до 11
// console.log('getUTCFullYear(): ', date.getUTCFullYear()); // Повертає рік з 4 цифр
// console.log('getUTCHours(): ', date.getUTCHours()); // Повертає години
// console.log('getUTCMinutes(): ', date.getUTCMinutes()); // Повертає хвилини
// console.log('getUTCSeconds(): ', date.getUTCSeconds()); // Повертає секунди
// console.log('getUTCMilliseconds(): ', date.getUTCMilliseconds()); // Повертає мілісекунди

// // ❗️ Сеттери - методи для запису дати. Існують як для локального часу, так і для UTC-часу. Називаються також, як і для геттеров.
// const date = new Date("March 16, 2030 14:25:00");
// date.setMinutes(50); // "Sat Mar 16 2030 14:50:00 GMT+0200"
// date.setFullYear(2040, 4, 8); // "Tue May 08 2040 14:50:00 GMT+0300"

// // ❗️ Форматування дати
// // Для представлення об'єкта дати у різних форматах для зручності читання використовуються методи. В тому чіслі:
// const date = new Date("March 16, 2030 14:25:00");
// date.toString(); // "Sat Mar 16 2030 14:25:00 GMT+0200 (EET)"
// date.toTimeString(); // "14:25:00 GMT+0200 (EET)"
// date.toLocaleTimeString(); // "2:25:00 PM"
// date.toUTCString(); // "Sat, 16 Mar 2030 12:25:00 GMT"
// date.toDateString(); // "Sat Mar 16 2030"
// date.toISOString(); // "2030-03-16T12:25:00.000Z"
// date.toLocaleString(); // "3/16/2030, 2:25:00 PM"
// date.getTime(); // 1899894300000

// // ❗️❗️❗️ Проміси (Promise, обіцянка)
// //

// // Change value of isSuccess variable to call resolve or reject
// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 20000);
// });
// console.log(promise);


// // Change value of isSuccess variable to call resolve or reject
// const isSuccess = false;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// // Will run first
// console.log("Before promise.then()");

// // Registering promise callbacks
// promise.then(
//   // onResolve will run third or not at all
//   value => {
//     console.log("onResolve call inside promise.then()");
//     console.log(value); // "Success! Value passed to resolve function"
//   },
//   // onReject will run third or not at all
//   error => {
//     console.log("onReject call inside promise.then()");
//     console.log(error); // "Error! Error passed to reject function"
//   }
// );

// // Will run second
// console.log("After promise.then()");


// // Change value of isSuccess variable to call resolve or reject
// const isSuccess = false;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// promise
//   .then(value => {
//     console.log(value);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 2000);
// });

// promise
//   .then((value) => {
//     console.log(value); // 5
//     return value * 2;
//   })
//   .then((value) => {
//     console.log(value); // 10
//     return value * 3;
//   })
//   .then((value) => {
//     console.log(value); // 30
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log('Final task');
//   });

// const fetchUserFromServer = (username, onSuccess, onError) => {
//   console.log(`Fetching data for ${username}`);

//   setTimeout(() => {
//     // Change value of isSuccess variable to simulate request status
//     const isSuccess = true;

//     if (isSuccess) {
//       onSuccess('success value');
//     } else {
//       onError('error');
//     }
//   }, 2000);
// };

// const onFetchSuccess = (user) => {
//   console.log(user);
// };

// const onFetchError = (error) => {
//   console.error(error);
// };

// fetchUserFromServer('Mango', onFetchSuccess, onFetchError);