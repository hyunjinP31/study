//function 이름(매개변수: 매개변수타입지정): 리턴타입지정{
//     실행문
// }
//함수의 리턴 타입 지정 function myFun(): void

function myFunction(num: number): number {
    let result: number = num + 10;
    return result;
}
//리턴이 없으면 void로 지정한다.
function myFunction2(num: number): void {
    let result: number = num + 10;
    console.log(result)
}
console.log(myFunction(10));

//optional ?(물음표) 키워드를 사용하면 선택적 매개변수를 지정할 수 있음
//매개변수 뒤에 ?(물음표)키워드를 사용하여 해당 매개변수를 선택적으로(필수X) 받겠다는 선언
function myAdd(x: number, y?: number): number {
    return x + (y || 0);
}
const sum = myAdd(2);
console.log(sum)
const sum2 = myAdd(2, 7);
console.log(sum2)

interface IUser2 {
    name: string,
    age: number,
    isAdult?: boolean
}
let user10: IUser2 = {
    name: 'aa',
    age: 10,
    isAdult: false
}
let user20: IUser2 = {
    name: 'bb',
    age: 20,
}

// 화살표 함수 타입지정하기
//인수와 반환값이 없을 때
let arFunction: () => void;
arFunction = function () {
    console.log('abc');
}
//인수와 반환값이 있을 때
let arFunction2: (arg1: number, arg2: number) => number;
arFunction2 = function (x, y) {
    return x + y;
}

interface IUser3 {
    readonly name: string,
    age: number
}
let user21: IUser3 = {
    name: 'Neo',
    age: 30
}
user21.age = 20;
console.log(user21.name);

interface IUser4 {
    name: string,
    age: number
}
let user22: Readonly<IUser4> = {
    name: 'green',
    age: 12
}
// Error user22.age = 20 --> Readonly 타입으로 지정했기 때문에 후에 재할당 불가능