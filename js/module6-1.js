// Приклад 1

console.log(document);

const body = document.body;
console.log(body);

const list = document.querySelector('.list');
console.log(list);

const firstListItem = list.firstElementChild;
console.log(firstListItem);

const lastListItem = list.lastElementChild;
console.log(lastListItem);

const listItems = list.children;
console.log(listItems);

// Приклад 2
// const listWithId = document.querySelector('#menu');
// listWithId.style.textTransform = 'uppercase';
// listWithId.style.fontSize = '24px';
// console.log(listWithId);

// const listWithClass = document.querySelector('.menu');
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll('li');
// console.log(menuItemsByTagName);

// const menuItemsByClass = document.querySelectorAll('.menu-item');
// console.log(menuItemsByClass);

// const firstMenuItem = document.querySelector('.menu-item');
// firstMenuItem.style.color = 'tomato';
// console.log(firstMenuItem);

// // Приклад 3
// const link = document.querySelector('.link');
// console.log(link.classList);

// const hasActiveClass = link.classList.contains('is-active');
// console.log(`hasActiveClass - ${hasActiveClass}`);

// link.classList.add('special');
// console.log(link.classList);

// link.classList.remove('is-active');
// console.log(link.classList);

// link.classList.toggle('is-active');
// console.log(link.classList);

// link.classList.replace('special', 'regular');
// console.log(link.classList);


// // Приклад 4
// const image = document.querySelector(".image");

// console.log(image.attributes); // NamedNodeMap {0: class, 1: src, 2: alt, length: 3}

// console.log(image.hasAttribute("src")); // true

// console.log(image.getAttribute("alt")); // "Rocks and waterfall"

// image.setAttribute("alt", "Amazing nature");

// console.log(image.getAttribute("alt")); // Amazing nature
