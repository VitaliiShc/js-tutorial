// // 💡 Task 01
// // Створить функцію createCounter(), яка при кожному виклику повертає наступне число у послідовності (1, 2, 3, ...). Продемонструйте, як замикання допомогає зберегти поточний стан лічильника між викликами функції.

// function createCounter() {
//   let counter = 0;
//   return function () {
//     return (counter += 1);
//   };
// }

// const counter1 = createCounter();
// const counter2 = createCounter();

// console.log(counter1());
// console.log(counter1());
// console.log(counter1());

// console.log(counter2());
// console.log(counter2());

// console.log(counter1()); // функція запам'ятала своє лексічне оточення та значення змінної counter збереглося та лічильник продовжив накопичиватися

// // 💡 Task 2
// // При натисканні на кнопку "SHOW ME" потрібно за допомогою alert вивести значення, яке було введено в інпут.

// const btn = document.querySelector('#alertButton');
// const input = document.querySelector('#alertInput');

// btn.addEventListener('click', onAlertBtnClick);

// function onAlertBtnClick(e) {
//   alert(input.value);
// }

// // 💡 Task 3
// // При натискані на кнопку "Приховати" потрібно введені користувачем символи в інпуті відображати у вигляді крапок замість звичайного тексту, а також змінити назву кнопки на "Показати" та при повторному натискані знову відображати символи, а назва кнопки змінится на "Приховати".

// // Вариант 1 (не застосовуючи тип інпуту type)
// // const btn = document.querySelector('#passwordButton');
// // const input = document.querySelector('#passwordInput');

// // btn.addEventListener('click', onHideBtnClick);

// // function onHideBtnClick(e) {
// //   if (!input.value && !input.hasAttribute('data-pass')) {
// //     alert('Це поле не може бути порожнім');
// //   } else {
// //     if (!input.hasAttribute('data-pass')) {
// //       input.setAttribute('data-pass', input.value);
// //       input.value = ''.padStart(input.dataset.pass.length, '*');
// //       btn.textContent = 'Показати';
// //     } else {
// //       input.value = input.dataset.pass;
// //       input.removeAttribute('data-pass');
// //       btn.textContent = 'Приховати';
// //     }
// //   }
// // }

// // Вариант 2 (із застосованням типу інпуту type="password")

// const btn = document.querySelector('#passwordButton');
// const input = document.querySelector('#passwordInput');

// btn.addEventListener('click', onHideBtnClick);

// function onHideBtnClick(e) {
//   if (!input.value && !input.hasAttribute('type')) {
//     alert('Це поле не може бути порожнім');
//   } else {
//     if (!input.hasAttribute('type')) {
//       input.setAttribute('type', 'password');
//       btn.textContent = 'Показати';
//     } else {
//       input.removeAttribute('type');
//       btn.textContent = 'Приховати';
//     }
//   }
// }

// // 💡 Task 4
// Кнолпка "Збільшити" (increase) повинна збільшувати квадрат на 10 пікселів. Кнолпка "Зменшити" (decrease) повинна зменшивати квадрат на 10 пікселів.

// Варіант 1
// const decBtn = document.querySelector('#decrease');
// const incBtn = document.querySelector('#increase');
// const box = document.querySelector('#box');

// decBtn.addEventListener('click', onDecBtnClock);
// incBtn.addEventListener('click', onIncBtnClock);

// function onDecBtnClock() {
//   box.style.height = `
//     ${Number.parseInt(window.getComputedStyle(box).height) - 10}px`;
//   box.style.width = `
//     ${Number.parseInt(window.getComputedStyle(box).width) - 10}px`;
// }

// function onIncBtnClock() {box.style.height = `
//     ${Number.parseInt(window.getComputedStyle(box).height) + 10}px`;
// box.style.width = `
//     ${Number.parseInt(window.getComputedStyle(box).width) + 10}px`;}

// // Варіант 2

// const decBtn = document.querySelector('#decrease');
// const incBtn = document.querySelector('#increase');
// const box = document.querySelector('#box');

// decBtn.addEventListener('click', changeBoxSize);
// incBtn.addEventListener('click', changeBoxSize);

// function changeBoxSize(e) {
//   // console.log(e.target);
//   if (e.target.getAttribute('id') === 'decrease') {
//     box.style.height = `${box.offsetHeight - 10}px`;
//     box.style.width = `${box.offsetWidth - 10}px`;
//   }
//   if (e.target.getAttribute('id') === 'increase') {
//     box.style.height = `${box.offsetHeight + 10}px`;
//     box.style.width = `${box.offsetWidth + 10}px`;
//   }
// }

// // 💡 Task 5
// // При кліку на кнопку "Подвоїти" збільшувати значення в кожному елементі списку в два рази.

// // Варіант 1
// // const btn = document.querySelector('#double');
// // const list = document.querySelector('.list');
// // btn.addEventListener('click', () => {
// //   [...list.children].forEach((item) => {
// //     item.textContent = Number(item.textContent) * 2;
// //   });
// // });

// // Варіант 2
// const btn = document.querySelector('#double');
// const list = document.querySelectorAll('.listItem');
// btn.addEventListener('click', () => {
//   list.forEach((item) => {
//     item.textContent = item.textContent * 2;
//   });
// });

// // 💡 Task 6
// // При кліку на кнопку "Filter" потрібно видалити зі списку позначені елементи.

// // Варіант 1 - мой, не дуже працюючий
// // const form = document.querySelector('.checkboxForm');
// // const list = document.querySelectorAll('.checkboxWrapper');

// // form.addEventListener('submit', removeItems);

// // function removeItems(e) {
// //   e.preventDefault();
// //   list.forEach((item) => {
// //     if (item.lastElementChild.checked) {
// //       item.innerHTML = '';
// //     }
// //   });
// // }

// // Варіант 2
// const form = document.querySelector('.checkboxForm');
// const list = document.querySelectorAll('.checkboxWrapper');

// // form.addEventListener('submit', event => {
// //   event.preventDefault();
// //   const filteredList = [...list].filter(
// //       (item) => item.lastElementChild.checked);
// //     filteredList.forEach(el  => el.remove())
// // });

// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   [...list]
//     .filter((item) => item.lastElementChild.checked)
//     .forEach((item) => item.remove());
// });

// // 💡 Task 7
// // Наведено список людей. Зроби можлівість фільтрації (пошуку) за ім'ям або за прізвищем.

// const input = document.querySelector('.contactsFilter');
// const contacts = document.querySelectorAll('.contact');
// input.addEventListener('input', _.debounce(filterContacts, 2000));

// function filterContacts() {
//   [...contacts]
//     .filter(
//       (contact) =>
//         !contact.textContent.toLowerCase().includes(input.value.toLowerCase())
//     )
//     .forEach((item) => item.remove());
// }

// // 💡 Task 8
// // Наведено список людей. Зроби можлівість сортування списку за ім'ям та за прізвищем.
// const sortByNameBtn = document.querySelector('#sortByNameButton');
// const sortByLastNameBtn = document.querySelector('#sortByLastNameButton');
// const people = document.querySelector('.people');

// sortByNameBtn.addEventListener('click', sortByName);
// sortByLastNameBtn.addEventListener('click', sortBylastName);

// function sortByName() {
//   const sorteredpeopleList = [...people.children].sort((a, b) =>
//     a.textContent.localeCompare(b.textContent)
//   );
//   people.innerHTML = '';
//   people.append(...sorteredpeopleList);
// }

// function sortBylastName() {
//   const sorteredpeopleList = [...people.children].sort((a, b) => {
//     const firstEl = a.textContent.split(' ')[1].toLowerCase();
//     const secondEl = b.textContent.split(' ')[1].toLowerCase();
//     return firstEl.localeCompare(secondEl);
//   });
//   people.innerHTML = '';
//   people.append(...sorteredpeopleList);
// }
