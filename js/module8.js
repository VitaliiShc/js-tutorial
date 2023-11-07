// // ❗️❗️❗️ Робота з терміналом
// https://tproger.ru/translations/bash-cheatsheet
// https://habr.com/ru/companies/ruvds/articles/445270/

// links
// https://babeljs.io/
// https://w3schoolsua.github.io/git/index.html


// Вова Мельник , гіт через термінал та посилання на репозиторій з командами в рідмі із заняття: 
// https://youtu.be/wFY5HVuQBgw
// GitHub - VovaMelnyk/GitTutorial: Tutorial with git FS47

// Основні команди:
/*
Відкриття:
    Ctrl + ~
Поточне розташування (шлях)
    pwd
Перелік вмісту поточноїх текі, з опціюю 
    ls
    * -a для відображення схованих елементів
    * -l виведення як лист
Перехід по адресі (навігація)
    cd
    * cd .. - переміщення на теку вище з двома крапкамі
    * cd ../../ - переміщення на 2 текs вище
    * cd адр_теці_нижче/адр_теці_ще_нижче/ - перехід по вкладеним текам
Очищення термінала
    Ctrl + l
    clear * команда 
Створення файлу
    touch
Створення текі
    mkdir
Перейменування / переміщення
    mv
    * mv my_file target_directory
    * mv my_old_file_name.jpg my_new_file_name.jpg
Створення копії та сбереження її в теці
    cp
    * cp my_source_file target_directory
Вилучення
    rm
    * -rf - вилучення теі з вмістом
*/

// // ❗️❗️❗️ Node.js
// // Серверная технологія реалізації JS для роботи вне браузера.

// // ❗️ NPM (node package manager) - утіліта для керування бібліотекамі в проекте.

// // ❗️ Команди NPM
// // npm init - ініціалізує npm в проекті і створює файл package.json
// // npm install - встановлює всі залежності, перелічені в package.json
// // npm list --depth=0 - виведе в терміналі список локально встановлених пакетів з номерами їх версій, без залежностей
// // npm install [package-name] - встановить пакет локально у папку node_modules
// // npm uninstall [package-name] - видалить пакет, встановлений локально і оновить package.json
// // npm start і npm test - запустить скрипт start або test, розташований в package.json
// // npm run [custom-script] - запустить кастомний скрипт, розташований в package.json
// // npm outdated - використовується для пошуку оновлень, виявить сумісні версії програмно і виведе список доступних оновлень
// // npm update - оновить всі пакети до максимально дозволеної версії

// // ❗️ Ініціалізація npm - npm init - виконується одноразоіво в проекті, при виконанні створюється файл package.json, в якому зберігаються службова інформаціяя по роботі з бібліотекамі. Для швідкої ініціалізації можна встановіти флаг --yes або -y.
// // ❗️ Інсталяція бібліотек:
// // npm install byble_name - див. NPM сайт
// // ❗️ для додавання бібліотекі в проект використовуэться CommonJS сінтаксіс:
// // const uuid = require("uuid")
// // або (ES6 module syntax) import (див. документацію до бібліотеки)
// // ❗️ Запуск команди в npm можна додати в package.json в скрыпти. start та test запускають по прямому зверненю за ім'ям, для всіх інших скриптов потрібно додавати команду run.
// // Також можуть бути додани pre- та post- скріпти, які будуть автоматично запускатися перед або після основного скріпта (npm prestart -> npm start -> postnpm start). Також можливий запуск сккріпта, який запускає кілька скріптов послідовно:
// // "script-1": "test": "echo \"script-1\"",
// // "script-2": "test": "echo \"script-2\"",
// // "all": "npm run script-1 && npm run script-2 &&",

// // ❗️ Команда npm install іенсталює всі необхідні пакети згідно зі збереженнима данимі в package.json (якщо проект розгортається в новому середовіщи, або на тновой машині).

// // ❗️ Управління кешем
// // npm cache clean

// // ❗️❗️❗️ Транспіляція кода
// // Транспіляція - це приведення сучасного JS-кода до віда застарілого, але розуміємого старимі браузерамі. Це робить транспайлер або компілятор Babel (https://babeljs.io/).
// // ❗️ Встановлюється як залежність для розробкі такім сінтаксісом:
// // npm install--save - dev @babel/core @babel/cli

// // ❗️ Набір налаштувань (всі подробиці в документції (https://babeljs.io/) - її багато🤓):
// // поставіти пакети(3)
// // консольную утіліту
// // ядро бабела
// // налаштувати пресет для транспіляції
// // створіти конфіг з силкою на пресет
// // додати скріпт для білда
// // прі необхідності зазначити браузери та їх версії, для якіх необхідно транспілювати код. необхідно додати файл налаштувань "браузер-ліст" (https://github.com/browserslist/browserslist)

// // ❗️ Код пишеться в робочому файлі (вихідник), потім для "видачи" на продакшн код транспілюється Babel'ом в код, зрозумилий застрілима браузерамі.


// // ❗️❗️❗️ Parcel (https://parceljs.org/)
// // Збірач додатків.
// // Необхідно втстановлювати локально (https://parceljs.org/getting-started/webapp/).
// // Подробиці в відео Аю Репети: https://youtu.be/2BDNwhxQ3Fc?t=5813

// // ❗️❗️❗️ Webpack (https://webpack.js.org/)
// // Це збірач JS модулей, менеджер модульних залежностей, який аналізує та створює один або кілька результуючих файлів, що містять всю кодову базу проекту. Відбудовує порядок підключення модулів, збірає, мініфікує, запаковує тощо, створює граф залежностей.
// // 4 концепції:
// // Точка входу (entry) - файл, відносно якого буде будуватися граф залежностей (головний js-файл).
// // Точка виходу (output) - рензультуючій js-файл, який буде створено в результаті роботи збірача та який буде в себе збірати вісь код проекту для "видачи" його для кінцевого використання.
// // Завантажувачи (module) - обробникі файлв різних форматів для перетворення підключення їх в модулі та додаються в граф заледностей (наприклад, обробникі sass, scss, scc, babel, обробникі зображень тощо). Виконуються до створення кінцевого файла та результаи їх роботи додаються до кінцевого файла.
// // Плагини (plugins) - інструменти виконання широко спектра задач, яки застосовуються вже після створення результуючих файлів.

// // ❗️❗️❗️ JSON (JavaScript Object Notation) - об'єктоподібний (але не об'єкт) формат сберігання та передачи данних у вигляді текста. Елемент запису складається з ключа та значення. Значенням може бути що завгодно - string, number, object, array, boolean і null. Назва ключа обов'язково в подвійних лапках, рядки в значеннях обов'язково в подвійних лапках. Після останього елемента не має бути коми! Записи JSON зберігаються в файлах формату .json. JS перетворює JSON в об'єкт та навпаки за допомогою методів:

// // ❗️ Метод JSON.stringify() - перетворює значення в рядок JSON. Не перетворює методи об'єктів та функції (undefined). Результат викліку може бути збережений у фай, або переданий мережою. Необхідно застосовувати для любого типу знеаченнь, відмінних від рядка!

// const car = {
//   model: 'Nissan',
//   made: 2011,
//     favorite: true,
//     named() {
//       console.log('Єнот');
//   },
// };

// const carJSON = JSON.stringify(car);
// console.log(carJSON); // {"model":"Nissan","made":2011,"favorite":true}

// function foo() {
//     console.log('Hi!');
// }

// const fooJSON = JSON.stringify(foo);
// console.log(fooJSON); // undefined

// // ❗️ Метод JSON.parse() - парсить рядок JSON та повертає у вигляді об'єкта:
// const carJSON = '{"model":"Nissan","made":2011,"favorite":true}';
// const car = JSON.parse(carJSON);
// console.log(car); // {model: 'Nissan', made: 2011, favorite: true}
// console.log(car.model); // Nissan

// // ❗️❗️❗️ Local Storage, Session Stirage
// // Схорвище на комп'ютері корситувача, в якому браузер може сберігати якісь значення, пов'язані з відвідуванням сайтів. НЕ МОЖНА СБЕРІГАТИ КОНФІДЕНЦІЙНІ ДАННІ (особисті данні, фінансові данні, паролі, тощо). Значення сберигаюиться у вигляді пар ключ:значення та обробляються і JS як рядки JSON. Сховище маэ наступны властивосты та методи:
// // setItem(key, value) - створює новий, або оновлює вже існуючий запис у сховищі.
// // getItem(key) - повертає зі сховища значення з ключем key.
// // removeItem(key) - видаляє зі сховища запис з ключем key.
// // clear() - повністю очищає всі записи сховища.
// // length - кількість записів у сховищі.

// // ❗️ Збереждення:
// localStorage.setItem('ui-theme', 'light');
// console.log(localStorage); // Storage {ui-theme: 'light', length: 1}

// // Для збереження складних типів даних (масив, об'єкт) їх необхідно перетворити у рядок JSON за допомиогою JSON.stringify()

// const settings = {
//   theme: 'dark',
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };

// localStorage.setItem('settings', JSON.stringify(settings));
// console.log(localStorage); // Storage {settings: '{"theme":"dark","isAuthenticated":true,"options":[1,2,3]}', length: 1}

// // ❗️ Читання:
// console.log(localStorage.getItem('ui-theme')); // 'light'
// // Якщо такого ключа немає, то буде повернено null.
// // Якщо повертаєма строка має бути об'єктом або масивом, то її необхідно разпарсити. Для запобігання падіння невалідного скрипта необхідно використовувати констрцкцію try...catch (https://textbook.edu.goit.global/javascript-yk5evp/v2/uk/docs/lesson-16/json#%D0%BE%D0%B1%D1%80%D0%BE%D0%B1%D0%BA%D0%B0-%D0%BF%D0%BE%D0%BC%D0%B8%D0%BB%D0%BE%D0%BA).


// // ❗️ Видалення:
// localStorage.removeItem('ui-theme');
// console.log(localStorage);



