const users = [
  {
    user: 'Mango',
    age: 20,
  },
  {
    user: 'Poly',
    age: 30,
  },
];

const ages = users.map(({ age }) => {
    console.log(age);
return age});
console.log(ages);
