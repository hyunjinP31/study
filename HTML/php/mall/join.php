<?php
    include_once 'include/header.php';
?>
    <section id="createBoard" class="inner">
        <form action="/mall/process/create_process.php" method="post">
            <h1>GreenBooks 회원 가입</h1>
            <table>
                <tr>
                    <td>
                        <input type="text" name="userId" placeholder="아이디" required>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="password" name="userPw" placeholder="비밀번호" required>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="password" name="userPwCh" placeholder="비밀번호확인" required>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="text" name="userName" placeholder="사용자 이름" required>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="text" name="userEmail" placeholder="이메일 주소">
                        <span>@</span>
                        <input type="text" name="emailSelect" id="realAddr">
                        <select name="selectAddr" id="selectAddr">
                            <option value="" id="inputAddr">직접입력</option>
                            <option value="1">naver.com</option>
                            <option value="2">daum.net</option>
                            <option value="3">gmail.com</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="text" name="userAddr" id="Addr" placeholder="주소">
                        <button type="button" id="addSearch">주소 찾기</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="text" name="addrPlus" placeholder="상세 주소">
                    </td>
                </tr>
                <tr>
                    <td>
                        <button type="submit">회원 가입</button>
                        <button onclick="location.href='/mall/index.php'">가입 취소</button>
                    </td>
                </tr>
            </table>
        </form>

        <script>
            //주소찾기 버튼
        document.querySelector('#addSearch').addEventListener('click', function(){
        new daum.Postcode({
            oncomplete: function(data) {
                console.log(data);
                document.querySelector('#Addr').value = data.roadAddress;
            }
        }).open();
});

$selectAddr = document.querySelector('#selectAddr');
$realAddr = document.querySelector('#realAddr');

$selectAddr.addEventListener('change', function(){
    if($selectAddr.value==1){
        $realAddr.value = "naver.com";
    } else if($selectAddr.value==2){
        $realAddr.value = "daum.net";
    } else if($selectAddr.value==3){
        $realAddr.value = "gmail.com";
    }
})


        </script>
    </section>
<?php
    include_once 'include/footer.php';
?>