<?php include_once ('include/header.php'); ?>
<?php
    $conn = mysqli_connect('localhost','root','1234','book');
    $query = "select * from bestseller where id = {$_POST['id']}";
    $result = mysqli_query($conn, $query);
    $row = mysqli_fetch_array($result);


    
?>
<div id="write_book" class="inner">
    <h2>베스트 셀러 도서수정</h2>
    <h3>베스트 셀러 도서를 수정하세요.</h3>
    <form action="process/gallery_edit_process.php" method="post" enctype="multipart/form-data">
        <table>
            <tr>
                <td>글쓴이</td>
                <td>
                    <input type="hidden" name="id" value="<?=$row['id']?>">
                    <input type="text" name="writer" required value="<?=$row['writer']?>">
                </td>
            </tr>
            <tr>
                <td>책표지</td>
                <td>
                    <input type="hidden" name="oldimg" value="<?=$row['imgs']?>">
                    <input type="file" name="img" style="position:absolute; opacity: 0;" onchange="imageChange(this)">
                    <label class="file">파일선택</label>
                    <label id="imglabel"><?=$row['imgs']?></label>
                </td>
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
                    <textarea name="desc" id="desc" cols="30" rows="10">
                    <?=$row['desc']?>
                    </textarea>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <button type="submit">도서수정</button>
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
        function imageChange(input) {
            //#imglabel의 내용을 input의 value값으로 변경 
            document.querySelector('#imglabel').innerHTML = input.value;
            //역슬러쉬는 하나만 하면 문자로 취급이 안 되기 때문에 앞에 역슬러쉬를 하나 더 넣어줌으로써 뒤에 역슬러쉬를 문자취급해준다.(escape문자)
            if (input.value){
                let valueArr = input.value.split('\\');
                document.querySelector('#imglabel').innerHTML = valueArr[valueArr.length -1];
            }else {
                document.querySelector('#imglabel').innerHTML = "선택된 파일 없음";
            }
            

        }
    </script>
</div>
<?php include_once ('include/footer.php'); ?>