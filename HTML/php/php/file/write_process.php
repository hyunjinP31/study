<?php
    // file_put_contents(파일명,내용);
    $title = $_POST['title'];
    $description = $_POST['desc'];
    file_put_contents('./data/'.$title,$description);
    echo "파일이 추가되었습니다.";

    //리다이렉션
    header('Location:index.php');
?>