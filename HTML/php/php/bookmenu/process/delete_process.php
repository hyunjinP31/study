<?php
    $conn = mysqli_connect('localhost','root','1234','book'); //mysql 연동
    $query = "delete from books where id={$_POST['id']};"; // mysql 구문
    $result = mysqli_query($conn, $query); //구문 넣어주기
    header('Location:../index.php');
?>