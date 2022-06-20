import { Point } from "./point.js";

export class Wave {
    constructor(index, totalPoints, color) {
        this.index = index;
        this.totalPoints = totalPoints;
        this.color = color;
        this.points = [];
    }
    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.centerX = stageWidth / 2;
        this.centerY = stageHeight / 2;

        //포인트 생성간격
        this.pointGap = this.stageWidth /(this.totalPoints - 1);
        this.init();
    }
    init() {
        //포인트 배열을 생성
        this.points = [];
        for ( let i = 0; i<this.totalPoints; i++){
            const point = new Point(
                this.index + i,
                this.pointGap * i,
                this.centerY
            );
            //베열에 순서대로 포인트 객체를 넣음
            this.points[i] = point;
        }
        this.point = new Point(
            this.centerX,
            this.centerY,
        )
    }
    draw(ctx){
        ctx.beginPath();
        ctx.fillStyle = this.color;

        let prevX = this.points[0].x;
        let prevY = this.points[0].y;

        ctx.moveTo(prevX, prevY);
        //첫번째와 마지막 점은 그 위치에 두고 나머지만 업데이트
        for(let i=1; i<this.totalPoints; i++){
            if( i< this.totalPoints -1){
                this.points[i].update();
            }
            const cx = (prevX + this.points[i].x) / 2;
            const cy = (prevY + this.points[i].y) / 2;

            //곡선으로 변경
            ctx.quadraticCurveTo(prevX, prevY, cx, cy);  // 선을 그릴 때 곡선으로 그려줌
            // ctx.lineTo(cx, cy); //위에 메소드를 하지 않고 그냥 라인으로 그려주면 직선 형태로 된 웨이브가 보임

            prevX = this.points[i].x;
            prevY = this.points[i].y;
        }
        ctx.lineTo(prevX, prevY);
        ctx.lineTo(this.stageWidth, this.stageHeight);
        ctx.lineTo(this.points[0].x, this.stageHeight);
        ctx.fill();
        ctx.closePath();
    }
}
