const score = 500;
// console.log(score);

const balance = new Number(600);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.78;
// console.log(otherNumber.toPrecision(4));

const money = 10000000;
// console.log(money.toLocaleString('en-US'));

// ++++++++++++++ Maths +++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.5));
// console.log(Math.min(4,8,6,2,7))
// console.log(Math.max(4,8,6,2,7))

// console.log(Math.random())
// console.log(((Math.random()*10) + 1))
// console.log(Math.floor((Math.random()*10) + 1))

const minDie = 1
const maxDie = 6
console.log(Math.floor(Math.random()*(maxDie-minDie + 1))+minDie)
