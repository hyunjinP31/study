<?php
session_start();
$result = session_destroy();
if($result){
    ?>
        <script>
            alert('로그아웃 되었습니다.');
            // location.replace('../index.php');
            history.back();
            //이전페이지로 이동
        </script>
    <?php
}
?>