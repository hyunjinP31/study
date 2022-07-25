let numValue: number;
let stringValue: string;
let booleanValue: boolean;
let undefinedValue: undefined;
let nullValue: null;
let objValue: object;
let symbolValue: symbol;

numValue = 30;
stringValue = "string only";
booleanValue = true;
//undefined와 null 은 하위 타입이라 boolean에 할당 가능
booleanValue = undefined;
booleanValue = null;

//원시형 값(숫자, 문자, 불린, 심볼 등)을 제외한 값
objValue = [1, 2, 3, 4, 5]

//배열 정의
let nameList: string[]; //문자열만 담을 수 있는 배열
nameList = ["a", "b", "c", "d", "e"];

//객체 정의 - 프로퍼티에 대한 타입을 지정
//인라인 타입지정
let user1: { name: string, age: number }
user1 = {
    name: "string only",
    age: 30
}

//인터페이스
//인터페이스 메서드 정의
interface TV {
    turnOn(): boolean;
    turnOff(): void;
}
const myTV: TV = {
    turnOn() {
        return true;
    },
    turnOff() {

    }
}
// tv - 매개변수명 , TV - tv의 타입
function tryTurnOn(tv: TV){
    console.log(tv.turnOn())
}
tryTurnOn(myTV)

//일반 변수, 매개 변수, 개체 속성등에 ': TYPE' 이런 형태로 타입을 지정할 수 있다,

function add(a: number, b:number){
    return a+b;
}
add(10,20);

//배열 array 구문 : string[], Array<String>
let arr1: string[] = ['a','b','c'];
let arr2: Array<string> = ['a','b','c'];

//유니언 타입(다중타입) - 지정해준 타입들을 동시에 가질 수 있는 배열
let arr1_uni: (string | number)[] = ['a','b','c',1,2,3];
let arr2_uni: Array<string | number> = ['a','b','c',1,2,3];

//데이터 타입을 지정할 수 없을 때 any타입을 지정
let someArr: any [] = [0,1,"a",true]