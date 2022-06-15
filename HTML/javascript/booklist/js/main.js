function loadBooks(){
    return fetch('./data/data.json')
    .then((response) => response.json())
    .then((data) => data.books);
}



  function displayPrint(books){
    const container = document.querySelector('.lists');
    console.log(books);
    container.innerHTML = books.map(book=>createHTMLString(book)).join(""); //join 안 한 값 = 얘네는 어쨌거나 배열이기 때문에 join 안 해주면 각 객체가 한 개의 인덱스인 배열로 출력됨
  }

  function createHTMLString(books){
    return `
        <li class='list'>
            <span class='writer'>${books.writer}</span>
            <span class='title'>${books.title}</span>
            <span class='bookDate'>${books.bookDate}</span>
        </li>
    `
  }

  //이벤트 설정하기
  function setEventListeners(books){
    const btns = document.querySelector('.btns');
    const logo = document.querySelector('.logo');
    logo.addEventListener('click',()=>displayPrint(books));
    btns.addEventListener('click',event=>onButtonClick(event, books));
  }

  function onButtonClick(event, books){
    const dataset = event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;
    if (key == null || value == null){
        return;
    }
    const filtered = books.filter((book)=> book[key] === value);
    console.log(filtered)
    displayPrint(filtered); //얘 작동하는 법 : 기존에 넣었던 books는 종합 데이터임. json 파일에서 내가 원하는 배열의 모든 값을 갖고 온거. 당연히 리스트는 모든 값이 나타남.
                            //얘는 원하는 조건에 맞춰 필터링 된 값임. 종합 데이터가 해당 배열안의 모든 값을 가지고 온다면 얘는 원하는 조건에 맞는 값만 가지고 옴. filter라는 메소드를 잘 알아야 함.
                            //조건에 따른 모든 값을 새로운 배열로 반환에 주는 메소드임. 내가 지금 위에 준 조건은 해당 값 안에 key(변수 말하는 거)라는 이름의 key(객체 프로퍼티)의 값이 value인 게 있느냐? 있으면 그 값 반환해 달라는 거임.
  }

  //프로미스 소비자. 데이터 받아옴
  loadBooks()
  .then(books=>{
    displayPrint(books);
    setEventListeners(books);
  })
  .catch(error=>console.log(error));