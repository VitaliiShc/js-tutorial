// // ❗️❗️❗️ DOM
// // ❗️ DOM - Document Object Model - Ою'єктна модель документа - незалежний від мови інтерфейсдля роботи з HTML-документом. З'єднує сторинку з мовою програмування за допомогою набору методів та властивостей.
// // Рушій браузера за допомогою HTML-парсера перетворює HTML в DOM у вигляди деревоподібної структури з відносинами 'батько-дитина'.
// // Доступ до DOM почінається з об'єкта 'document'.

// // ❗️❗️❗️ Звернення до елементу в DOM - отримання посилання на цей елемент:

// // ❗️ Метод .querySelector() - повертає ПЕРШЕ співпадіння в дереві DOM - вузол-елемент (element node). Формат повернення в консолі залежить від того, на якому документі викликано лайв-сервер. Для пошуку використовується CSS-селектор в лапках. Якщо не знайдено, повертає null. Найчастіше використовується звернення за класом. В HTML-документі потрібно встановлювати відповідний клас з префиксом 'js-' (class = "js-title"). Кожен HTML-елемент в DOM це об'єкт. Якщо метод застосовується до документу, то шукає по всьому документа, але також може використовуватися для будь якого об'єкта DOM, який також був спочяатку знайдений за допомогою .querySelector - в такому разі шукає співпадіння всередіні цього об'єкта.

// const titleElTag = document.querySelector('h1'); // звернення за назвою тега
// console.dir(titleElTag); // отримуємо посилання на елемент в DOM (dir відображає HTML-елемент у вигд=ляді об'єкта)

// const titleElId = document.querySelector('#titleId'); // звернення за ідентифікатором
// console.dir(titleElId); // отримуємо посилання на елемент в DOM

// const titleElClass = document.querySelector('.js-title'); // звернення за ідентифікатором
// console.dir(titleElClass); // отримуємо посилання на елемент в DOM

// const currentPageUrl = "/index.html";
// const titleElHref = document.querySelector(
//   `.js-link[href="${currentPageUrl}"]`
// ); // звернення за ідентифікатором та лінком на поточну сторінку
// console.log(titleElHref); // отримуємо посилання на елемент в DOM

// // ❗️ Метод .querySelectorALL() повертає псевдо-масив всіх знайденіх елементів, відповідаючих умові (тег, клас):
// const listEls = document.querySelectorAll('.js-list-item');
// console.log(listEls);

// // ❗️ Властивість element.textContent. Використовується для дій з текстовим контентом (текстовий вузол (text node)) елементу. Для отримання текстового контенту , потрібно звертатися до цього елементу та додавати через крапку зверення до властивості textContent (після того, як ми вже отримали посилання на нього):
// console.dir(titleElClass.textContent);
// // Також можна змініти цей контент:
// titleElClass.textContent = 'Hi, JS!';
// console.dir(titleElClass.textContent);

// // ❗️ Властивість element.classList. Використовується для дій з переліком класів елементу. Повертає псевдо-масив класів. Для виконання дій використовуються методи, найчастіше:
// // ❗️ contains(cls) - перевіряє наявність сласу cls у елемента - повертає true або false,
// // ❗️ add(cls) - додавання класу cls,
// // ❗️ remove(cls) - видалення класу cls,
// // ❗️ toggle(cls) - додавання класу cls, якщо немає, або видалення - якщо є,
// // ❗️ replace(oldCls, newCls) - змінює існуючій клас oldCls на новий newCls.

// console.log(titleElClass.classList); // ['js-title']

// titleElClass.classList.add('js-title-color');
// console.log(titleElClass.classList); // ['js-title', 'js-title-color']

// titleElClass.classList.remove('js-title-color');
// console.log(titleElClass.classList); // ['js-title']

// titleElClass.classList.toggle('js-title-color');
// console.log(titleElClass.classList); // ['js-title', 'js-title-color']
// titleElClass.classList.toggle('js-title-color');
// console.log(titleElClass.classList); // ['js-title']

// // ❗️ Властивість element.style використовуєтиься для додання інлайн стилів. При цьому назву додаваної властивості потрібно записувати в camelCase (background-color -> backgroundColor; font-size -> fontSize). Не бажано використовувати, тому що при кожному доданні зміни виконується повне перезавантаження HTML-документу - це впливає на продуктивність. Тому краще застосовувати зміну за додаванням класу, який створювати в CSS - перевантаження DOM виконується один раз з застосуванням стилів з класу.
// titleElClass.style.fontSize = '50px';
// titleElClass.style.color = 'green';

// // Також при роботі з атрибутами HTML-елементів можуть використовуватися звернення до іх атрибутів для отримання іх властивостей та значень:
// // value - містить поточний текстовий контент елементів форм.
// // checked - зберігає стан чекбокса або радіокнопки.
// // name - зберігає значення, вказане в HTML-атрибуті name.
// // src - шлях до зображення тегу <img>.

// // ❗️❗️❗️ Атрибути
// // ❗️ Системні. або базові атрибути - атрибути, яки стандартні для елементу в тегі HTML. Мають вбудолвані властиволстію
// // ❗️ Дата-атрибути - додаткові, довільні, атрибути, яки дозволяють використовувавти їх значення в JS. Виколристовується для "прокідання" значення далі для роботи з цім елементом в коді.
// // Методи роботи з атрибутами:
// // ❗️ elem.hasAttribute(name) - перевіряє, чи є такий атрибут у елемента, повертає true або false:
// console.log(titleElClass.hasAttribute('id'));

// // ❗️ elem.getAttribute(name) - повертиає значення цього атрибути:
// console.log(titleElClass.getAttribute('id'));

// // ❗️ elem.setAttribute(name, value) - встановлює або змінює трибут. Але при роботі з атрибутами, для яких не потрібно вказувати значяення (hidden, dasable, ...) такий метод не працює - в такому випадку потрібно додавати з порожнім значенням, або використовувати конструкцію з прямим зверненням, а для змыни (видалення) існуючого атрибуту використовувати elem.removeAttribute(name):
// titleElClass.setAttribute('id', 'titId');
// console.log(titleElClass.getAttribute('id'));
// titleElClass.setAttribute('hidden', ''); // приховати
// titleElClass.removeAttribute('hidden'); // показати - видалено атрибут hidden

// // ❗️ elem.removeAttribute(name) - видаляє атрибут та його значення:
// titleElClass.removeAttribute('id');
// console.log(titleElClass.hasAttribute('id'));

// // ❗️ elem.attributes - повертає об'єкт всіх наявних атрибутів:
// console.log(titleElClass.attributes);

// // Пряме звернення та зміна системного атрибуту може виконуватися наствупним чином. Такого системного атрибуту не існує, але ця команда додає його та/або змінює:

// // console.dir(titleElClass.hidden);
// // titleElClass.hidden = true; // приховано
// // console.dir(titleElClass.hidden);
// // titleElClass.hidden = false; // показано

// // ❗️ Властивість dataset. Во властивості сберігається дата-атрибут. Використовується для отримання значення data-атрибута, та для отримання значення потрібнео вказувати лише ім'я атрибьута без префиксу data-:
// console.log(titleElClass.dataset.id);
// // Але якщо ми використовуємо для роботи з дата-атрибутами методи, то для них потрібно вказувати назву атрибуту з префіксом 'data-':
// console.log(titleElClass.hasAttribute('data-id'));
// console.log(titleElClass.getAttribute('data-id'));
// titleElClass.setAttribute('data-id', '345');
// console.log(titleElClass.getAttribute('data-id'));
// titleElClass.setAttribute('data-good', 'apple');
// console.log(titleElClass.getAttribute('data-good'));

// // ❗️❗️❗️ Навігація по DOM
// // Якщо ми отримуємо посилання на перелік, то:
// const listPrimEl = document.querySelector('.js-list-prim');
// console.dir(listPrimEl); // при поверненні во властиволсті childNodes вказуються також перенос рядка (а це не зручно), але в children - ні (тому використовуємо її, тому що вона не повертає зайвого)

// const listEl = document.querySelector('.js-list');
// console.dir(listEl);

// // При використанні властивостей ми отримуємо колекції елементів.
// // Для звернень до елементів по DOM використовуються наступні властивості:
// // ❗️ elem.parentNode - вибере батьківський елемент
// // ❗️ elem.childNodes - повертає псевдо-масив всіх дочірніх елементів (першого рівня) з текстовима елементами (переноси, коментирі та т. і.)
// // ❗️ elem.children - повертає псевдо-масив дочірніх вузлів-елементів у відповдності до тегів
// // ❗️ elem.firstChild - вибере перший дочірній елемент з текстовима вузлами
// // ❗️ elem.firstElementChild - вибере перший дочірній вузол-елемент без текстових вузлів
// // ❗️ elem.lastChild - вибере останній елемент з текстовима вузлами
// // ❗️ elem.lastElementChild - вибере останній вузол-елемент без текстових вузлів
// // ❗️ elem.previousSibling - вибере елемент зліва (попередній сусід) з текстовима вузламі
// // ❗️ elem.previousSibling - вибере вузол-елемент зліва (попередній сусід) без текстових вузлів
// // ❗️ elem.nextSibling - вибере елемент праворуч (наступний сусід) з текстовима вузламі
// // ❗️ elem.nextElementSibling - вибере вузол-елемент праворуч (наступний сусід) без текстових вузлів

// // Коли отримуємо псевдо-масив, то для обробки його в переборах використовуємо спред (...spread). Але варто розуцмити, що зручнише всього працювати з рівнями вкладенности до 2-го.
// const childrenPsevdoArr = listPrimEl.children;
// console.log(childrenPsevdoArr);
// const childrenArr = [...childrenPsevdoArr];
// console.log(childrenArr);

// // ❗️❗️❗️ Створення, додавання та вилучення елементів з DOM
// // ❗️ Створення - метод document.createElement(tagName, *[options]). Використовується для створення елементів:
// const newEl = document.createElement('p');
// console.log(newEl);
// // Додамо текст для параграфа:
// newEl.textContent = 'Це новий параграф';

// // Створюємо картинку:
// const image = document.createElement('img');
// // додамо адресу
// image.src = '/images/pict1.jpg';
// // додамо альт
// image.alt = 'sea and sky';
// // задамо розмір
// image.width = 320;

// // Створюємо перелік навігації з посиланням:
// const listEl = document.createElement('ul'); // створюємо в пам'яті перелік
// listEl.classList.add("site-nav");

// const itemElStart = document.createElement('li'); // створюєемо першу лі-шку
// itemElStart.classList.add("site-nav-item");

// const linkElStart = document.createElement("a"); // створюємо посилання в першої лі-шці
// linkElStart.textContent = "Головна сторинка";
// linkElStart.href = "/index";
// itemElStart.appendChild(linkElStart); // вставляємо 1-е посилання в 1-у лі-шку

// const itemElPortfolio = document.createElement("li"); // створюєемо другу лі-шку
// itemElPortfolio.classList.add("site-nav-item");

// const linkElPortfolio = document.createElement("a"); // створюємо посилання в другої лі-шці
// linkElPortfolio.textContent = "Портфоліо";
// linkElPortfolio.href = "/portfolio";
// itemElPortfolio.appendChild(linkElPortfolio); // вставляємо 2-е посилання в 2-у лі-шку

// listEl.append(itemElStart, itemElPortfolio); // вставляємо лі-шки в перелік

// console.log(listEl); // отримуємо вже готовий перелік у вигляді дерева в пам'яті

// const bodyEl = document.querySelector('body');
// bodyEl.prepend(listEl); // вставка переліку в документ

// console.log(bodyEl);

// // ❗️ Додавання елементу в DOM:
// // element.append(el1, el2, ...) - додає один або декілька елементів після всіх дітей елемента element.
// // element.prepend(el1, el2, ...) - додає один або декілька елементів перед усіма дітьми елемента element.
// // element.after(el1, el2, ...) - додає один або декілька елементів після елемента element.
// // element.before(el1, el2, ...) - додає один або декілька елементів перед елементом element.

// titleElTag.after(newEl, image);

// // Також існують методи (вже трохи застаріли) (https://developer.mozilla.org/ru/docs/Web/API/Node):
// // parentElem.appendChild(elem) - додає elem в кінец дочірніх елементів parentElem.
// // parentElem.insertBefore(elem, nextSibling) - додає elem в колекцію дітей parentElem перед елементом nextSibling. Якщо вказати null, то insertBefore спрацьовує як appendChild. Щоб додати першим елементом. наприклад у списку, то використовується звернення до nextSibling як
// // parentElem.insertBefore(elem, nextSibling) - додає elem в колекцію дітей parentElem перед елементом nextSibling. Якщо вказати null, то insertBefore спрацьовує як appendChild. Щоб додати першим елементом. наприклад у списку, то використовується звернення до nextSibling як firstElementChild (тобто вставляє перед першим дочірнім елементом).

// // ❗️ Видалення елемента - виколристовується метод elem.remove():
// newEl.remove();

// // Додлати до списку listPrimEl ще один li зі значенням згідно переліку (в переліку є 1, 2, 3 , тому додамо зі текстом '4'):
// const newLi = document.createElement('li');
// newLi.textContent = listPrimEl.children.length + 1;
// listPrimEl.append(newLi);

// // ❗️❗️❗️ Створення, додавання та вилучення елементів з DOM за допомогою шаблоних рядків

// // ❗️ Властивість innerHTML() - видаляє існуючий контент та на його місце вставляє новий контент - зазначене в дужках заміняє існуючий контент. Якщо застосовувати innerHTML без дужок - виконуеться читання вмісту елементу - повкертає у вигляді рядка валидний HTML-код.
// const listForInner = document.querySelector('.js-list-prim');
// console.log(listForInner.innerHTML);

// // ❗️ Властивість insertAdjacentHTML() - дозволяє додати новий уконтент без видалення існуючого, в любе місце батьківського елементу.

// // створюэмо елемент для додавання
// const veryNewLi = `<li>${listPrimEl.children.length + 1}</li>`;
// // додаэмо елемент - insertAdjacentHTML('position', string) - позиція (в лапках), на яку вставити елемент та шаблоний рядок, який потрібно вставити. Позіції можуть бути такима:
// // "beforebegin" - перед elem
// // "afterbegin" - всередині elem, перед усіма дітьми
// // "beforeend" - всередині elem, після усіх дітей
// // "afterend" - після elem:
// listPrimEl.insertAdjacentHTML('beforeend', veryNewLi);

// // ❗️❗️❗️ Статичний та динамічний масиви, 'жива' та 'не жива' колекція

// // метод document.querySelector() повертає статичну колекцію (псевдо масив) на момент виклику
// // методи document.getElementBy...() повертають динамічну колекцію - тобто не на момент виклику, а враховуючи внесені зміни, навіть якщо був викликаний до їх внесення:

// const liStatic = document.querySelectorAll('.js-item-prim2');
// const liDynamics = document.getElementsByClassName('js-item-prim2'); // без крапки перед назвою (ім'ям) класу
// const listPrim2 = document.querySelector('.js-list-prim2');
// console.log('liStatic', liStatic); // поверне колекцію з 3-х елементів
// console.log('liDynamics', liDynamics); // поверне колекцію з 3-х елементів

// // Виконуємо дії (додамо ще li-шку):
// const liPrim2 = document.createElement('li');
// liPrim2.textContent = listPrim2.children.length + 1;
// liPrim2.classList.add('js-item-prim2');
// console.log(liPrim2);
// listPrim2.append(liPrim2);
// console.log('liStatic', liStatic); // поверне колекцію з 3-х елементів
// console.log('liDynamics', liDynamics); // поверне колекцію вже з 4-х елементів

// // Динамічни колекції корисни, наприклад, для infinity-scroll - регулярне додавання елементів при прокрутці сторинки, коли вже нибито дійшов до кінця, але знов з'являються нові елементи списку

// // Приклади
// // Маємо масив автомогбілів (нибито прийшов від бек-енду, тому кількість нам не відома).
// // Потрібно побудувати перелік авто на веб-сторінці. В HTML потрібно зробити контейнер для перелику - ul -, куда будемо додавати авто зі списку

// const cars = [
//   {
//     name: 'Honda',
//     model: 'Civic',
//     price: 40000,
//     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyRUtbM3JYIt4Fxv-j573ToV7XtOKEJOsBQ&usqp=CAU',
//   },
//   {
//     name: 'Nissan',
//     model: 'Note',
//     price: 35000,
//     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAdDoAEcu5nwrBwVitRS0YQjkF1vQhd3zqSA&usqp=CAU',
//   },
//   {
//     name: 'Audi',
//     model: 'Q7',
//     price: 45000,
//     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzYtF86eFpC02gfv5z-JsjGb2MufIP171PmA&usqp=CAU',
//   },
//   {
//     id: 4,
//     name: 'Mersedes',
//     model: 'A 200',
//     price: 25000,
//     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZA6v1ly2IC52Eno7aNWqhNAGOR5zrc6s7hw&usqp=CAU',
//   },
// ];

// const container = document.querySelector('.js-container');
// // console.dir(container);

// // важкий шлях:
// // cars.forEach(({ id, name, model, price, img }) => {
// //   // деструктуризовали
// //   const markup = `<li>
// //         <img src="${img}" alt="${name}" class='js-img'>
// //         <h2>Name: ${name}</h2>
// //         <h3>Model: ${model}</h3>
// //         <p>Price: ${price}</p>
// //       </li>`;
// //   container.insertAdjacentHTML('beforeend', markup); // помещаемо в документ - куди та що
// // });
// // Виконуеться додавання по одному елементу в DOM, та при кожномуу дподанні перемалбовується сторинка (reflow), що витрачає ресурси. Тому така практика не є гарною.
// // Потрібно робити так, щоб спочатку створити об'ект для додання зі всіма елементами, ита додати одразу все однім об'ектом.

// const markup = cars
//   .map(
//     ({ id = 'none', name, model, price, img }) => `<li data-id='${id}'>
//         <img src="${img}" alt="${name}" class='js-img'>
//         <h2>Name: ${name}</h2>
//         <h3>Model: ${model}</h3>
//         <p>Price: ${price}</p>
//       </li>`
//   )
//   .join(''); // отримали масив елементів для додання, але нам потрібен рядок (глобально HTML-документ - це великий рядок), щоб додати його в DOM
// console.dir(markup);
// container.insertAdjacentHTML('beforeend', markup); // додаемо один рядок зі всіма елементами в HTML - reflow виконано один раз

// // Видалення всього списку:
// const containerToDel = document.querySelector('.js-container');
// // [...containerToDel.children].forEach(item => item.remove()); // видалення по черзі, тому кожного разу перемальовується DOM

// // для видалення всього за одне звернення до DOM, використовується властивысть innerHTML:
// // containerToDel.innerHTML = ''; // все що було замінити на пустий рядок

// // Якщо потрібно видалити елемент за певнима критеріями, то використовується foeEach. Наприклад, потрібно видалити елемент, у якого є атрибут id
// [...containerToDel.children].forEach(item => {
//   console.log(item.dataset.id);
//   if (item.dataset.id !== 'none') {
//     item.remove();
//   }
// });

// // ❗️❗️❗️ Події
// // Подія - це сігнал від браузера, що на сторінці щось вдбулося. Використовуються для реагування на дії колристувача.
// // Для того, щоб реагувати на дії колристувача на елементі до нього додаеться слухач - метод addEventListener()
// // ❗️ Метод addEventListener(event, handler, options), де:
// // event - подія, на яку потрібно реагувати, записується у вигляді рядка,
// // handler - колбек-функція, яка викликається під час настання подіі,
// // options додатковій (необов'язковий) об'єкт параметрів з озширеними налаштуваннями.

// // Для елемента можу бути додано кілька, в тому чіслі, однакових слухачів з різнима колбекамі - в такому випадку вони буцдуть виконуватися в порядку іх рєестрації в коді.

// // ❗️ Метод removeEventListener() - видяляє слухача з елемента, та повінен мати в собі тіж аргументи, що і сам слухач.

// // ❗️❗️❗️ this
// // ❗️ якщо колбеком буде функція з this, то цей this буде посилатися на той DOM елемент, на якому висить слухач.

// // ❗️❗️❗️ Об'єкт події
// // Подія - це об'єкт, який містить інформацію про її деталі та автоматично передається першим аргументом в обробник події.
// // Важливі властивості об'єкта події:
// // event.type - тип події.
// // event.currentTarget - елемент, на якому виконується обробник події, той елемент, на котрому увімкнут слухач.
// // event.target - елемент, внутрі батьківського зі слухачем, на якому було викликано подію, тобто на якому було клікнуто.

// const clickBtn = document.querySelector('.js-btn');
// clickBtn.addEventListener('click', onBtnClickLogger);
// function onBtnClickLogger(event) {
//   console.log('event: ', event);
//   console.log('event type: ', event.type);
//   console.log('currentTarget: ', event.currentTarget);
// }

// // ❗️❗️❗️ Дії за замовчуванням
// // Щоб вимкнути дії, яки браузем виконує по дефолту (клик по посиланню, відкриття вікна завантаженя, тощо), в колбек-функції потрібно вказати метод event.preventDefault().

// // ❗️❗️❗️ Події клавіатури
// // Існують трі події клавіатури - 'keydown' (натискання на клавішу, в тому чіслі на клавіши-модіфікатори), 'keyup' (відпускання клавіши) і keypress (натискання на клавішу, яка генерує/печатає сімвол - не регіструє натискання на клавіши-модіфікатори (Esc, Ctrl, Shift, Win, F1...F12, тощо)). Базовий клас - KeyboardEvent.
// // ❗️ Властивості 'key' і 'code'
// // key - повертає сімвол натиснутої клавіши в тої раскладці, що на поточний час увімкнена.
// // code - повертає код клавіши

// document.addEventListener('keydown', event => {
//   console.log(event);
//   console.log('key: ', event.key);
//   console.log('code: ', event.code);
// });

// // ❗️ Клавіші - модифікатори.
// // Для обробки натискань клавосполучень використовуються властивості 'trlKey', 'altKey', 'shiftKey' і 'metaKey', які зберігають булеве значення, чи була натиснута клавіша-модіфікатор.

// document.addEventListener('keydown', event => {
//   event.preventDefault();
//   if ((event.ctrlKey || event.shiftKey) && event.code === 'KeyS') {
//     console.log('"Ctrl + s" or "Shift + s" combo');
//   }
// });

// // ❗️ Собитія миши
// // Долмат по коордінатам: https://nerdparadise.com/programming/javascriptmouseposition
// // Задача по коордінатам миши (мяч): https://learn.javascript.ru/task/move-ball-field

// // ❗️❗️❗️ Події елементів форм
// // ❗️ Подія submit. Виконується при натисканні кнопкі Submit або клавиши Enter. Подію можна використовувати для валідаціі полів форми або ще чогось. Але спочатку потрібно вимкнути дію по дефолту - перезавантаження сторінки.
// // ❗️ Подія change. Виконується після зміни елемента форми. Для тектових полів та текс-арєа - виконується після втрати фокусу. Для селекторів, чекбоксів або радіо-баттонов виконується одразу при виборі значення
// // ❗️ Подія input. Відбувається тількі на текстових полях та текст-арєа та створюється одразу при зміні значення.
// // ❗️ Подія focus і blur. Відбувається при отриманні фокусу (focus), або втраті (blur). Можно активувати або скасувати фокус программно, викликавши в коді для елемента методи focus() і blur(). Фокус може бути тільки на одному елементі сторінки за одиницю часу, і поточний елемент, на якому знаходиться фокус, доступний як document.activeElement.
// // ❗️ До єлементів форм доступ отримається за допомогою звернення до форми, далі за допомогою властивості elements до її елементів та ім'ям елемента (атрибут name в html-тега). Властивість elements DOM-елемента форми містить об'єкт з посиланнями на усі її елементи, які мають атрибут name.
// // form.elements.name.value
