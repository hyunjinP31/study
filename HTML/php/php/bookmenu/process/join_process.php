<?php
    $conn = mysqli_connect('localhost','root','1234','test');
    $query = "insert into members(id, pw, date, name)
    values('{$_POST['userId']}','{$_POST['userPw']}',NOW(),'{$_POST['userName']}')";
    $result = mysqli_query($conn, $query);
    if ($result){
        echo "성공";
    }else {
        echo "실패";
    }
    header ('Location:/php/bookmenu/index.php');
?>