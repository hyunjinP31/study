<?php include_once ('../include/header.php'); ?>
<div id="write_book" class="inner">
    <h2>회원가입</h2>
    <h3>회원정보를 입력하세요.</h3>
    <form action="../process/join_process.php" method="post">
        <table>
            <tr>
                <td>아이디</td>
                <td><input type="text" name="userId"></td>
            </tr>
            <tr>
                <td>비밀번호</td>
                <td><input type="password" name="userPw"></td>
            </tr>
            <tr>
                <td>비밀번호체크</td>
                <td><input type="password" name="userPwCh"></td>
            </tr>
            <tr>
                <td>이름</td>
                <td><input type="text" name="userName"></td>
            </tr>
            <tr>
                <td colspan="2">
                    <button type="submit">회원가입</button>
                    <button type="reset">취소</button>
                </td>
            </tr>
        </table>
    </form>
</div>
<?php include_once ('../include/footer.php'); ?>