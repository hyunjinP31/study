<?php include_once "./include/header.php" ?>
<script defer src="/mall/JS/basketJS.js"></script>
<?php
session_start();
$userId = $_SESSION['userId'];
    $conn = mysqli_connect('localhost','root','1234','mall');
    $query = "select * from members
    inner join basket
    on members.id = basket.id
    where basket.id = '{$userId}';";
    $result = mysqli_query($conn, $query);
    $total_rows = mysqli_num_rows($result);
    function printBasket() {
        global $result;
        global $userId;
        global $total_rows;
        if(isset($userId)){
                 while($row = mysqli_fetch_array($result)){
                        echo "
                                <tr class='basketRow'>
                                    <td>
                                        <input type='checkbox' name='no[]' class='check' value='{$row['no']}'>
                                    </td>
                                    <td><img src='/mall/image/book/{$row['imgsrc']}'></td>
                                    <td>
                                        <h3>{$row['title']}</h3>
                                        <p>{$row['writer']}</p>
                                        <button type='submit' formaction='/mall/process/basket_buy_process.php'>구매</button>
                                        <button type='submit' formaction='/mall/process/basket_delete_process.php' >삭제</button>
                                    </td>
                                    <td>
                                        <input type='text' name='volume' class='volume' value=1>
                                        <button type='button' class='changeBtn'>변경</button>
                                    </td>
                                    <td>
                                        <h3 id='price'>{$row['price']}</h3> 
                                        <input type='hidden' name='constVolume' class='constVolume' value='{$row['price']}'>
                                    </td>
                                </tr>
                        ";
                }
                if($total_rows==0) {
                    echo "<h2>없음</h2>";
                    }
                    
                    } else {
                    ?>
                        <script>
                            alert('로그인 해주세요');
                            history.back();
                        </script>
                    <?php

                    }
    } 
    
?>

<div id="basketWrap" class="inner">
    <form method='post'>
            <table>
                <tr>
                    <td><input type="checkbox" name="checkAll" id="checkAll"> 전체선택</td>
                    <td colspan="3">
                    <button formaction='/mall/process/basket_delete_process.php'>선택한 상품 삭제</button>
                    </td>
                </tr>
                <tr id="basketHead">
                    <td class="tdheight">선택</td>
                    <td class="tdheight">표지</td>
                    <td class="tdheight">제목</td>
                    <td class="tdheight">수량</td>
                    <td class="tdheight">가격</td>
                </tr>
                <?php printBasket(); ?>
            </table>
    </form>
    <div id="basketFixed">
        <div>
            <p>총 <span id="bookSpan">0</span>권을 선택하셨습니다.</p>
            <p>총 상품 금액 <span id="totalSpan">0</span></p>
            <p>배송비 <span id="deliverySpan">0</span></p>
            <h3>합계 금액 <span id="totalPrice">0</span></h3>
        </div>
        <div>
        <button type='submit' formaction='/mall/process/basket_buy_process.php'>구매하기</button>
        </div>
    </div>
</div>



<?php include_once "./include/footer.php" ?>