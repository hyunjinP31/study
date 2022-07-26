function myFunction(num) {
    let result = num + 10;
    return result;
}
function myFunction2(num) {
    let result = num + 10;
    console.log(result);
}
console.log(myFunction(10));
function myAdd(x, y) {
    return x + (y || 0);
}
const sum = myAdd(2);
console.log(sum);
const sum2 = myAdd(2, 7);
console.log(sum2);
let user10 = {
    name: 'aa',
    age: 10,
    isAdult: false
};
let user20 = {
    name: 'bb',
    age: 20,
};
let arFunction;
arFunction = function () {
    console.log('abc');
};
let arFunction2;
arFunction2 = function (x, y) {
    return x + y;
};
let user21 = {
    name: 'Neo',
    age: 30
};
user21.age = 20;
console.log(user21.name);
let user22 = {
    name: 'green',
    age: 12
};
