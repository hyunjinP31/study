<?php include_once ('include/header.php'); ?>
<?php
    $bookid = $_GET['id'];
     $conn = mysqli_connect('localhost','root','1234','book'); //mysql 연동
     $query = "select * from books where id={$bookid};"; // mysql 구문
     $result = mysqli_query($conn, $query); //구문 넣어주기
     $row = mysqli_fetch_array($result);
?>
<div id="write_book" class="inner">
    <h2>내용수정</h2>
    <h3>내용을 수정하세요</h3>
    <form action="process/edit_process.php" method="post">
        <table>
            <tr>
                <td>글쓴이</td>
                <td><input type="text" name="writer" required value="<?=$row['writer']?>"></td>
            </tr>
            
            <tr>
                <td>출판사</td>
                <td><input type="text" name="pub" value="<?=$row['pub']?>"></td>
            </tr>
            <tr>
                <td>가격</td>
                <td><input type="text" name="price" id="priceInput" required value="<?=$row['price']?>"></td>
            </tr>
            <tr>
                <td>출판일</td>
                <td><input type="text" name="bookdate" value="<?=$row['bookdate']?>"></td>
            </tr>
            <tr>
                <td>제목</td>
                <td><input type="text" name="title" required value="<?=$row['title']?>"></td>
            </tr>
            <tr>
                <td>책 내용</td>
                <td>
                    <textarea name="desc" id="desc" cols="30" rows="10" ><?=$row['desc']?></textarea>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <input type="hidden" name="id" value="<?=$_GET['id']?>">
                    <button type="submit">도서등록</button>
                    <button type="reset">취소</button>
                </td>
            </tr>
        </table>
    </form>
    <script>
        let priceInput = document.querySelector('#priceInput');
        priceInput.addEventListener('input',function(){
            if(isNaN(Number(priceInput.value))){
                alert('가격은 숫자만 입력해주세요.');
                priceInput.value='';
            }
        })
    </script>
</div>
<?php include_once ('include/footer.php'); ?>