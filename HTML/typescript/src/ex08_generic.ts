// 제네릭(Generic)
//재사용을 목적으로 함수나 클래스이 선언 시점이 아닌, 사용 시점에 타입을 선언할 수 있는 방법을 제공
//타입을 인수로 받는 방식이라 할 수 있음
function toArray(a: number | string, b: number | string): (number | string)[] {
    return [a, b];
}
toArray(1, 2);
toArray('a', 'b');
//유니온 타입의 문제점. 하나의 타입만을 받지 않고 선언한 타입들의 복합적인 사용이 가능해짐
toArray('a', 1);

//T 는 매개변수의 이름. 아무렇게나 적어도 되지만 type의 약자로 보통 T를 쓴다.
function toArray2<T>(a: T, b: T): T[] {
    return [a, b];
}
//사용 시점에서 원하는 타입만을 받아 쓸 수 있음. 이렇게 하면 선언에 구애받지 않고 여러 타입들을 복합적으로 사용하는 것도 가능.
toArray2<number>(1, 2);
toArray2<string>('a', 'b')
toArray2<number | string>(1, 'a')

//인터페이스 제약조건 사용하기 - 타입 제약조건은 extends 키워드로 선언

type U = string | number

interface MyType<T extends U> {
    name: string,
    value: T
}

const dataA: MyType<string> = {
    name: 'Data A',
    value: 'Hello World'
}
const dataB: MyType<number> = {
    name: 'data B',
    value: 22
}
//타입을 string과 number만 받도록 제약조건을 걸었기 때문에 아래 타입들은 선언 불가
//  const dataC: MyType<boolean> ={
//     name: 'data C',
//     value: false
//  }
//  const dataD: MyType<number[]> = {
//     name: 'data D',
//     value: [1,2,3,4]
//  }

//타입 별칭
// type키워드를 사용해 새로운 타입 조합을 만들 수 있음
type myStringType = string;
type yourType = string | number | boolean;
type TUser = {
    name: string,
    age: number,
    isValid: boolean
} | [string, number, boolean]

let tuser1: TUser = {
    name: 'Neo',
    age: 11,
    isValid: false
}
let tuser2: TUser = ['Evan', 23, false];
function someFunc2(arg: myStringType): yourType {
    switch (arg) {
        case 's':
            return arg.toString();
        case 'n':
            return parseInt(arg);
        default:
            return true;
    }
}

// 조건부 타입 T extends U ? X : Y
type U2 = string | number | boolean;

//type 식별자
type MyType2<T> = T extends U2 ? string : number;

// 타입 구현
interface IUser5<T> {
     name: string,
     age: T extends U2 ? string : number
}
//T를 boolean으로 제한함
interface IUser6<T extends boolean> {
    name: string,
    //T 타입이 true인 경우 string을 반환, 아니면 number 반환
    age: T extends true ? string : number
    isString: T
}

const str: IUser6<false> = {
    name: 'green',
    age: 12,
    isString: false
}