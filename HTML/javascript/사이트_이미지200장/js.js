let imgInsert = document.querySelector('.imgs');

for(let i = 0; i <= 200; i++){
    imgInsert.insertAdjacentHTML('beforeend',`<img src = ./img/pic${i}.jpg></jpg>`)
}
let imgs = document.querySelectorAll('section .imgs img')
imgInsert.addEventListener('mousemove',function(e){
    let moveX = e.pageX;
    let ww = window.innerWidth;
    // console.log(moveX,ww)
    let value = Math.floor(moveX/ww*200);
    let val = moveX/ww*200;
    console.log(val);
    // console.log(value)
    imgs.forEach(img=>img.style.display='none');
    imgs[value].style.display = 'block';
})