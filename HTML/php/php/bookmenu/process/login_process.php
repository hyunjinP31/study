<?php
    session_start();
    //members테이블에 등록된 회원인지 확인
    $conn = mysqli_connect('localhost','root','1234','test');
    $query = "select * from members where id='{$_POST['userId']}'";
    $result = mysqli_query($conn, $query);


    //아이디가 있다면 비밀번호 검사
    if(mysqli_num_rows($result) == 1){
        $row = mysqli_fetch_array($result);

        //비밀번호 확인 -> 비밀번호가 맞을 시 세션 생성
        if($_POST['userPw'] == $row['pw']){
            $_SESSION['userId'] = $_POST['userId']; //실행문. 패스워드가 일치하면 세션을 만들어줌

            //세션아이디가 있으면 로그인 되었습니다. 경고창 출력
            if(isset($_SESSION['userId'])){ //세션이 있다면 (비밀번호가 맞다면)
            ?>
                <script>
                    alert("로그인 되었습니다."); //로그인 됨
                    location.replace("../index.php");
                </script>
            <?php
            }
        }else { //비밀번호가 맞지 않을 시 실행(두 번째 if)
            ?>
            <script>
                alert("비밀번호가 맞지 않습니다.");
                location.replace("../index.php");
            </script>
            <?php
        }
    }else { //아이디가 맞지 않을 시 실행(첫 번째 if)
        ?>
        <script>
            alert("아이디가 맞지 않습니다.");
            location.replace("../index.php");
        </script>
        <?php
    }
?>