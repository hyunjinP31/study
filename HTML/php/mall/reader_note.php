<?php include_once "./include/header.php" ?>

<?php
    $bookno = $_GET['no'];
    $conn = mysqli_connect('localhost','root','1234','mall');
    $query = "select * from readernote order by no desc";
    $result = mysqli_query($conn, $query);
    $total = mysqli_num_rows($result);

    $list_num = 10;
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
    $sql = "select * from readernote order by no desc limit $start, $list_num;";
    $result2 = mysqli_query($conn, $sql);
    function printReview() {
        global $result2;
        while($row = mysqli_fetch_array($result2)){
            echo "
                <tr>
                    <td>{$row['no']}</td>
                    <td>{$row['id']}</td>
                    <td><a href=\"/mall/reader_note_detail.php?no='{$row['no']}'\">{$row['title']}</a></td>
                    <td>{$row['writedate']}</td>
                </tr>
            ";
        };
    };
?>
    <div  id="book_review" class="inner">
        <form action="" method="post">
            <table>
                <tr>
                    <th>번호</th>
                    <th>작성자</th>
                    <th>제목</th>
                    <th>작성일</th>
                </tr>
                <?php printReview() ?>
            </table>
        </form>
        <?php
    /* paging : 이전 페이지 */
    if($page <= 1){
    ?>
        <a href="reader_note.php?page=1">이전</a>
    <?php } else{ ?>
        <a href="reader_note.php?page=<?php echo ($page-1); ?>">이전</a>
    <?php };?>

    <?php
        for($print_page = $s_pageNum ; $print_page <= $e_pageNum; $print_page ++){
    ?>
        <a href="reader_note.php?page=<?=$print_page?>"><?=$print_page?></a>
    <?php
        }
    ?>
    <?php
        if($page >= $total_page){
    ?>
        <a href="reader_note.php?page=<?=$total_page?>">다음</a>
    <?php
        } else {
    ?>
        <a href="reader_note.php?page=<?=$page+1?>">다음</a>
    <?php
         }
    ?>
    <button onclick="location.href='/mall/process/addnote_process.php'">게시글 작성</button>
    </div>

<?php include_once "./include/footer.php" ?>