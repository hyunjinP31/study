let arts= document.querySelectorAll('article');
let lis = document.querySelectorAll('.leftnav li')
document.addEventListener('scroll',function(){
    let sct = document.documentElement.scrollTop;
    arts.forEach((art,index)=> {
        art.style.transform = `translateZ(${index*-5000+sct}px)`
    })
    for(let i=0; i<arts.length; i++){
        if(sct>=i*5000-1000 && sct<(i+1)*5000-1000){
            arts.forEach(art=>art.classList.remove('on'));
            arts[i].classList.add('on');
            lis.forEach(li=>li.classList.remove('on'));
            lis[i].classList.add('on');
        }
    }
    
    lis.forEach((li,index)=>{
        li.addEventListener('click',function(e){
            //기존에 연결된 이벤트를 제거
            e.preventDefault();
            window.scrollTo({top:index*5000-1000, behavior:'smooth'})
        })
    })
    
    // if(sct >= -1000 && sct < 4000) {
    //     arts.forEach(art=>art.classList.remove('on'))
    //     arts[0].classList.add('on');
    // }
    // if(sct >= 4000 && sct < 9000) {
    //     arts.forEach(art=>art.classList.remove('on'))
    //     arts[1].classList.add('on');
    // }
    // if(sct >= 9000 && sct < 14000) {
    //     arts.forEach(art=>art.classList.remove('on'))
    //     arts[2].classList.add('on');
    // }
    // if(sct >= 14000 && sct < 20000) {
    //     arts.forEach(art=>art.classList.remove('on'))
    //     arts[3].classList.add('on');
    // }
    // if(sct >= 20000) {
    //     arts.forEach(art=>art.classList.remove('on'))
    //     arts[4].classList.add('on');
    // }
})