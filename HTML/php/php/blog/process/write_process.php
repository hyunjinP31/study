<?php
    // var_dump($_POST);
    // post전송으로 전송된 데이터는 슈퍼글로벌 $_POST 전역ㅂㄴ수로 받음
    // $_POST 는 연관배열인 $_POST['key_name'];
    $id = $_POST['id'];
    $desc = $_POST['description'];
    
    file_put_contents('../data/'.$id, $desc);
    //리다이랙션
    header('Location:../index.php');
?>