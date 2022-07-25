//변수에 초깃값을 할당하면 초깃값의 데이터 타입이 지정됨
//다른 데이터 타입을 넣을 수 없음
//변수 선언시 초깃값을 할당하지 않고 선언만 한 경우 any타입이 되어 다양한 타입을 할당할 수 있음
//변수 선언시 타입도 지정할 수 있음 ex> let score: number = 20;
function outer(){
    if(true){
        let score; //해당 변수는 숫자만 할당할 수 있게됨
        let score2: number;
        score = true;
        score = 30;
    }
}
outer();