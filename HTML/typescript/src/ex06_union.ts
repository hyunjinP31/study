// 유니언 타입 - 2개 이상의 타입을 허용하는 경우 유니언 타입이라고 함
// | 타입구분, () 선택사항
let unionVar: (string | number) = 12; //숫자 또는 문자를 할당할 수 있음

//인터섹션
// &(앤퍼센트)를 사용해 2개 이상의 타입을 조합하는 경우 인터섹션이라고 합니다.
interface IUser {
    name: string,
    age: number
}
interface IValidation {
    isValid: boolean
}
//두 개의 타입 모두 맞춰 주어야 함.
const neo: IUser & IValidation = {
    name: 'Neo',
    age: 30,
    isValid: false
}

//타입 추론
//1. 초기화된 변수
//2. 기본값이 설정된 매개변수
//3. 반환값이 있는 함수
let num = 20;
function addFunc(a: number, b=2){
    return a+b;
}
let result = addFunc(10,20);

//타입 단언
 function someFunc(val:string | number, isNumber: boolean){
    if(isNumber){
        //1.변수 as 타입 (val ad number)
        //2. <타입>변수(<number>val)
        //(val as number).toFixed(2)
        (<number>val).toFixed(2)
    }
 }