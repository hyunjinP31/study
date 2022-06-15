<?php include "./include/header.php"; ?>
<?php
    $bookno = $_GET['no'];
    $conn = mysqli_connect('localhost','root','1234','mall');
    $query = "select * from realbook where no = {$bookno}";
    $result = mysqli_query($conn, $query);
    
    function printDesc() {
        global $result;
        while($row = mysqli_fetch_array($result)){
            echo "
                <div id='detail_img'>
                    <img src=\"/mall/image/book/{$row['imgsrc']}\">
                </div>
                <ul>
                    <li><h2>{$row['title']}</h2></li>
                    <li><p>{$row['textview']}</p></li>
                    <li><span>{$row['writer']}</span>
                        <span>{$row['pub']}</span>
                        <span>{$row['bookdate']}</span>
                    </li>
                    <li><h3>{$row['price']}</h3></li>
                    <li><button>장바구니 담기</button>
                        <button>바로 주문</button>
                    </li>
                </ul>
            ";
        };
    };
?>
    <div  id="book_detail" class="inner">
        <?php printDesc() ?>
    </div>
            
<?php include "./include/footer.php"; ?>