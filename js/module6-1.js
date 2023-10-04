// // ❗️❗️❗️ DOM

// // ❗️❗️❗️ Звернення до елементу в DOM - отримання посилання на цей елемент:

// ❗️ Метод .querySelector() - повертає ПЕРШЕ співпадіння в дереві DOM - вузол-елемент (element node). Формат повернення в кщнсолы залежить выд того, на якому документы викликано лайв-сервер. Для пошуку використовується CSS-селектор в лапках. Якщо не знайдено повертає null. Найчастіше використовується звернення за класом. В HTML-документі потрібно встановлювати відповідний клас з префиксом 'js-' (class = "js-title"). Кожен HTML-елемент в DOM це об'єкт.

const titleElTag = document.querySelector('h1'); // звернення за назвою тега
console.dir(titleElTag); // отримуємо посилання на елемент в DOM (dir відображає HTML-елемент у вигд=ляді об'єкта)

const titleElId = document.querySelector('#titleId'); // звернення за ідентифікатором
console.dir(titleElId); // отримуємо посилання на елемент в DOM

const titleElClass = document.querySelector('.js-title'); // звернення за ідентифікатором
console.dir(titleElClass); // отримуємо посилання на елемент в DOM

// ❗️ Властивість element.textContent. Використовується для дій з текстовим контентом (текстовий вузол (text node)) елементу. Для отримання текстового контенту , потрібно звертатися до цього елементу та додавати через крапку зверення до властивості textContent (після того, як ми вже отримали посилання на нього):
console.dir(titleElClass.textContent);
// Також можна змініти цей контент:
titleElClass.textContent = 'Hi, JS!';
console.dir(titleElClass.textContent);

// ❗️ Властивість element.classList. Використовується для дій з переліком класів елементу. Повертає псевдо-масив класів. Для виконання дій використовуються методи, найчастіше:
// ❗️ add() - додавання класу,
// ❗️ remove() - видалення класу,
// ❗️ toggle() - додавання класу, якщо немає, або видалення - якщо є
console.log(titleElClass.classList); // ['js-title']

titleElClass.classList.add('js-title-color');
console.log(titleElClass.classList); // ['js-title', 'js-title-color']

titleElClass.classList.remove('js-title-color');
console.log(titleElClass.classList); // ['js-title']

titleElClass.classList.toggle('js-title-color');
console.log(titleElClass.classList); // ['js-title', 'js-title-color']
titleElClass.classList.toggle('js-title-color');
console.log(titleElClass.classList); // ['js-title']

// ❗️ Властивість element.style використовуєтиься для додання інлайн стилів. При цьому назву додаваної властивості потрібно записувати в camelCase (background-color -> backgroundColor; font-size -> fontSize). Не бажано використовувати, тому що при кожному доданні зміни виконується повне перезавантаження HTML-документу - це впливає на продуктивність. Тому краще застосовувати зміну за додаванням класу, який створювати в CSS - перевантаження DOM виконується один раз з застосуванням стилів з класу.
titleElClass.style.fontSize = '50px';
titleElClass.style.color = 'green';

// Також при роботі з атрибутами HTML-елементів можуть використовуватися звернення до іч атрибутів для отримання іх властивостей та значень:
// value - містить поточний текстовий контент елементів форм.
// checked - зберігає стан чекбокса або радіокнопки.
// name - зберігає значення, вказане в HTML-атрибуті name.
// src - шлях до зображення тегу <img>.

// // ❗️ Метод .querySelectorALL() повертає псевдо-масив всіх знайденіх елементів, відповідаючих умові (тег, клас):
const listEls = document.querySelectorAll('.js-list-item');
console.log(listEls);

// // ❗️❗️❗️ Атрибути
// ❗️ Системні. або базові атрибути - атрибути, яки стандартні для елементу в тегі HTML. Мають вбудолвані властиволстію
// ❗️ Дата-атрибути - додаткові, довільні, атрибути, яки дозволяють використовувавти їх значення в JS. Виколристовується для "прокідання" значення далі для роботи з цім елементом в коді.
// Методи роботи з атрибутами:
// ❗️ elem.hasAttribute(name) - перевіряє, чи є такий атрибут у елемента, повертає true або false:
console.log(titleElClass.hasAttribute('id'));

// ❗️ elem.getAttribute(name) - повертиає значення цього атрибути:
console.log(titleElClass.getAttribute('id'));

// ❗️ elem.setAttribute(name, value) - встановлює або змінює трибут. Але при роботі з атрибутами, для яких не потрібно вказувати значяення (hidden, dasable, ...) такий метод не працює - в такому випадку потрібно додавати з порожнім значенням, або використовувати конструкцію з прямим зверненням, а для змыни (видалення) існуючого атрибуту використовувати elem.removeAttribute(name):
titleElClass.setAttribute('id', 'titId');
console.log(titleElClass.getAttribute('id'));
titleElClass.setAttribute('hidden', ''); // приховати
titleElClass.removeAttribute('hidden'); // показати - видалено атрибут hidden

// ❗️ elem.removeAttribute(name) - видаляє атрибут та його значення:
titleElClass.removeAttribute('id');
console.log(titleElClass.hasAttribute('id'));

// ❗️ elem.attributes - повертає об'єкт всіх наявних атрибутів:
console.log(titleElClass.attributes);

// Пряме звернення та зміна системного атрибуту може виконуватися наствупним чином. Такого системного атрибуту не існує, але ця команда додає його та/або змінює:

// console.dir(titleElClass.hidden);
// titleElClass.hidden = true; // приховано
// console.dir(titleElClass.hidden);
// titleElClass.hidden = false; // показано

// ❗️ Властивість dataset. Во властивості сберігається дата-атрибут. Використовується для отримання значення data-атрибута, та для отримання значення потрібнео вказувати лише ім'я атрибьута без префиксу data-:
console.log(titleElClass.dataset.id);
// Але якщо ми використовуємо для роботи з дата-атрибутами методи, то для них потрібно вказувати назву атрибуту з префіксом 'data-':
console.log(titleElClass.hasAttribute('data-id'));
console.log(titleElClass.getAttribute('data-id'));
titleElClass.setAttribute('data-id', '345');
console.log(titleElClass.getAttribute('data-id'));
titleElClass.setAttribute('data-good', 'apple');
console.log(titleElClass.getAttribute('data-good'));

// ❗️❗️❗️ Навігація по DOM
// Якщо ми отримуємо посилання на перелік, то:
const listPrimEl = document.querySelector('.js-list-prim');
console.dir(listPrimEl); // при поверненні во властиволсті childNodes вказуються також перенос рядка (а це не зручно), але в children - ні (тому використовуємо її, тому що вона не повертає зайвого)

const listEl = document.querySelector('.js-list');
console.dir(listEl);

// При використанні властивостей ми отримуємо колекції елементів.
// Для звернень до елементів по DOM використовуються наступні властивості:
// ❗️ elem.parentNode - вибере батьківський елемент
// ❗️ elem.childNodes - повертає псевдо-масив всіх дочірніх елементів (першого рівня) з текстовима елементами (переноси, коментирі та т. і.)
// ❗️ elem.children - повертає псевдо-масив дочірніх вузлів-елементів у відповдності до тегів
// ❗️ elem.firstChild - вибере перший дочірній елемент з текстовима вузлами
// ❗️ elem.firstElementChild - вибере перший дочірній вузол-елемент без текстових вузлів
// ❗️ elem.lastChild - вибере останній елемент з текстовима вузлами
// ❗️ elem.lastElementChild - вибере останній вузол-елемент без текстових вузлів
// ❗️ elem.previousSibling - вибере елемент зліва (попередній сусід) з текстовима вузламі
// ❗️ elem.previousSibling - вибере вузол-елемент зліва (попередній сусід) без текстових вузлів
// ❗️ elem.nextSibling - вибере елемент праворуч (наступний сусід) з текстовима вузламі
// ❗️ elem.nextElementSibling - вибере вузол-елемент праворуч (наступний сусід) без текстових вузлів

// Коли отримуємо псевдо-масив, то для обробки його в переборах використовуємо спред (...spread). Але варто розуцмити, що зручнише всього працювати з рівнями вкладенности до 2-го.
const childrenPsevdoArr = listPrimEl.children;
console.log(childrenPsevdoArr);
const childrenArr = [...childrenPsevdoArr];
console.log(childrenArr);

// ❗️❗️❗️ Створення, додавання та вилучення елементів з DOM
// ❗️ Створення - метод document.createElement(tagName, *[options]). Використовується для створення елементів:
const newEl = document.createElement('p');
console.log(newEl);
// Додамо текст для параграфа:
newEl.textContent = 'Це новий параграф';

// Створюємо картинку:
const image = document.createElement('img');
// додамо адресу
image.src = '/images/pict1.jpg';
// додамо альт
image.alt = 'sea and sky';
// задамо розмір
image.width = 320;

// ❗️ Додавання елементу в DOM:
// element.append(el1, el2, ...) - додає один або декілька елементів після всіх дітей елемента element.
// element.prepend(el1, el2, ...) - додає один або декілька елементів перед усіма дітьми елемента element.
// element.after(el1, el2, ...) - додає один або декілька елементів після елемента element.
// element.before(el1, el2, ...) - додає один або декілька елементів перед елементом element.

titleElTag.after(newEl, image);

// ❗️ Видалення елемента - виколристовується метод elem.remove():
newEl.remove();

// Додлати до списку listPrimEl ще один li зі значенням згідно переліку (в переліку є 1, 2, 3 , тому додамо зі текстом '4'):
const newLi = document.createElement('li');
newLi.textContent = listPrimEl.children.length + 1;
listPrimEl.append(newLi);

// ❗️❗️❗️ Створення, додавання та вилучення елементів з DOM за допомогою шаблоних рядків
// створюэмо елемент для додавання
const veryNewLi = `<li>${listPrimEl.children.length + 1}</li>`;
// додаэмо елемент - insertAdjacentHTML('position', string) - позиція (в лапках), на яку вставити елемент та шаблоний рядок, який потрібно вставити. Позіції можуть бути такима:
// "beforebegin" - перед elem
// "afterbegin" - всередині elem, перед усіма дітьми
// "beforeend" - всередині elem, після усіх дітей
// "afterend" - після elem:
listPrimEl.insertAdjacentHTML('beforeend', veryNewLi);

// ❗️❗️❗️ Статичний та динамічний масиви, 'жива' та 'не жива' колекція

// метод document.querySelector() повертає статичну колекцію (псевдо масив) на сосемнт виклику
// методи document.getElementBy...() повертають динамічну колекцію - тобто не на момент виклику, а враховуючи внесені зміни, навіть якщо був викликаний до їх внесення:

const liStatic = document.querySelectorAll('.js-item-prim2');
const liDynamics = document.getElementsByClassName('js-item-prim2'); // без крапки перед назвою (ім'ям) класу
const listPrim2 = document.querySelector('.js-list-prim2');
console.log('liStatic', liStatic); // поверне колекцію з 3-х елементів
console.log('liDynamics', liDynamics); // поверне колекцію з 3-х елементів

// Виконуємо дії (додамо ще li-шку):
const liPrim2 = document.createElement('li');
liPrim2.textContent = listPrim2.children.length + 1;
liPrim2.classList.add('js-item-prim2');
console.log(liPrim2);
listPrim2.append(liPrim2);
console.log('liStatic', liStatic); // поверне колекцію з 3-х елементів
console.log('liDynamics', liDynamics); // поверне колекцію вже з 4-х елементів

// Динамычни колекцыъ корисни, наприклад, для infinity-scroll - регулярне додавання елементів при прокрутці сторинки, коли вже нибито дійшов до кінця, але знов з'являються нові елементи списку