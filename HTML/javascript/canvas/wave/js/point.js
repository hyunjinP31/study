export class Point {
    constructor(index, x,y){
        this.x = x;
        this.y = y;
        this.fixedY = y;
        this.speed = 0.01;
        this.cur = index;
        this.max = Math.random() * 100 + 150;
    }
    update() {
        this.cur += this.speed;
        this.y = this.fixedY + (Math.sin(this.cur) * this.max);
    }


}

//일정한 간격으로 포인트를 만들어서 해당 포인트 들을 위아래로 움직이고 그걸 잇는 곡선을 그려서 웨이브처럼 보이게 한다.