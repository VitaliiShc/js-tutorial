// const fetchUsersBtn = document.querySelector('.btn');
// const userList = document.querySelector('.user-list');

// fetchUsersBtn.addEventListener('click', () => {
//   fetchUsers()
//     .then((users) => renderUsers(users))
//     .catch((error) => console.log(error));
// });

// function fetchUsers() {
//   return fetch('https://jsonplaceholder.typicode.com/users').then(
//     (response) => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     }
//   );
// }

// function renderUsers(users) {
//   const markup = users
//     .map((user) => {
//       return `<li>
//           <p><b>Name</b>: ${user.name}</p>
//           <p><b>Email</b>: ${user.email}</p>
//           <p><b>Company</b>: ${user.company.name}</p>
//         </li>`;
//     })
//     .join('');
//   userList.insertAdjacentHTML('beforeend', markup);
// }

// let globalVariable; // undefined

// // Initializing data fetching
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => response.json())
//   .then(users => {
//     console.log("users inside then callback: ", users);

//     // Writing the result to a global variable
//     globalVariable = users;

//     // Everything is ok here, the data is in the variable
//     console.log("globalVariable inside fetch callback: ", globalVariable);
//   });

// // No async data here
// console.log("globalVariable outside fetch: ", globalVariable); // undefined

// const fetchPostsBtn = document.querySelector('.btn');
// const postList = document.querySelector('.posts');

// fetchPostsBtn.addEventListener('click', async () => {
//   try {
//     const posts = await fetchPosts();
//     renderPosts(posts);
//   } catch (error) {
//     console.log(error);
//   }
// });

// async function fetchPosts() {
//   // Change the number of items in the group here
//   const response = await axios.get(
//     'https://jsonplaceholder.typicode.com/posts?_limit=5'
//   );
//   return response.data;
// }

// function renderPosts(posts) {
//   const markup = posts
//     .map(({ id, title, body, userId }) => {
//       return `<li>
//           <h2 class="post-title">${title.slice(0, 30)}</h2>
//           <p><b>Post id</b>: ${id}</p>
//           <p><b>Author id</b>: ${userId}</p>
//           <p>${body}</p>
//         </li>`;
//     })
//     .join('');
//   postList.innerHTML = markup;
// }

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((posts) => console.log(posts))
//     .catch((error) => console.log(error));
  
//     // Change this number to fetch different post
// const postId = 1;

// fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//   .then(response => response.json())
//   .then(post => console.log(post))
//     .catch(error => console.log(error));
  
//     const postToAdd = {
//       author: 'Mango',
//       body: 'CRUD is awesome',
//     };

//     const options = {
//       method: 'POST',
//       body: JSON.stringify(postToAdd),
//       headers: {
//         'Content-Type': 'application/json; charset=UTF-8',
//       },
//     };

//     fetch('https://jsonplaceholder.typicode.com/posts', options)
//       .then((response) => response.json())
//       .then((post) => console.log(post))
//     .catch((error) => console.log(error));
      

//     const postIdToDelete = 1;

//     fetch(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`, {
//       method: 'DELETE',
//     })
//       .then(() => console.log('Post deleted'))
//       .catch((error) => console.log('Error:', error));


// // ?? для ДЗ - репета 1:05 / 1:33 (котики)