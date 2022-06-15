<?php
    $imgs = $_FILES ? $_FILES['img']['name'] : $_POST['oldimg'];
    if($_FILES['name'] != $_POST['oldimg']){
        //책표지가 변경되면 이전 파일을 삭제
        //변경된 파일을 이미지 폴더로 업로드
        unlink('../images/'.$_POST['oldimg']);
        move_uploaded_file($_FILES['img']['tmp_name'],'C:/Apache24/htdocs/php/bookmenu/images/'.$_FILES['img']['name']);
    }
    $conn = mysqli_connect('localhost','root','1234','book');
    $query = "update bestseller
    SET `writer` = '{$_POST['writer']}', 
    `title` = '{$_POST['title']}',
    `pub` = '{$_POST['pub']}',
    `imgs` = '{$imgs}',
    `price` = '{$_POST['price']}',
    `bookdate` = '{$_POST['bookdate']}',
    `desc` = '{$_POST['desc']}'
    WHERE (`id` = '{$_POST['id']}')
    ";
    $result = mysqli_query($conn, $query);
    header('Location:/php/bookmenu/gallery_board.php');
?>