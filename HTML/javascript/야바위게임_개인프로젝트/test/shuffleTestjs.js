let wrap = document.querySelector('.wrap');
let cupDiv = document.querySelector('.cups'); //컵 div 감싸는 div
let cups = document.querySelectorAll('.cup'); //실제 컵 div
let coin = document.querySelector('.coin') // 코인 div
let startDiv = document.querySelector('.start');
let startBtn = document.querySelector('.startBtn');


let game = {
    start: false,
    end: false,
}
let cupArr = [];


//코인 관련 변수
let startCoinPlace = [0.3333,0.6666,0.9999];
let ranNum = Math.floor(Math.random()*3)
let ranNum2 = Math.floor(Math.random()*3)
for(let i = 0; i<startCoinPlace.length; i++){
    if(i == 0) {
        cups[i].style.left = (wrap.offsetWidth*startCoinPlace[i])/2-(cups[i].offsetWidth/2)+'px';
        coin.style.left = (wrap.offsetWidth*startCoinPlace[ranNum])/2-(coin.offsetWidth/2)+'px';
    }else {
        cups[i].style.left = (wrap.offsetWidth*startCoinPlace[i])-(cups[i].offsetWidth/2)-((wrap.offsetWidth*0.33)/2)+'px';
        coin.style.left = (wrap.offsetWidth*startCoinPlace[ranNum])-((wrap.offsetWidth*0.33)/2)-coin.offsetWidth/2+'px';
    }
}
startBtn.addEventListener('click',()=>{
    startDiv.style.display = 'none';
    cups.forEach(cup=>cup.style.opacity = 1)
    setTimeout(()=>{
        coin.style.opacity = 0;
    },600)
    switching();
})

let cup1 = (wrap.offsetWidth*startCoinPlace[0])/2-(cups[0].offsetWidth/2)
let cup2 = (wrap.offsetWidth*startCoinPlace[1])-(cups[1].offsetWidth/2)-((wrap.offsetWidth*0.33)/2)
let cup3 = (wrap.offsetWidth*startCoinPlace[2])-(cups[2].offsetWidth/2)-((wrap.offsetWidth*0.33)/2)
cupArr = [cup1, cup2, cup3]


//같은 곳에 두 개의 컵이 있으면 안 됨. == 컵은 항상 페어로 움직이며 서로 스왑되어야 함.
//항상 서로 페어로 움직이되 움직이는 컵들은 랜덤으로 결정되며 자기자신과는 페어가 될 수 없음

function swap(){
    if(ranNum != ranNum2){
        cups[ranNum].style.left = Number(cupArr[ranNum2])+'px';
        cups[ranNum2].style.left = Number(cupArr[ranNum])+'px';
    }

}
console.log(ranNum);
console.log(ranNum2);

let tempCup;
let tempCup2;

let tempArr = [0,1,2];

function switching (){
    setInterval(()=>{
        let cupran = Math.floor(Math.random()*3);
        let cupran2 = Math.floor(Math.random()*3);
        tempCup = cups[cupran].style.left;
        tempCup2 = cups[cupran2].style.left;
        if(cupran != cupran2){
            cups[cupran].style.left = tempCup2;
            cups[cupran2].style.left = tempCup;
        }
        //같은 값일 때 뒤에 애 하나를 다른 값으로 바꿔주기
        console.log(cups[cupran].style.left);
        console.log(cups[cupran2].style.left);
        console.log(cupran);
        console.log(cupran2);
    },700)
}

//해야 하는 것
//Math.random으로 가져오기 때문에 화면이 한 번 새로고침 될 때마다 새로운 숫자를 가져옴 == 컵을 계속해서 셔플시켜줄 방법이 필요함
//Math.random과 setInterval을 같이 써서 setInterval 시간마다 새로운 Math.random 숫자가 출력 되도록 한다면?
//처음 coin의 위치를 잡아주는 Math.random을 가져와 '정답컵'을 cups의 인덱스로 판별할 것.
//셔플동안에는 투명한 div를 깔아 사용자가 영향을 미치지 못 하도록 할 것.
//셔플을 다 끝낸 뒤 코인은 어디? 와 같은 문구를 출력하며 컵 중 하나를 선택하도록 할 것.
//맞혔다면 coin이 오른쪽 상단에 생겨나고 틀렸다면 실패했다는 문구를 띄울 것.

//setInterval을 사용하면 Math.random을 원하는 시간마다 새로 불러올 수 있음 == 셔플에 사용 가능!

//현재 문제점
//cups의 인덱스를 이용해 left값을 바꾸다보니 컵들이 겹치는 일이 발생. 1번 자리에 있던게 2번 자리로 간다고 해서 인덱스까지 2번으로 바뀌는 건 아니기 때문


// div는 잘 움직였지만 좌표가 문제. 두 번째에 div는 0번과 1번이 잘 움직였는데 좌표를 첫 번째 자리와 두 번째 자리로 움직여져서 이미 첫 번째 자리에 있던 div와 겹치는 일이 발생
// 절대 좌표값이 아닌 상대의 좌표로 이동하도록 해야함