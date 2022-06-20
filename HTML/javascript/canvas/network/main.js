import utills from './utills.js';

console.log(utills.randomFloatBetween(4,5))


// 1.캔버스 불러오기
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 2.파티클 클래스 정의
class Particle {
    constructor (x, y, radius, velocity){ //파티클 하나 만들어주기
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.velocity = velocity;
    }
    draw(){
        //펜시작
        ctx.beginPath();
        //호그리기 (x,y,radius,startA,endA,방향)
        ctx.arc(this.x,this.y, this.radius, 0, Math.PI * 2, false); //동그라미 만듦
        ctx.fillStyle = '#fff';
        ctx.fill();
        ctx.closePath();
    }
    animate(){
        //파티클의 좌표가 0이 되거나 canvas의 크기를 벗어날 때
        //0이 되거나 canvas크기보다 커질때
        if (this.x <= 0 || this.x >= innerWidth || this.y <= 0 || this.y >= innerHeight){ //얘네들이 화면(canvas) 밖으로 벗어났을 때
            //x값과 y값을 canvas 안의 랜덤한 좌표로 다시 뿌려준다.
            this.x = utills.randomFloatBetween(0, innerWidth);
            this.y = utills.randomFloatBetween(0, innerHeight);
        }
        //실질적으로 particle을 움직이고 있는 값
        this.x += this.velocity.x;
        this.y += this.velocity.y;

        //파티클 사이에 선 그리기
        //선 객체 생성
        particles.forEach(particle=>{ //파티클이 담긴 배열을 돌아서
            //배열에 담긴 모든 파티클의 위치와 현재 파티클의 위치를 받아온다.
            let distance = utills.distance(particle.x, particle.y, this.x, this.y); //앞의 두 수는 배열 안의 모든 수의 x, y이고 뒤의 두 수는 현재 파티클의 위치이다.
            //점과 점 사이 거리가 300보다 작으면 선을 그림
            if(distance < 300){
                let from = { x: this.x, y: this.y}; //파티클의 현재 위치에서 시작하여
                let to = {x: particle.x, y: particle.y}; //파티클의 다음 위치에
                new Line(from, to, distance).draw(); //선을 생성한 뒤 바로 그려라.
            }
        })
        this.draw(); //파티클을 그려줌
    }
}
// * 선 클래스 정의하기
class Line {
    //선을 만드는 틀
    constructor(from, to, distance){
        this.from = from;
        this.to = to;
        this.distance = distance;
    }
    draw (){
        //선 그리기 시작
        ctx.beginPath();
        ctx.moveTo(this.from.x, this.from.y); //시작할 위치
        ctx.lineTo(this.to.x, this.to.y); //이어질 위치
        ctx.strokeStyle = 'rgba(215,205,0,0.2)';
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.closePath();
    }
}
// 추가 마우스 객체 만들기
let mouse = {
    x: 0,
    y:0,
    isActive : false,
    radius: 5,

}

// 3. 파티클 만들기
const TOTAL = 50; //파티클의 수 정해주기
let particles = []; //만들어진 파티클을 담을 배열
for(let i = 0; i<TOTAL; i++){
    let x = utills.randomFloatBetween(0, innerWidth); //파티클의 x좌표
    let y = utills.randomFloatBetween(0, innerHeight); //파티클의 y좌표
    let radius = utills.randomFloatBetween(0.5,2); //파티클의 크기
    let velocity = { //파티클의 속도
        x:utills.randomFloatBetween(-2, 2),
        y:utills.randomFloatBetween(-2, 2),
    }
    particles.push(new Particle(x,y,radius,velocity));
}

// 4. 매 프레임마다 실행되는 재귀함수 생성
function render(){
    ctx.clearRect(0,0,canvas.width, canvas.height); //프레임이 생겨날 때마다 지워줌(이전 프레임은 지워줌으로써 프레임끼지 겹치지 않도록 하기)
    requestAnimationFrame(render); //프레임 만들기
    particles.forEach(particle=>particle.animate())
    if(mouse.isActive){
        let velocity = {
            x:0,
            y:0,
        }
        new Particle(mouse.x,mouse.y,mouse.radius,velocity).animate();
    }
}
// 5. 실행하기
render();

// 6. window resize 이벤트 정의(창의 크기가 변하면 canvas크기도 창의 크기로 변경)
window.addEventListener('resize',()=>{
    canvas.width = window.innerHeight;
    canvas.height = window.innerHeight;
})

// 7. 마우스 이벤트 연결하기
canvas.addEventListener('mouseenter',function(){
    mouse.isActive = true;
})
canvas.addEventListener('mouseleave',function(){
    mouse.isActive = false;
})
canvas.addEventListener('mousemove', function(e){
    mouse.x = e.pageX;
    mouse.y = e.pageY;
})
