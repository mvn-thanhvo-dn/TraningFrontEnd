const arr = [1, 2, 3];

// Example for map
console.log(arr.map((x) => x + 2));

// Example for filter
console.log(arr.filter((x) => x % 2 !== 0));

// Example for reduce
let result = arr.reduce((preValue, currValue) => {
    return preValue + currValue;
}, 0);
console.log(result);

// Example for find
console.log(arr.find((item) => item % 2 !== 0));

// Example for some
console.log(arr.some((item) => item % 2 === 0));

// Add new element to array at the end
arr.push(4);
console.log(arr);

// Add new element to array at the beginning
console.log([0, ...arr]);

// Removing an element in array
arr.pop();
console.log(arr);
arr.splice(0, 1);
console.log(arr);
arr.push(4, 5);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// -----------------Playground---------------------
// 1
function sum(a, b) {
    let result = a + b;
    if (a === b) {
        result *= 3;
    }
    return result;
}
console.log(sum(10, 5));
console.log(sum(5, 5));

// 2
function absolute(a) {
    let result = Math.abs(19 - a);
    if (a > 19) {
        result *= 3;
    }
    return result;
}
console.log(absolute(12));
console.log(absolute(19));
console.log(absolute(22));

// 3
function divisible(s) {
    let arr = Array.from(s.split(''));
    arr.splice(arr.indexOf('*'), 1);
    arr = arr.map((x) => parseInt(x));
    const sum = arr.reduce((pre, curr) => pre + curr, 0);
    const t = [];
    for (let i = 0; i < 9; i++) {
        if ((sum + i) % 3 === 0) {
            t.push(i);
        }
    }
    const result = [];
    for (let i = 0; i < t.length; i++) {
        result.push(s.replace('*', t[i].toString()));
    }
    return result;
}
console.log(divisible('1*9'));
console.log(divisible('1234567890*'));

// 4
function divisible6(s) {
    let arr = Array.from(s.split(''));
    const l = arr.length;
    const index = arr.indexOf('*');
    arr.splice(index, 1);
    arr = arr.map((x) => parseInt(x));
    const sum = arr.reduce((pre, curr) => pre + curr, 0);
    let lastValue = arr[arr.length - 1];
    const t = [];
    for (let i = 0; i < 9; i++) {
        if (index === l - 1) {
            lastValue = i;
        }
        if ((sum + i) % 3 === 0 && lastValue % 2 === 0) {
            t.push(i);
        }
    }
    const result = [];
    for (let i = 0; i < t.length; i++) {
        result.push(s.replace('*', t[i].toString()));
    }
    return result;
}
console.log(divisible6('1*9'));
console.log(divisible6('1234567890*'));
