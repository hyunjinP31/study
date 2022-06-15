<?php include_once ('include/header.php'); ?>
<?php
    $conn = mysqli_connect('localhost','root','1234','book');
    $query = "select * from bestseller";
    $result = mysqli_query($conn, $query);
    $row = mysqli_fetch_array($result);
?>
<div id="write_book" class="inner">
    <h2>도서목록</h2>
    <h3>새로운 도서를 등록하세요.</h3>
    <form action="process/gallery_update_process.php" method="post" enctype="multipart/form-data">
        <table>
            <tr>
                <td>글쓴이</td>
                <td><input type="text" name="writer" required value="<?=$row['writer']?>"></td>
            </tr>
            <tr>
                <td>책표지</td>
                <td>
                    <input type="file" id="file" style="position: absolute; clip: rect(0,0,0,0)" onchange="changeInputImage(this)">
                    <label for="file" style="border:1px solid #bbb; color:black; background:#ccc; padding:3px 8px 3px 8px;">파일선택 </label> <span id="file_label"><?=$row['imgs']?></span>
                    <!-- <img src="/php/bookmenu/images/<?=$row['imgs']?>">
                    <input type="hidden" id="imgs" value="">
                    <input type="file" name="imgs"> -->
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
                    <form action="/php/bookmenu/process/gallery_update_process.php" method="post">
                        <button type="submit">수정하기</button>
                    </form>
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

        function changeInputImage(obj) {
            let file = obj.value;
            let arSplitUrl = file.split('\\');
            let arFileName = arSplitUrl[arSplitUrl.length - 1];
            console.log(file);
            console.log(arSplitUrl);
            console.log(arFileName);
            if(!arFileName){
                document.querySelector('#file_label').innerHTML = "선택된 파일이 없습니다.";
            }else {
                document.querySelector('#file_label').innerHTML = arFileName;
            }
        }
    </script>
</div>
<?php include_once ('include/footer.php'); ?>