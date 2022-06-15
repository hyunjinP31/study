<?php
    session_start();
    $userId = $_SESSION['userId'];
    function loginCheck(){
        global $userId;
        if(isset($userId)){
            header('Location:/mall/add_review.php');

        } else {
            ?>
            <script>
                alert('로그인이 필요합니다.');
                history.back();
            </script>
            <?php
        }
    }
    loginCheck();
    

?>