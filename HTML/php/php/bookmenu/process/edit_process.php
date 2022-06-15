<?php
     $conn = mysqli_connect('localhost','root','1234','book'); //mysql 연동
     $query = "UPDATE `books` SET `writer` = '{$_POST['writer']}', `title` = '{$_POST['title']}', `pub` = '{$_POST['pub']}', `price` = '{$_POST['price']}', `bookdate` = '{$_POST['bookdate']}', `desc` = '{$_POST['desc']}' WHERE (`id` = '{$_POST['id']}');"; // mysql 구문
     $result = mysqli_query($conn, $query); //구문 넣어주기
     header('Location:../index.php');
?>