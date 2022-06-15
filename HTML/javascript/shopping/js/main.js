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

//main 프로미스 소비자. json 데이터 받아옴
loadItems()
.then(items=>{
    console.log(items);
    displayItems(items);
})
.catch(error=>{
    console.log(error);
})
.finally(()=>{
    console.log('프로미스 끝');
})