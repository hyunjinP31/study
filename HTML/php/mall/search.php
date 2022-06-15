<?php include_once "./include/header.php" ?>
<script defer src="/mall/JS/basketJS.js"></script>
<?php
    $conn = mysqli_connect('localhost','root','1234','mall');
    $query = "select * from realbook where title like '%{$_POST['search']}%'";
    $query2 = "select * from realbook";
    $result = mysqli_query($conn, $query);
    $total_rows = mysqli_num_rows($result);
    function printBasket() {
        global $result;
        while($row = mysqli_fetch_array($result)){
            echo "
                <tr>
                    <td><img src='/mall/image/book/{$row['imgsrc']}'></td>
                    <td>
                        <h3>{$row['title']}</h3>
                        <p>{$row['writer']}</p>
                        <a href='/mall/book_detail.php?no={$row['no']}' class='searchBtn'>상세보기</a>
                    </td>
                    <td><h3>{$row['price']}</h3></td>
                </tr>
            ";
        }
    }
?>

<div id="basketWrap" class="inner">
    <form action="" method="post" id="searchResult">
        <table>
            <tr>
                <td colspan="4">
                    <h1><?=$_POST['search']?> <span>검색 결과</span><span id="searchRows">(<?=$total_rows?>건)</span></h1>
                </td>
            </tr>
            <?php printBasket(); ?>
        </table>
    </form>
</div>
<?php include_once "./include/footer.php" ?>