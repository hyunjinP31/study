// 변수 선언 btn input ul
let btn = document.querySelector('#insert_btn');
let input = document.querySelector('#todo_input');
let ul = document.querySelector('#list_ul');

btn.addEventListener('click', addList);

// btn클릭시 실행되는 함수
//input의 value가 있는지 확인 없으면 return, 있으면 그 값을 li에 넣어주고 li를 ul에 추가
function addList (){
    if (!input.value) return;
    let li = document.createElement('li')
    li.innerHTML = `${input.value}<span>X</span>`
    ul.append(li);
    input.value = "";
    removeEvent()
}

// x를 클릭했을 때 실행되는 함수
//클릭한 X의 부모요소를 삭제
function removeEvent(){
    let spans = document.querySelectorAll('#list_ul span');
    //모든 스판을 다 선택해 노드 리스트를 만들었으니까 이 리스트에 담긴 건 li하나에 있는 스판임
    //이 forEach에 불려진 건 위에서 만든 스판 노드리스트. 얘가 불러올 값은 각각의 스판들임
    //그 스판을 클릭하면 클릭한 스판의 부모를 찾아가서 element를 remove함
    //스판은 li의 innerHTML로 불렀으니까 부모는 li임 결국 li자체를 삭제할 수 있게 되는 거
    spans.forEach(span => span.addEventListener('click', function(){
        this.parentElement.remove();
    }))
}

//ul을 클릭할 때 클릭한 대상이 li면 check클래스를 지정
//check클래스가 있으면 제거.
ul.addEventListener('click',function(e){
    if (e.target.nodeName === 'LI') e.target.classList.toggle('check');
})
//Enter 누르면 list만들어짐
document.addEventListener('keydown',function(e){
    if (e.key == 'Enter'){
        addList();
    }
})
//Backspace or Delete 누르면 마지막 리스트가 삭제됨
document.addEventListener('keydown',function(e){
    if(e.key == 'Backspace' || e.key == 'Delete'){
        ul.lastElementChild.remove();
    }
})