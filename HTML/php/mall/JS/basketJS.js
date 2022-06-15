//document 선택
let bookSpan = document.querySelector('#bookSpan'); //선택한 상품의 총 개수
let totalProductSpan = document.querySelector('#totalSpan'); //선택한 상품의 총 금액
let deliverySpan = document.querySelector('#deliverySpan'); //배송비
let totalPriceSpan = document.querySelector('#totalPrice'); //배송비 + 총 상품금액의 합계
let checks = document.querySelectorAll('.check'); //체크박스 인풋
let checkAll = document.querySelector('#checkAll'); //전체선택 체크박스
let h3Prices = document.querySelectorAll('#price'); //상품 금액이 적힌 h3 태그
let basketRow = document.querySelectorAll('.basketRow'); //장바구니 상품이 들어간 tr태그



//실제 바뀔 숫자
let books = 0; //선택한 상품의 총 개수
let totalProduct = 0; //선택한 상품의 총 금액
let delivery = 2500; //배송비
deliverySpan.innerHTML = delivery; // 배송비 화면 출력
let totalPrice = 0; //배송비 + 총 상품금액의 합계
let volume = 0; //상품 수량


//수량이 바뀔 때 수량에 맞게 가격 조정
basketRow.forEach(function(row){

    let volumeInput = row.children[3].children[0]; //상품의 수량이 적히는 인풋
    let constVolumeInput = row.children[4].children[1]; //상품의 고정 가격을 가져오는 인풋
    let h3Price = row.children[4].children[0]; //상품 금액이 적힌 h3 태그
    let check = row.children[0].children[0]; //체크박스 인풋
    let changeBtn = row.children[3].children[1]; //수량 변경 확인 버튼
    let A = 0;



    check.addEventListener('click', function(){
        //선택한 상품의 총 개수
        books = check.checked ? books + 1 : books;
        books = check.checked == false ? books - 1 : books;
        bookSpan.innerHTML = books;
        //선택한 상품의 총 금액
        totalProduct = check.checked ? totalProduct + Number(h3Price.innerHTML) : totalProduct;
        totalProduct = check.checked == false ? totalProduct - Number(h3Price.innerHTML) : totalProduct;
        totalProductSpan.innerHTML = totalProduct;
        if ( totalProduct >= 50000 ) {
            delivery = 0;
        }else {
            delivery = 2500;
        }
        deliverySpan.innerHTML = delivery;
        //배송비 + 총 상품금액 합계
        totalPrice = totalProduct + delivery;
        totalPriceSpan.innerHTML = totalPrice;;

        if (books < checks.length){
            checkAll.checked = false;
        }
        if (books == checks.length) checkAll.checked = true;
    })


    //전체 선택
    checkAll.addEventListener('click',function(){
        //미리 선택해놨던 인풋 값과 겹쳐 더해지지 않도록 모든 값 초기화
        books = 0;
        totalProduct = 0;
        delivery = 2500;
        totalPrice = 0;
        if(checkAll.checked){
                check.checked = true;
                h3Prices.forEach(price=>{
                    totalProduct = totalProduct + Number(price.innerHTML);
                })
                if ( totalProduct >= 50000 ) {
                    delivery = 0;
                }
            books = checks.length;
            totalPrice = totalProduct + delivery;
        }else {
            check.checked = false;
            books = 0;
            totalProduct = 0;
            totalPrice = 0;
        }
        deliverySpan.innerHTML = delivery;
        totalProductSpan.innerHTML = totalProduct;
        bookSpan.innerHTML = books;
        totalPriceSpan.innerHTML = totalPrice;
    })

    //버튼 클릭시 수량 변경 후 총합 가격 변동
    volumeInput.addEventListener('input',function(){
        if (isNaN(Number(volumeInput.value))) {
            alert ('수량은 숫자만 입력해주세요');
            volumeInput.value = 1;
        }
    })
    changeBtn.addEventListener('click',function(){
        volume = Number(volumeInput.value) * Number(constVolumeInput.value);
        h3Price.innerHTML = volume;
        reCalc();

        if ( totalProduct >= 50000 ) {
            delivery = 0;
        }else {
            delivery = 2500;
        }
        deliverySpan.innerHTML = delivery;
        //배송비 + 총 상품금액 합계
        totalPrice = totalProduct + delivery;
        totalPriceSpan.innerHTML = totalPrice;
    })
})



function reCalc () {
    totalProduct = 0;
    checks.forEach(ch=>{
        if(ch.checked){
            let newVolume = ch.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.children[0].value; //해당 체크박스 상품의 수량 인풋 값
            let newPrice = ch.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.children[1].value; //해당 체크박스 상품의 고정 가격 값(상품이 한 개 일 때 값)
            A = Number(newVolume) * Number(newPrice);
            totalProduct = totalProduct + A;
            totalProductSpan.innerHTML = totalProduct;
        }
        console.log(ch.checked);
    })
}




