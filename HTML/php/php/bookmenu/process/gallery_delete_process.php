<?php
    $conn = mysqli_connect('localhost','root','1234','book');
    $query = "delete from bestseller where id={$_POST['id']}";
    $result = mysqli_query($conn, $query);
    // $result2 = mysqli_query($conn, "select from bestseller where id={$_POST['id']}");
    // $row = mysqli_fetch_array($result2);
    if($result){
        unlink("../images/".$_POST['imgs']); //unlink에는 절대 경로가 안 먹는다. 유의
        echo "성공";
    }else {
        echo "실패";
    }
    header('Location:/php/bookmenu/gallery_board.php')
?>