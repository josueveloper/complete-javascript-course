"use strict";

/*let hasDriverLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriverLicense) console.log("good");

const josue = {
  a: {
    a1: function () {
      console.log(this);
    },
  },
  b: {
    b1: () => console.log(this),
  },
  c: function c1() {
    console.log(this);
  },
};

josue.a.a1();


const calcAverage = (num1, num2, num3) => (num1 + num2 + num3) / 3;

const checkWinner = function (avgDolphins, avgKoalas) {
  console.log(
    `Dolphines score is ${avgDolphins}, Koalas score is ${avgKoalas}. The winer is ${
      avgDolphins >= avgKoalas * 2
        ? "Dolphins!!"
        : avgKoalas >= avgDolphins * 2
        ? "Koalas!!"
        : "No one wins"
    }`
  );
};

checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27));


const friends = ["juan", "pepe", "pngolin"];
console.log(friends);
const friends2 = new Array("pepe", "jony", "john");
console.log(friends2);

const me = ["josue", 2022 - 1996, "catarino", friends, friends2];

console.log(me);

friends.push("blabla");
console.log(friends);*/

/*const josue = {
  firstName: "Josue",
  lastName: "Ruiz",
  age: 2222 - 1998,
  friends: ["pepe", "larios", "larita"],
  job: "programmer",
};
console.log(josue);
console.log(josue.lastName);
console.log(josue["job"]);

const nameKey = "Name";
console.log(josue["first" + nameKey]);
console.log(josue["last" + nameKey]);

josue.location = "mexico";
josue["twitter"] = "@simplejosue";

console.log(josue.location, josue.twitter);

console.log(
  `${josue.firstName} has ${josue.friends.length} friends, and his best friend is called ${josue.friends[0]}`
);
*/

/*const josue = {
  firstName: "Josue",
  lastName: "Ruiz",
  birthYear: 1998,
  friends: ["pepe", "larios", "larita"],
  job: "programmer",
  hasDriverLicense: false,
  calcAge: function () {
    return (this.age = 2030 - this.birthYear);
  },
  getSummary: function () {
    return `${this.firstName} is a ${
      this.age ? this.age : this.calcAge()
    } old ${this.job}, and he has ${
      this.hasDriverLicense ? "a" : "no"
    } driver's license`;
  },
};

console.log(josue.calcAge());
console.log(josue["age"]);
console.log(josue.getSummary());
*/

/*const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return (this.BMI = this.mass / this.height ** 2);
  },
};
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return (this.BMI = this.mass / this.height ** 2);
  },
};

const output = `${mark.fullName}'s BMI (${mark.calcBMI()}) is ${
  mark.BMI > john.calcBMI() ? "higher" : "lower"
} than ${john.fullName}'s (${john.BMI})`;

console.log(output);
*/

/*const array = [3, "4", 5, [6], 7, false];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

const types = [];
for (let i = 0; i < array.length; i++) {
  //types[i] = typeof array[i];
  types.push(typeof array[i]);
}
console.log(types);

for (let i = 0; i < array.length; i++) {
  if (typeof array[i] !== "boolean") continue;
  console.log(array[i]);
}
for (let i = 0; i < array.length; i++) {
  if (typeof array[i] === "object") break;
  console.log(array[i]);
}
*/
const numbers1 = [4, 5, 4, 3, 6, 7, 5];
const numbers2 = [23, 54, 65, 76, 78, 789, 564];

function avg(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const tip = arr[i]; // it is creating a new "tip" variable every iteration
    console.log(tip);
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(avg(numbers1));
console.log(avg(numbers2));
