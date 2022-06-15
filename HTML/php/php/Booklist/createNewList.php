<?php
    include ('include/header.php');
?>
<div class="create">
        <h2>도서 등록하기</h2>
        <form action="" method="post">
        <table>
            <tr>
                <td>글제목</td>
                <td><input type="text" name="id" required></td>
            </tr>
            <tr>
                <td>글내용</td>
                <td>
                    <textarea name="description" id="description" cols="30" rows="10" required></textarea>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <button type="submit">글적기</button>
                    <button type="reset">취소</button>
                </td>
            </tr>
        </table>
        </form>
    </div>
<?php
    include ('include/footer.php');
?>