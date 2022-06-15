<?php
    include_once 'include/header.php';
?>
    <section id="createBoard" class="inner">
        <h1>주문/배송 내역 확인</h1>
        <p>고객님의 상품을 확인할 수 있습니다.</p>

        <div class="tkForm">
            <form action="/mall/trackingPhone.php" method="post" class="trackingPage">
                <h2>전화번호 조회</h2>
                <ul>
                    <li>전화번호 입력</li>
                    <li><input type="text" name="phone"></li>
                    <li><button type="submit">주문 확인</button></li>
                </ul>
            </form>  
        </div>
        <div class="tkForm">
            <form action="" class="trackingPage">
                <h2>개인정보 조회</h2>
                <ul id="ul2">
                    <li>
                        <button onclick="location.href='/mall/trackingMy.php'">조회하기</button> 
                    </li>
                </ul>
            </form>
        </div>
    </section>
<?php
    include_once 'include/footer.php';
?>