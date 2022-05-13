/*let a = true;
console.log(a);
console.log(typeof a);
a = 23;
console.log(typeof a);

let box = null;
console.log(box);
console.log(typeof box);

const first = "juan";
console.log(first);

console.log("----------------");

let markMass = 78;
let johnMass = 92;
let markHeight = 1.69;
let johnHeight = 1.95;

let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;

console.log(`Mark's BMI is ${markBMI}, and
John's BMI is ${johnBMI}`);

if (markBMI > johnBMI) {
  console.log(`Mark's BMI is higher`);
} else {
  console.log(`John's BMI is higher`);
}

markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;

markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;

console.log(`Mark's BMI is ${markBMI}, and
John's BMI is ${johnBMI}`);

if (markBMI > johnBMI) {
  console.log(`Mark's BMI is higher`);
} else {
  console.log(`John's BMI is higher`);
}

/*const firstName = "Josue";
const age = 25;

console.log("Hello, my name is " + firstName + " and my age is " + age);

console.log(`Hello, my name is ${firstName} and my age is ${age}`);

console.log(`This is 
a multiline
string, amaizing!!`);*/

/*const age = Number(prompt("age"));
console.log(age);
console.log(typeof age);

if (age == 18) console.log("yes, loose");
if (age === 18) console.log("yes, strict");

if (age != 18) console.log("why not 18, loose");
if (age !== 18) console.log("why not 18, strict");
*/

/*const dolphins = (96 + 108 + 89) / 3;
const koalas = (88 + 91 + 110) / 3;

console.log(dolphins, koalas);

if (dolphins > koalas) console.log("Dolphins win");
else if (dolphins < koalas) console.log("Koalas win");
else console.log("Draw");

const dolphins = (97 + 112 + 100) / 3;
const koalas = (109 + 95 + 105) / 3;

console.log(dolphins, koalas);

if (dolphins > koalas && dolphins >= 100) console.log("Dolphins win");
else if (dolphins < koalas && koalas >= 100) console.log("Koalas win");
else if (dolphins === koalas && dolphins >= 100 && koalas >= 100)
  console.log("Draw");
else console.log("No one wins");*/

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
