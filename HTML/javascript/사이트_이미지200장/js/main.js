let sec = document.querySelector('section');
let imgArr = [];
let domImg = document.querySelector('#img')
for (let i = 0; i <=200; i++){
    imgArr.push(`img/pic${i}.jpg`);
}

sec.addEventListener('mousemove',function(e){
    let winw = window.innerWidth
    let num = Math.floor(e.pageX/winw *200)
    //부분/전체 *100 =백분률 구하기
    console.log(imgArr[num])
    domImg.src = imgArr[num];
})
