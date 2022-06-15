<?php include_once ('include/header.php'); ?>
<div id="write_book" class="inner">
    <h2>도서목록</h2>
    <h3>새로운 도서를 등록하세요.</h3>
    <form action="process/create_process.php" method="post">
        <table>
            <tr>
                <td>글쓴이</td>
                <td><input type="text" name="writer" required></td>
            </tr>
            
            <tr>
                <td>출판사</td>
                <td><input type="text" name="pub"></td>
            </tr>
            <tr>
                <td>가격</td>
                <td><input type="text" name="price" id="priceInput" required></td>
            </tr>
            <tr>
                <td>출판일</td>
                <td><input type="text" name="bookdate"></td>
            </tr>
            <tr>
                <td>제목</td>
                <td><input type="text" name="title" required></td>
            </tr>
            <tr>
                <td>책 내용</td>
                <td>
                    <textarea name="desc" id="desc" cols="30" rows="10"></textarea>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <button>도서등록</button>
                    <button>취소</button>
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