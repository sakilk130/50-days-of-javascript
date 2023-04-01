const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numbers2 = new Array(22, 33, 44, 55, 66, 77);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, { a: 1, b: 2 }, new Date()];

// map - create a new array from an array

const val = numbers.map(function (x) {
  return x * 2;
});
console.log('🚀 ~ file: app.js:11 ~ val ~ val:', val);

// filter - create a new array based on a condition
const val2 = numbers.filter(function (num) {
  return num > 5;
});
console.log('🚀 ~ file: app.js:18 ~ val2 ~ val2:', val2);

// reduce - create a single value from an array
const val3 = numbers.reduce(function (total, num) {
  return total + num;
}, 0);
console.log('🚀 ~ file: app.js:23 ~ val3 ~ val3:', val3);

// forEach - loop through an array
numbers.forEach(function (num) {
  console.log('🚀 ~ file: app.js:29 ~ num', num);
});

// sort - sort an array
const val4 = fruit.sort();
console.log('🚀 ~ file: app.js:34 ~ val4 ~ val4:', val4);

// reverse - reverse an array
const val5 = fruit.reverse();
console.log('🚀 ~ file: app.js:39 ~ val5 ~ val5:', val5);

// concat - concatenate arrays
const val6 = numbers.concat(numbers2);
console.log('🚀 ~ file: app.js:44 ~ val6 ~ val6:', val6);

// every - check if all values in an array meet a condition
const val7 = numbers.every(function (num) {
  return num > 0;
});
console.log('🚀 ~ file: app.js:51 ~ val7 ~ val7:', val7);

// some - check if some values in an array meet a condition
const val8 = numbers.some(function (num) {
  return num > 0;
});
console.log('🚀 ~ file: app.js:58 ~ val8 ~ val8:', val8);

// includes - check if a value is in an array
const val9 = numbers.includes(2);
console.log('🚀 ~ file: app.js:63 ~ val9 ~ val9:', val9);

// join - join all values in an array into a string
const val10 = numbers.join('-');
console.log('🚀 ~ file: app.js:68 ~ val10 ~ val10:', val10);

// find - find a value in an array
const val11 = numbers.find(function (num) {
  return num > 5;
});
console.log('🚀 ~ file: app.js:75 ~ val11 ~ val11:', val11);

// findIndex - find the index of a value in an array
const val12 = numbers.findIndex(function (num) {
  return num > 5;
});
console.log('🚀 ~ file: app.js:82 ~ val12 ~ val12:', val12);

// indexOf - find the index of a value in an array
const val13 = numbers.indexOf(2);
console.log('🚀 ~ file: app.js:87 ~ val13 ~ val13:', val13);

// lastIndexOf - find the last index of a value in an array
const val14 = numbers.lastIndexOf(2);
console.log('🚀 ~ file: app.js:92 ~ val14 ~ val14:', val14);

// slice - copy a portion of an array
const val15 = numbers.slice(0, 3);
console.log('🚀 ~ file: app.js:97 ~ val15 ~ val15:', val15);

// splice - remove or replace values in an array
const val16 = numbers.splice(0, 3);
console.log('🚀 ~ file: app.js:102 ~ val16 ~ val16:', val16);

// push - add a value to the end of an array
numbers.push(10);
console.log('🚀 ~ file: app.js:107 ~ numbers ~ numbers:', numbers);

// pop - remove a value from the end of an array
numbers.pop();
console.log('🚀 ~ file: app.js:112 ~ numbers ~ numbers:', numbers);

// unshift - add a value to the beginning of an array
numbers.unshift(0);
console.log('🚀 ~ file: app.js:117 ~ numbers ~ numbers:', numbers);

// shift - remove a value from the beginning of an array
numbers.shift();
console.log('🚀 ~ file: app.js:122 ~ numbers ~ numbers:', numbers);
