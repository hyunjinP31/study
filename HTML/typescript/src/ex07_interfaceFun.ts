interface IUser10 {
    name: string
}

interface IGetUser {
    (name: string): IUser10
}

const getUser: IGetUser = function (n){
    let user: IUser10 = {
        name: n
    }
    return user;
}

let result2 = getUser('green');
console.log(result2);

//선언부의 매개변수의 수와 구연부의 매개변수 수는 개수가 같아야 한다.
//함수 선언부
function add(a: string, b:string): string;
function add(a: number, b:number): number;
//함수 구연부
function add(a: any, b: any){
    return a+ b;
}
add ('hello','type');
add(10, 20);
//error add ('hello',20)

interface nUser{
    name: string,
    age: number,
    getData(x:string): string [],
    getData(x:number): string
}

let user: nUser = {
    name : 'son',
    age: 36,
    getData: (data: any) =>{
        if(typeof data === 'string'){
            return data.split('');
        } else{
            return data.toString();
        }
    }
}

user.getData('Hello'); //['H','e','l','l','o']
user.getData(1234); // "1234"

//keyof
interface ICountries {
    KR: '대한민국',
    US: '미국',
    CP: '중국'
}

let country: ICountries[keyof ICountries];
country = "대한민국";

let country2 : keyof ICountries;
country2 = "KR";