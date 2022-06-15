<?php
    //파일이름 변경하기 rename(파일이름, 변경할 이름)
    //내용변경하기 file_put_contents(파일명, 내용)
    rename('../data/'.$_POST['old_id'],'../data/'.$_POST['id']);
    file_put_contents('../data/'.$_POST['id'],$_POST['description']);
    header('Location:../index.php');
?>