<?php
    //파일 삭제하기 unlink(파일경로)
    unlink('../data/'.$_POST['id']);
    header('Location:../index.php');
?>