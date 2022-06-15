<?php
    include_once ('include/header.php');
?>
        <div class="contents inner">
            <h2>도서목록</h2>
            <p>최신 도서목록입니다.</p>
            <form action="" method="post">
                <table>
                    <tr>
                        <td>id</td>
                        <td>제목</td>
                        <td>글쓴이</td>
                        <td>출판사</td>
                        <td>가격</td>
                        <td>출판일</td>
                    </tr>
                        <?php
                        createTD();
                        ?>
                </table>
            </form>
        </div>
<?php
    include ('include/footer.php');
?>
       