
<?php include_once ('include/header.php'); ?>
<?php
    $bookid = $_GET['id'];
    $conn = mysqli_connect('localhost','root','1234','book'); //mysql 연동
    $query = "select * from bestseller where id={$bookid};"; // mysql 구문
    $result = mysqli_query($conn, $query); //구문 넣어주기
    $row = mysqli_fetch_array($result);
?>
<div id="write_book" class="inner">
    <h2>베스트셀러</h2>
    <h3>도서 내용입니다.</h3>
    <table>
        <tr>
            <td>책 표지</td>
            <td><img src="/php/bookmenu/images/<?=$row['imgs']?>" alt="책 표지"></td>
        </tr>
        <tr>
            <td>글쓴이</td>
            <td><?=$row['writer']?></td>
        </tr>
        <tr>
            <td>출판사</td>
            <td><?=$row['pub']?></td>
        </tr>
        <tr>
            <td>출판일자</td>
            <td><?=$row['bookdate']?></td>
        </tr>
        <tr>
            <td>제목</td>
            <td><?=$row['title']?></td>
        </tr>
        <tr>
            <td>내용</td>
            <td><?=$row['desc']?></td>
        </tr>
        <tr>
            <td colspan="2">
                <form action="best_edit.php?<?="id={$bookid}"?>" method="post" class="form">
                    <input type="hidden" value="<?=$_GET['id']?>" name="id">
                    <button type="submit">수정</button>
                </form>
                <form method="post" action="process/delete_process.php" class="form">
                    <input type="hidden" value="<?=$_GET['id']?>" name="id">
                    <button type='submit'>삭제</button>
                </form>
            </td>
        </tr>
    </table>
<?php
    include_once ('include/footer.php');
?>
