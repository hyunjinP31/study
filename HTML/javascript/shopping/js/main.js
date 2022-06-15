function loadItems(){
    //fetch api
    //fetch('url') --> 네트워크 주소를 적으면 받아옴
   return fetch('data/data.json')
   //성공하면 받아온 데이터를 제이슨으로 변환
  .then((response) => response.json())
  .then((data) => data.items); //data라는 객체가 가진 items라는 배열을 반환해라.
}

function displayItems(items){
    const container = document.querySelector('.items');    //html에 ul을 선택
    container.innerHTML = items.map((item)=> createHTMLString(item) ).join("");
}

function createHTMLString(item){
    return `
        <li class='item'>
            <img src='${item.image}' alt='${item.type}' class='item_thumbnail'>
            <span>${item.gender}, ${item.size}</span>
        </li>
    `;
}

//이벤트 설정하기
function setEventListeners(items){
    const buttons = document.querySelector('.buttonDiv');
    const logo = document.querySelector('.logo');
    logo.addEventListener('click',()=>displayItems(items));
    buttons.addEventListener('click',event=> onButtonClick(event, items));
}

//버튼을 클릭할 때 실행되는 함수
function onButtonClick(event,items){ //event는 addEventLister에서 기본적으로 제공해주는 애고, 타겟팅 하기 위해서 불러오는 거. 해당 함수가 실행되고 있는 함수에서 인자로 items를 받아오고 있음 이 items는 json 데이터임.
    const dataset = event.target.dataset;
    const key = dataset.key; //내가 직접 만든 data -set key값 "type","color"
    const value = dataset.value; //내가 직접 만든 data -set value값. json 데이터에서 불러온 값들 중 key 값이 위의 key값이랑 같고 value도 그 key 값에 들어있는 애들로만 줬음
    //key 값과 value값 중 하나라도 없으면 리턴(종료)
    if (key == null || value == null){
        return;
    }
    const filtered = items.filter(item=> item[key] === value); //item[key] 값이 value값일 때 item[gender] 라고 호출하면 해당 value값을 반환해 주기 때문에 item[key] === value가 성립됨. 이 때 key와 value는 모두 위에서 지정한 변수임.
    console.log(filtered);
    displayItems(filtered);
}

//main 프로미스 소비자. json 데이터 받아옴
loadItems()
.then(items=>{
    //이 안에 담긴 애들은 데이터를 다 받아오고 난 후 실행됨 왜? .then이 json 데이터를 받아오는 메소드니까. 이 메소드에서 데이터를 받아오고 난 후 해당 함수들을 실행시켜라(콜백함수) 해주는 거 
    console.log(items);
    displayItems(items);
    setEventListeners(items); //button을 클릭했을 때 이벤트 발행하도록 하는 함수 실제 실행문은 콜백으로 함수를 다시 연결해줌
})
.catch(error=>{
    console.log(error);
})
.finally(()=>{
    console.log('프로미스 끝');
})