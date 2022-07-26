let unionVar = 12;
const neo = {
    name: 'Neo',
    age: 30,
    isValid: false
};
let num = 20;
function addFunc(a, b = 2) {
    return a + b;
}
let result = addFunc(10, 20);
function someFunc(val, isNumber) {
    if (isNumber) {
        val.toFixed(2);
    }
}
