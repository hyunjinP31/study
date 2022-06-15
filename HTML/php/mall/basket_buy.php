<?php include_once "./include/header.php"; ?>

<div id="buy_wrap">
    <div class="buy_text">
        <h1>구매가 완료되었습니다.</h1>
        <p>감사합니다.</p>
        <form method="post">
            <button type="submit" formaction="/mall/index.php">홈으로 돌아가기</button>
            <button type="submit" formaction="/mall/basket.php">장바구니 가기</button>
        </form>
    </div>
</div>


<?php include_once "./include/footer.php"; ?>