//헤더 서브메뉴 표시 
let liTag = document.querySelectorAll('.top_menulist > ul > li');
function addOn(n){
    liTag[n].classList.add('on');
}
function removeOn(n) {
    liTag[n].classList.remove('on');
}
for (let i = 0; i < 4; i++){
    liTag[i].addEventListener('mouseenter', function(){
        addOn(i);
    })
    liTag[i].addEventListener('mouseleave', function(){
        removeOn(i);
    })
}

// 돋보기 아이콘 클릭 시 검색 창 표시
function toggleOn1(){
    document.querySelector('.search').classList.toggle('on')
}
document.querySelector('.search').addEventListener('click', function(){
    toggleOn1();
})

// 한국어 클릭 시 언어선택 창 표시
function toggleOn2(){
    document.querySelector('.right_menu li:nth-child(3)').classList.toggle('on');
}
document.querySelector('.right_menu button').addEventListener('click', function(){
    toggleOn2();
})

//배너의 버튼 클릭시 해당 영역 표시

// for (let j = 0; j < 3; j++){
//     document.querySelectorAll('.banner .bottom_btn button')[j].addEventListener('click', function(){
//         document.querySelectorAll('.month_event')[j].classList.add('show');
        
//     })
// }
document.querySelectorAll('.banner .bottom_btn button')[0].addEventListener('click', function(){
    document.querySelectorAll('.month_event')[0].style.opacity = "1";
    document.querySelectorAll('.month_event')[1].style.opacity = "0";
    document.querySelectorAll('.month_event')[2].style.opacity = "0";
})
document.querySelectorAll('.banner .bottom_btn button')[1].addEventListener('click', function(){
    document.querySelectorAll('.month_event')[0].style.opacity = "0";
    document.querySelectorAll('.month_event')[1].style.opacity = "1";
    document.querySelectorAll('.month_event')[2].style.opacity = "0";
})
document.querySelectorAll('.banner .bottom_btn button')[2].addEventListener('click', function(){
    document.querySelectorAll('.month_event')[0].style.opacity = "0";
    document.querySelectorAll('.month_event')[1].style.opacity = "0";
    document.querySelectorAll('.month_event')[2].style.opacity = "1";
})


//울산 자연관경 버튼 클릭시 해당 영역 표시

document.querySelectorAll('.ulsan_nature .bottom_btn button')[0].addEventListener('click', function(){
    document.querySelector('.ulsan_12').style.opacity = "1.0";
    document.querySelector('.ulsan_12').style.display = "block";
    document.querySelector('.ulsan_alps').style.opacity = "0";
    document.querySelector('.ulsan_alps').style.display = "none";
    document.querySelectorAll('.ulsan_12 li')[9].style.display = "block";
    document.querySelectorAll('.ulsan_12 li')[10].style.display = "block";
    document.querySelectorAll('.ulsan_12 li')[11].style.display = "block";
})
document.querySelectorAll('.ulsan_nature .bottom_btn button')[1].addEventListener('click', function(){
    document.querySelector('.ulsan_12').style.opacity = "0";
    document.querySelector('.ulsan_12').style.display = "block";
    document.querySelector('.ulsan_alps').style.opacity = "1.0";
    document.querySelector('.ulsan_alps').style.display = "block";
    document.querySelectorAll('.ulsan_12 li')[9].style.display = "none";
    document.querySelectorAll('.ulsan_12 li')[10].style.display = "none";
    document.querySelectorAll('.ulsan_12 li')[11].style.display = "none";
})
