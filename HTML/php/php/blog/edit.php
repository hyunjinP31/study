<?php include_once 'include/header.php'; ?>
<div id="content">
        <h2>도서 수정하기</h2>
        <form action="./process/edit_process.php" method="post">
        <table>
            <tr>
                <td>글제목</td>
                <td>
                    <input type="hidden" name="old_id" value="<?=$_GET['id']?>">
                    <input type="text" name="id" required value="<?=$_GET['id']?>">
                </td>
            </tr>
            <tr>
                <td>글내용</td>
                <td>
                    <textarea name="description" id="description" cols="30" rows="10" required >
                    <?php echo file_get_contents('data/'.$_GET['id']);?>
                    </textarea>
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
<?php include_once 'include/footer.php'; ?>