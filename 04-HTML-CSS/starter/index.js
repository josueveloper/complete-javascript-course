"use strict";
/*
console.log('hello worlds');
console.log('hello worlds');
console.log('hello worlds');
console.log('hello worlds');
console.log('hello worlds');
console.log('hello worlds');
const josue = {
    firstName: 'Josue',
    age: 25,
    address: 'degollado 194'
}
debugger;
josue.age = 54;
josue.address = 'lañsdfkjlaskjd';
debugger;
for (let i = 0; i <= 5; i++){
    debugger;
}
console.log('hello worlds');
console.log('hello worlds');
console.log('hello worlds');
console.log('hello worlds');
console.log('hello worlds');
console.log('hello worlds');
*/

const temps = [17, 21, 23];
const temps2 = [17, 21, 23, 567, 34, 23, 12, 98, 45];

const printForecast = function(array) {
  let finalString = "";
  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    finalString += `${element}°C in ${i + 1} days ... `;
  }
  console.log(finalString);
};

printForecast(temps);
printForecast(temps2);

const z = 'juanito"mandarin';
