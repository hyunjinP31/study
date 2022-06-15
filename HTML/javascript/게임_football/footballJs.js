let pics = document.querySelectorAll('article');
let wh = 4600;
// let z = document.documentElement.
let lis = document.querySelectorAll('.leftnav li')
console.log(lis)
lis.forEach((li,index)=>{
    li.addEventListener('click', function(){
        window.scrollTo({top:index*wh, behavior: 'smooth'})
    })
})



document.addEventListener('scroll',function(){
    let sct = document.documentElement.scrollTop;
    pics.forEach((pic,index)=>{
        pic.style.transform = `translateZ(${index*-5000 + sct}px)`;
    })
    for (let i = 0; i < pics.length; i++){
        if (sct >= wh*i && sct < wh*(i+1)){
            pics.forEach(pic=>pic.classList.remove('on'))
            pics[i].classList.add('on')
        }
        
    }
})