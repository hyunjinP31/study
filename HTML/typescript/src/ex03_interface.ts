interface IUser {
    name: string,
    age: number,
    isValid: boolean
}
let useArr: IUser[] = [
    {
        name: 'Neo',
        age: 35,
        isValid: true
    },
    {
        name: 'Lewis',
        age: 44,
        isValid: false
    },
    {
        name: 'Evan',
        age: 25,
        isValid: true
    }
]

//객체를 반복적으로 만들어줄때는 interface 사용
interface IDog {
    name: string,
    color: string,
    age: number
}
let dog1: IDog = {
    name: '구름',
    color: '흰색',
    age: 3
}
let dog2: IDog = {
    name: '크림',
    color: '누렁',
    age: 7
}

//읽기전용 배열 생성하기
let arrA: readonly number [] = [1,2,3,4];
let arrB: ReadonlyArray<number> = [0,9,8,7];