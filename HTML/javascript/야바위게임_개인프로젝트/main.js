let wrap = document.querySelector('.wrap'); //전체 게임 화면
let cupDiv = document.querySelector('.cups'); //컵 div 감싸는 div
let cups = document.querySelectorAll('.cup'); //실제 컵 div
let coin = document.querySelector('.coin') // 코인 div
let startDiv = document.querySelector('.start'); //게임 시작 화면
let startBtn = document.querySelector('.startBtn'); //게임 스타트 버튼
let nextDiv = document.querySelector('.end'); //게임 끝 화면
let whileShuffleDiv = document.querySelector('.whileShuffle'); //셔플하는 동안 화면을 덮을 div
let restartBtn = document.querySelector('.restart'); //게임이 끝났을 때 나타나는 재시작 버튼


let startPlace = [0.33,0.66,0.99]; //각 오브젝트 들의 x좌푯값을 구해 배치해주기 위한 숫자
let coinNum = Math.floor(Math.random()*3) //coin을 처음 배치할 때 3개의 좌푯값 중 하나를 랜덤으로 넣어주기 위한 변수
let stageCount = 0;
let interval; //setinterval 함수 담을 변수
let count = 0; //셔플 횟수
let isShuffleDone; //셔플 횟수 체크


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


//게임 시작 버튼을 눌렀을 때
startBtn.addEventListener('click',()=>{
    startDiv.style.display = 'none'; //게임 시작화면 off
    whileShuffleDiv.style.display = 'block'; //셔플동안 화면을 덮어서 동작을 못 하게 함
    //coin의 위치를 보여주고 1초뒤 cup 오브젝트들이 나타나면서 셔플 시작. 셔플동안 coin은 보이지 않음
    setTimeout(()=>{
        cups.forEach(cup=>cup.style.opacity = 1)
        coin.style.opacity = 0;
        shuffleStart(1000,8);
    },1000)
})



//컵들을 스위칭 시켜줄 함수
function switching (volume){
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
    if(count==volume) return isShuffleDone = true;
    console.log(count)
}
//셔플 시작
function shuffleStart(speed, volume){
    interval = setInterval(()=>{
        switching(volume);
        if(isShuffleDone) shuffleStop();
    },speed) //1000, 600, 200 결정! 인자로 받기?
}
//셔플 끝
function shuffleStop(){
    clearInterval(interval);
    whileShuffleDiv.style.display = 'none' //셔플이 끝나면 사라져 동작을 할 수 있게 함
}

restartBtn.addEventListener('click',()=>{
    count = 0
    stageCount = 0;
    isShuffleDone = false;
    nextDiv.classList.remove('win');
    nextDiv.classList.remove('lose');
    startDiv.style.display = 'block';
    restartBtn.style.display = 'none';

})




console.log(coinNum);

cups.forEach((cup,index)=>{
    //셔플이 끝나고 컵을 클릭했을 때
    cup.addEventListener('click',()=>{
        //coin의 위치를 정답컵의 위치로 옮겨준다.
        coin.style.left = Number(cups[coinNum].style.left.split("").filter((str)=>str !== 'p' && str !== 'x').join(""))+(cups[coinNum].offsetWidth/2)-(coin.offsetWidth/2)+'px';
        cup.style.opacity = 0; //클릭한 컵의 투명도를 0으로 만들어 코인이 있는 지 확인
        coin.style.opacity = 1; //z-index로 컵보다 뒤에 위치하도록 해놨기 때문에 바로 투명도 올려줘도 됨
        if(index == coinNum) {
            setTimeout(()=>{
                count = 0;
                isShuffleDone = false;
                stageCount += 1;
                if (stageCount == 1){
                    nextDiv.classList.add('stage2');
                    setTimeout(()=>{
                        nextDiv.classList.remove('stage2');
                        coinNum = Math.floor(Math.random()*3);
                        whileShuffleDiv.style.display = 'block';
                        console.log(coinNum,"   coinNum second")
                        setTimeout(()=>{
                            cups.forEach(cup=>cup.style.opacity = 1)
                            coin.style.opacity = 0;
                            shuffleStart(600, 10);
                        },1000)
                    },1500)
                }else if (stageCount == 2){
                    nextDiv.classList.add('stage3');
                    setTimeout(()=>{
                        nextDiv.classList.remove('stage3');
                        coinNum = Math.floor(Math.random()*3);
                        whileShuffleDiv.style.display = 'block';
                        console.log(coinNum,"   coinNum second")
                        setTimeout(()=>{
                            cups.forEach(cup=>cup.style.opacity = 1)
                            coin.style.opacity = 0;
                            shuffleStart(350, 12);
                        },1000)
                    },1500)
                }else if (stageCount == 3) {
                    nextDiv.classList.add('win');
                    restartBtn.style.display = 'block';
                }
            },2000)
        }else {
            //틀렸다면 바로 lose화면 출력
            setTimeout(()=>{
                nextDiv.classList.add('lose');
                restartBtn.style.display = 'block';
            },2000)
        }
        //컵을 누르고 난 후 0.7초 뒤에 다른 컵들의 투명도를 0으로 줘서 다른 컵들 안에는 무엇이 담겨있는지 확인 시켜준다.
        setTimeout(()=>{
            cups.forEach(cup=>cup.style.opacity = 0)
        },700)
        
    })
})







// 시작 화면
// 시작 화면의 시작 버튼
// 셔플될 동안의 바탕화면(할 수 있다면 stage1,2,3 따로) (스테이지 1: 낮, 2: 저녁, 3: 밤) 배경 호프집. 오른쪽에 거품 가득 맥주 한 잔.--> 스테이지 지날 수록 줄어듬, 왼쪽에 coin --> 스테이지 지날 수록 많아짐
// 스테이지 2, 3을 알려줄 화면
// lose화면 (빈털터리가 됨)
// win화면 (코인이 넘쳐나는 모양)
// win화면 재시작 버튼





