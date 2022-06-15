//햄버거 토글넣기
let burger = document.querySelector('#burger');

burger.addEventListener('click', function(){
    burger.classList.toggle('on');
});


//슬라이더
let viewDiv = document.querySelector('#moveDiv');
let prevBtn = document.querySelector('#prev');
let nextBtn = document.querySelector('#next');
console.log(viewDiv);
let lastImg = viewDiv.lastElementChild;
let firstImg = viewDiv.firstElementChild;
let bgColor = document.querySelector('#visual'); // bg컬러
let bgArr = ["rgb(218, 236, 240)","rgb(251, 234, 239)","rgb(248, 244, 216)",
"rgb(230, 233, 246)","rgb(222, 243, 228)","rgb(218, 236, 240)","rgb(251, 234, 239)"];

console.log(lastImg);
let cloneFirst = firstImg.cloneNode(true);
let cloneLast = lastImg.cloneNode(true);

viewDiv.append(cloneFirst);
viewDiv.prepend(cloneLast);

let prev;
let next;
let current = 1;

let slideImg = document.querySelectorAll('.slideDiv');
console.log(slideImg.length);
viewDiv.style.width = (slideImg.length) * 100 + '%';
viewDiv.style.left = -(current * 100) + '%';
slideImg.forEach((div,index)=>{
    div.style.width = ( 100 / slideImg.length) + '%';
    div.style.left = (index * (100/slideImg.length) + '%');
})

function slideMove(imgNum) {
    viewDiv.style.transition = '0.5s';
    viewDiv.style.left = -(imgNum*100) + '%';
    bgColor.style.background = bgArr[imgNum]; //bg
    current = imgNum;
    console.log(current);
    if (imgNum == 6){
        console.log('마지막');
        firstCurrent();
    }
    if (imgNum == 0){
        console.log('처음');
        lastCurrent();
    }
}
let timer;
function startIt() {
    if(timer) stopIt();
    timer = setInterval(function(){
        slideMove(current+1);
    },2000)
}
startIt()
function stopIt() {
    clearInterval(timer);
}

function firstCurrent(){
    setTimeout(function(){
        viewDiv.style.transition = '0s';
        viewDiv.style.left = -(100) + '%';
        current = 1;
    },500)
}
function lastCurrent(){
    setTimeout(function(){
        viewDiv.style.transition = '0s';
        viewDiv.style.left = -(500) + '%';
        current = 5;
    },500)
}
//이전버튼에 이벤트 연결
prevBtn.addEventListener('mouseenter',stopIt);
prevBtn.addEventListener('mouseleave',startIt);
prevBtn.addEventListener('click',function(){
    prev = current - 1;
    slideMove(prev);
})
//다음버튼에 이벤트 연결
nextBtn.addEventListener('mouseenter',stopIt);
nextBtn.addEventListener('mouseleave',startIt);
nextBtn.addEventListener('click',function(){
    next = current + 1;
    slideMove(next);
})

//스크롤 버튼

// let scrollTop = document.querySelector('#scrollTop');

// scrollTop.addEventListener('click',function(e){
//     window.scrollTo({top:0, behavior:'smooth'})
// })
// scrollTop.addEventListener('mouseover', function(e){
//     scrollTop.style.animation = "none";
// })
// scrollTop.addEventListener('mouseleave', function(e){
//     scrollTop.style.animation = "movescroll 1s infinite";
// })