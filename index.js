// 1
const MAX_SIZE = 25 * 1024 * 1024;
let title = 'Hello World';
title = 'Hello ES6';
/* let có thể gán lại giá trị còn const thì không */

// 2
const user = { name: 'David' };
const card = { amount: 7, product: 'Bar', unitprice: 42 };
const message = `Hello ${user.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`;

// 3
function foo(x, y, ...args) {
    return (x + y) * args.length;
}
foo(1, 2, 'hello', true, 7) === 9;

// 4
function sum(x, y = 7, z = 42) {
    return x + y + z;
}

// 5
const evens = [1, 2, 3, 4, 5, 6];
const odds = evens.map((v) => v + 1);
const pairs = evens.map((v) => {
    return { even: v, odd: v + 1 };
});
const nums = evens.map((v, i) => v + i);
const fives = [];
nums.forEach((v) => (v % 5 === 0 ? fives.push(v) : ''));

// 6
class Shape {
    constructor(id, x, y) {
        this.id = id;
        this.move(x, y);
    }
    move(x, y) {
        this.x = x;
        this.y = y;
    }
}

// 8
function showMessAfterTimeout(msg, who, timeout) {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            return resolve(`${msg} Hi ${who}!`);
        }, timeout);
    });
}
showMessAfterTimeout('', 'Foo', 100)
    .then((msg) => showMessAfterTimeout(msg, 'Bar', 200))
    .then((msg) => console.log(`Finish after 300ms:${msg}`));

// 9
const arr = [1, 2, 3, 4, 5];
for (let item in arr) {
    console.log(item);
}
arr.findIndex((item) => item % 2 === 0);
