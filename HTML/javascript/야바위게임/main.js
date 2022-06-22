let wrap = document.querySelector('.wrap'); //전체 게임 화면
let cupDiv = document.querySelector('.cups'); //컵 div 감싸는 div
let cups = document.querySelectorAll('.cup'); //실제 컵 div
let coin = document.querySelector('.coin') // 코인 div
let startDiv = document.querySelector('.start'); //게임 시작 화면
let startBtn = document.querySelector('.startBtn'); //게임 스타트 버튼
let endDiv = document.querySelector('.end'); //게임 끝 화면
let whileShuffleDiv = document.querySelector('.whileShuffle'); //셔플하는 동안 화면을 덮을 div

let game = {
    start: false,
    end: false,
}

let startPlace = [0.33,0.66,0.99]; //각 오브젝트 들의 x좌푯값을 구해 배치해주기 위한 숫자
let coinNum = Math.floor(Math.random()*3) //coin을 처음 배치할 때 3개의 좌푯값 중 하나를 랜덤으로 넣어주기 위한 변수

//coin과 cup의 좌푯값을 넣어주는 for문(coin은 3곳 중 랜덤하게 한 곳에 넣어주고 컵은 순서대로 3곳에 전부 배치한다.)
for(let i = 0; i<startPlace.length; i++){
    //첫 번째 좌푯값과 두 번째, 세 번째 좌푯값을 구하는 공식이 다르기 때문에 if문 사용
    if(i == 0) { 
        //(게임 전체 화면 너비*배치할 각 좌푯값)/2 - 각 오브젝트의 너비/2
        cups[i].style.left = (wrap.offsetWidth*startPlace[i])/2-(cups[i].offsetWidth/2)+'px'; 
        coin.style.left = (wrap.offsetWidth*startPlace[coinNum])/2-(coin.offsetWidth/2)+'px';
    }else {
        //(게임 전체 화면 너비*배치할 각 좌푯값) - 각 오브젝트의 너비/2 -(게임전체화면*0.33)/2
        cups[i].style.left = (wrap.offsetWidth*startPlace[i])-(cups[i].offsetWidth/2)-((wrap.offsetWidth*0.33)/2)+'px';
        coin.style.left = (wrap.offsetWidth*startPlace[coinNum])-((wrap.offsetWidth*0.33)/2)-coin.offsetWidth/2+'px';
    }
}
console.log(coin.style.left);
//게임 시작 버튼을 눌렀을 때
startBtn.addEventListener('click',()=>{
    startDiv.style.display = 'none'; //게임 시작화면 off
    whileShuffleDiv.style.display = 'block'; //셔플동안 화면을 덮어서 동작을 못 하게 함
    //coin의 위치를 보여주고 1초뒤 cup 오브젝트들이 나타나면서 셔플 시작. 셔플동안 coin은 보이지 않음
    setTimeout(()=>{
        cups.forEach(cup=>cup.style.opacity = 1)
        coin.style.opacity = 0;
        shuffleStart();
    },1000)
})

let interval; //setinterval 함수 담을 변수
let count = 0; //셔플 횟수
let isShuffleDone; //셔플 횟수 체크

//컵들을 스위칭 시켜줄 함수
function switching (){
    let cupNum1; //switching될 컵1 의 좌푯값
    let cupNum2; //switching될 컵2 의 좌푯값
    let cupRan; //랜덤하게 고를 cup1
    let cupRan2; //랜덤하게 고를 cup2
    //랜덤 넘버가 서로 같은 값이 나오지 않도록 해줌
    while(cupRan==cupRan2){
        cupRan = Math.floor(Math.random()*3);
        cupRan2 = Math.floor(Math.random()*3);
    }
    //변수에 좌푯값 할당해주기
    cupNum1 = cups[cupRan].style.left; 
    cupNum2 = cups[cupRan2].style.left;
    //서로의 좌푯로 switching
    cups[cupRan].style.left = cupNum2;
    cups[cupRan2].style.left = cupNum1;
    //셔플 10번 하고 멈추기
    count += 1;
    if(count==10) return isShuffleDone = true;
}
//셔플 시작
function shuffleStart(){
    interval = setInterval(()=>{
        switching();
        if(isShuffleDone) shuffleStop();
    },100)
}
//셔플 중지
function shuffleStop(){
    clearInterval(interval);
    whileShuffleDiv.style.display = 'none' //셔플이 끝나면 사라져 동작을 할 수 있게 함
}

console.log(coinNum);

cups.forEach((cup,index)=>{
    cup.addEventListener('click',()=>{
        if(index == coinNum) {
            cup.style.opacity = 0;
            console.log(cup.style.left)
            console.log(cup.style.left.split("").splice(0,3));
            coin.style.left = Number(cup.style.left.split("").splice(0,3).join(""))+(cup.offsetWidth/2)-(coin.offsetWidth/2)+'px';
            coin.style.opacity = 1;
            setTimeout(()=>{endDiv.classList.add('win');},1000)
        }else {
            cup.style.opacity = 0;
            coin.style.opacity = 1;
            setTimeout(()=>{endDiv.classList.add('lose');},1000)
        }
        console.log(coin.style.left);
    })
})