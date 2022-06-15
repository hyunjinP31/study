<?php include "./include/header.php"; ?>
<?php
    $bookno = $_GET['no'];
    $conn = mysqli_connect('localhost','root','1234','mall');
    $query = "select * from realbook where no = '{$bookno}';";
    $result = mysqli_query($conn, $query);
    function printDesc() {
        global $result;
        while($row = mysqli_fetch_array($result)){
            // var_dump($row);
            echo "
                <div id='detail_img'>
                    <img src=\"/mall/image/book/{$row['imgsrc']}\">
                    <p>미리보기</p>
                </div>
            <form action='/mall/process/basket_process.php?no={$row['no']}' method='post'>
                <ul>
                    <li>
                        <h2>{$row['title']}</h2>
                        <input type='hidden' name='title' value='{$row['title']}'> 
                    </li>
                    <li>
                        <span>{$row['writer']}</span>
                        <span>{$row['pub']}</span>
                        <span>{$row['bookdate']}</span>
                        <li>
                            <p>{$row['textview']}</p>
                        </li>
                        <input type='hidden' name='writer' value='{$row['writer']}'>  
                        <input type='hidden' name='price' value='{$row['price']}'>
                        <input type='hidden' name='imgsrc' value='{$row['imgsrc']}'>  
                    </li>
                    <li><h3>{$row['price']}원</h3></li>
                    <li>
                        <button type='submit'>장바구니 담기</button>
                        <button>바로 주문</button>
                    </li>
                </ul>
            </form>
        ";
        };
    };
?>
    <div  id="book_detail" class="inner">
        <?php printDesc() ?>
    </div>
            
<?php include "./include/footer.php"; ?>