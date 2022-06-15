<?php include_once "./include/header.php" ?>

<?php
    $bookno = $_GET['no'];
    $conn = mysqli_connect('localhost','root','1234','mall');
    $query = "select * from readernote where no = {$bookno}";
    $result = mysqli_query($conn, $query);
    
    function printDesc() {
        global $result;
        while($row = mysqli_fetch_array($result)){
            echo "
            <ul>
            <li><h2>{$row['title']}</h2></li>
            <li>
                <p>{$row['id']}</p>
                <p>{$row['writedate']}</p>
                <p>{$row['textveiw']}</p>
            </li>
            <li>
            <button class=\"btns\"><a href=\"/mall/reader_note.php\">목록보기</a></button>
            </li>
        </ul>
            ";
        };
    };
?>
    <div  id="book_review_detail" class="inner">
        <?php printDesc() ?>
    </div>

<?php include_once "./include/footer.php" ?>