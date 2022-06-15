<?php include "../include/header.php"; ?>
<?php
    $conn = mysqli_connect('localhost','root','1234','mall');
    $query = "select * from realbook where Kbook= 'o'";
    $result = mysqli_query($conn, $query);
    $total = mysqli_num_rows($result);

    $list_num = 15;
    $page_num = 3;
    $page = isset($_GET['page']) ? $_GET['page'] : 1;
    $total_page = ceil($total / $list_num);
    $total_block = ceil($total / $page_num);
    $now_block = ceil($page / $page_num);
    $s_pageNum = ($now_block -1 ) * $page_num + 1;
    if($s_pageNum <= 0){
        $s_pageNum = 1;
    }
    $e_pageNum = $now_block * $page_num;
    if($e_pageNum > $total_page){
        $e_pageNum * $total_page;
    }

    $start = ($page-1) * $list_num;
    $sql = "select * from realbook where Kbook= 'o' limit $start, $list_num;";
    $result2 = mysqli_query($conn, $sql);
    function printImg() {
        global $result2;
        while( $row = mysqli_fetch_array($result2)){
            echo "
            <li>
                <a href='/mall/book_detail.php?no={$row['no']}'>
                    <img src='/mall/image/book/{$row['imgsrc']}'>
                    <h3>
                    {$row['title']}
                    </h3>
                </a>
            </li>";
        }
    }
?>
<div id="booklist" class="inner">
    <h1>국내도서</h1>
    <ul>
        <?php printImg(); ?>
    </ul>
    <?php
    /* paging : 이전 페이지 */
    if($page <= 1){
    ?>
        <a href="local_list.php?page=1">이전</a>
    <?php } else{ ?>
        <a href="local_list.php?page=<?php echo ($page-1); ?>">이전</a>
    <?php };?>

    <?php
        for($print_page = $s_pageNum ; $print_page <= $e_pageNum; $print_page ++){
    ?>
        <a href="local_list.php?page=<?=$print_page?>"><?=$print_page?></a>
    <?php
        }
    ?>
    <?php
        if($page >= $total_page){
    ?>
        <a href="local_list.php?page=<?=$total_page?>">다음</a>
    <?php
        } else {
    ?>
        <a href="local_list.php?page=<?=$page+1?>">다음</a>
    <?php
         }
    ?>
</div>

<?php include "../include/footer.php"; ?>