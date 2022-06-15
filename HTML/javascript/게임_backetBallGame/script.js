//게임로직
//1. 컴퓨터 차례로 시작
//2. 사용자가 컴퓨터의 슛 버튼을 클릭한다.
//3. 컴퓨터는 2점슛인지 3점슛인지 확률에 의해 결정
//4. 슛이 성공하면 컴퓨터의 점수가 올라감
//5. 사용자의 차례로 변경됨
//6. 2점슛인지 3점슛인지 버튼을 클릭한다.
//7. 슛이 성공하면 사용자의 점수를 올려준다.
//8. 컴퓨터의 차례로 변경되며 슛 회수를 1씩 감소시킨다.
//9. 남은 슛 횟수가 0이 될 때까지 1~8번을 반복한다.
//10. 양쪽의 점수를 비교해 승자를 결정한다.
//* 2점슛의 성공률은 50% 3점슛의 성공률은 30%

let shortsLeftElem = document.querySelector('#shorts-left');
let comScoreElem = document.querySelector('#computer-score');
let userScoreElem =document.querySelector('#user-score');
let textElem = document.querySelector('#text')
document.querySelector('.btn-computer').addEventListener('click', onComputerShoot);
//이벤트 리스너의 함수 자리에 넣을 함수가 받을 인자가 있을 때는 함수를 한 번 더 만들어서 감싸주기. (아니면 바로 실행되기 때문에 클릭 이벤트라 할 수 없음)
document.querySelector('#btn-user2').addEventListener('click', function(){
    onUserShoot(2)
})
document.querySelector('#btn-user3').addEventListener('click', function(){
    onUserShoot(3)
})

//여러번 선언하는 것 보단 카테고리를 나눠서 묶어주는 게 보기도 깔끔하고 편해..서?
//컴퓨터 오브젝트
let computer = {
    score: 0,
    percent2: 0.5,
    percent3: 0.3,
}
//사용자 오브젝트
let user = {
    score: 0,
    percent2: 0.5,
    percent3: 0.3,
}
//게임 오브젝트
let game = {
    isComputerTurn: true,
    shotsleft: 15,
}

//글자가 변경되는 함수 (msg에 인자를 받아와서 바꿈)
function showText(msg) {
    textElem.innerHTML = msg;
}
//점수판에 점수 변경하는 함수 (score에 점수, mal에 누군지를 받아옴(mal이 0이면 컴퓨터)) (컴퓨터 혹은 유저가 슛을 성공시켰을 때 실행)
//score변수에는 2점슛 혹은 3점슛에 따라 받아오는 값이 달라야 하기 때문에 인자로 변수를 넣어줬음
//mal값은 직접 지정. 컴퓨터 턴 함수에서는 0을 넣고 유저 턴에서는 1을 넣어줌
function updateScore(score, mal) {
    if (mal == 0){
        computer.score += score;
        comScoreElem.innerHTML = computer.score;
    }else {
        user.score += score;
        userScoreElem.innerHTML = user.score;
    }
}
//컴퓨터 버튼 비활성화 함수 (턴이 끝났을 때 실행. 인자로 true나 false를 받아야 함.)
function disableComputer(flag) {
    let computerButton = document.querySelector('.btn-computer');
    computerButton.disabled = flag;
}
//유저 버튼 비활성화 함수 (턴이 끝났을 때 실행. 인자로 true나 false를 받아야 함.)
function disableUser(flag) {
    let userButton = document.querySelectorAll('.btn-user');
    for (let i=0; i<userButton.length; i++){
        userButton[i].disabled = flag;
    }
}
//컴퓨터 슛실행 (컴퓨터 버튼을 클릭했을 때 실행)
function onComputerShoot(){
    //컴퓨터 턴 값이 false이면 return시켜라. = 종료시켜라.
    if(!game.isComputerTurn) return;
    //슛타입 결정
    let shootType = Math.random() < 0.5 ? 2 : 3;
    //슛을 확률대로 성공시키기 (컴퓨터 객체에서 미리 정했던 percent를 갖고 옴
    // 뒤에 더하기 연산자로 shootType을 문자열로 더해줌 2점슛 갈기면 2가 나오고 3점슛 갈기면 3이 나오도록)
    if (Math.random() < computer['percent'+shootType]){
        //showText함수 msg변수 값에 인자 넣어줬음 
        showText(`컴퓨터가 ${shootType}점슛을 성공시켰습니다.`);
        //updateScore함수 score, mal 변수값에 인자 넣어줌.
        updateScore(shootType,0);
    }else {
        showText(`컴퓨터가 ${shootType}점슛을 실패했습니다.`);
    }
    game.isComputerTurn = false;
    disableComputer(true);
    disableUser(false);
}
//유저 슛 실행 (2점슛 버튼을 클릭했을때 jum변수에 2로 인자를 받고, 3점슛 버튼을 클릭하면 jum변수에 3으로 인자를 받아서 실행. (이벤트는 각각 따로 줌))
function onUserShoot(jum){
    if (game.isComputerTurn) return;
    if (Math.random() < user['percent'+jum]){
        showText(`당신이 ${jum}점슛을 성공시켰습니다.`);
        updateScore(jum, 1);
    }else {
        showText(`당신이 ${jum}점슛을 실패했습니다.`);
    }
    game.isComputerTurn = true;
    disableComputer(false);
    disableUser(true);
    gameTurn();
}
//유저 턴 마지막에 실행 (사용자 턴이 끝났을 때 슛 횟수를 줄이고 슛횟수가 0인지 아닌지 검사.)
function gameTurn (){
    game.shotsleft--;
    shortsLeftElem.innerHTML = game.shotsleft;
    if(game.shotsleft==0){
        if(user.score > computer.score) showText('사용자가 승리했습니다.');
        else if (user.score < computer.score) showText('컴퓨터가 승리했습니다.')
        else showText('비겼습니다.');
        disableComputer(true);
    }
}


