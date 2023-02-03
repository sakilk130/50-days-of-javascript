// store string
localStorage.setItem('name', 'Wes');
const getName = localStorage.getItem('name');
console.log('🚀 ~ file: app.js:3 ~ getName', getName);

// store array
const fruits = ['apple', 'pear', 'orange'];
localStorage.setItem('fruits', JSON.stringify(fruits));
const storedFruits = JSON.parse(localStorage.getItem('fruits'));
console.log('🚀 ~ file: app.js:10 ~ storedFruits', storedFruits);

// store object
const person = {
  name: 'Wes',
  age: 100,
};
localStorage.setItem('person', JSON.stringify(person));
const storedPerson = JSON.parse(localStorage.getItem('person'));
console.log('🚀 ~ file: app.js:17 ~ storedPerson', storedPerson);

// remove item
localStorage.removeItem('name');

// remove all
// localStorage.clear();
