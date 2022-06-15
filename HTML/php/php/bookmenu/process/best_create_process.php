<?php
    //post전송으로 넘어온 데이터는 슈퍼글로벌 $_POST변수가 배열형태로 받는다
    $conn = mysqli_connect('localhost','root','1234','book'); //mysql 연동
    $file = $_FILES['img'];
    $remove_img = move_uploaded_file($file['tmp_name'],"C:/Apache24/htdocs/php/bookmenu/images/".$file['name']);
    $query = "INSERT INTO `bestseller` (`writer`, `title`, `pub`, `price`, `bookdate`,`desc`,`imgs`)
    VALUES('{$_POST['writer']}','{$_POST['title']}','{$_POST['pub']}','{$_POST['price']}','{$_POST['bookdate']}','{$_POST['desc']}','$file[name]')"; // mysql 구문
    $result = mysqli_query($conn, $query); //구문 넣어주기
    echo $query;
    if($result){
        echo "게시글을 작성했습니다.";
    }else {
        echo "게시글 작성에 실패했습니다.";
    }
    header('Location:../bestseller.php');
?>