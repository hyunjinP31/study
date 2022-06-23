//캔버스 불러오기
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

//변수 정의
//HTMLdocuments
let gameStartDiv = document.querySelector('.gameStart'); //게임 시작 화면 div
let gameStartBtn = document.querySelector('.startBtn'); //게임 시작 버튼
let winDiv = document.querySelector('.win'); //이겼을 때 화면 div
let loseDiv = document.querySelector('.lose'); //졌을 때 화면 div
let restartBtns = document.querySelectorAll('.restart'); //이겼을 때, 졌을 때 화면에 나오는 재시작 버튼
let shuffleDiv = document.querySelector('.shuffle'); //셔플 중에 동작 입력해도 작동하지 않도록 하는 div(가림막)

let game = {
    start: false,
    end: false,
}

//코인 관련 변수
let startCoinPlace = [0.3333,0.6666,0.9999];

//컵 관련 변수
let cupArrs = [];


//코인 객체
let goldCoin = {
    width: 50,
    height: 50,
    num: Math.floor(Math.random()*3),
    y : 300,
    draw(){
        ctx.fillStyle = 'gold';
        if(this.num == 0){
            ctx.fillRect((canvas.width*startCoinPlace[this.num])/2-(this.width/2), this.y, this.width, this.height);
        }else {
            ctx.fillRect((canvas.width*startCoinPlace[this.num])-((canvas.width*0.33)/2)-(this.width/2), this.y, this.width, this.height);
        }
    }
}


//컵 객체
class Cups {
    constructor(x) {
        this.width = 200;
        this.height = 300;
        this.y = 150;
        this.x = x;
    }
    draw(){
        ctx.fillStyle = `rgba(220,100,100,1)`;
        ctx.fillRect(this.x-(this.width/2), this.y, this.width, this.height);
    }
}
//컵 x좌표값 정해서 배열에 담기
for(let i = 0; i<3; i++){
    if (i == 0) {
        cupArrs.push(new Cups((canvas.width*startCoinPlace[i])/2));
    }else {
        cupArrs.push(new Cups((canvas.width*startCoinPlace[i])-((canvas.width*0.33)/2)));
    }
}
//컵 그려주기


//게임 시작 버튼
gameStartBtn.addEventListener('click',()=> {
    game.start = true
    isGameStart(game.start);
})

//게임 시작했을 때 안 했을 때
function isGameStart(gStart){
    if(gStart){
        gameStartDiv.style.display = 'none';
        gameStart();
    }else {
        gameStartDiv.style.display = 'block';
    }
}
isGameStart(game.start);


//게임 시작하고 나서
function gameStart(){
    goldCoin.draw(); //coin을 그려준다.
    cupArrs.forEach(cup=>{
        cup.draw();
    })
}
