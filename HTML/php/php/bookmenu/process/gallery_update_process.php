<?php
    $conn = mysqli_connect('localhost','root','1234','book');
    $file = $_FILES['imgs'];
    if ($file){
        $remove_img = move_uploaded_file($file['tem_name'],"c:/Apache24/htdocs/php/bookmenu/images/".$file['name']);
        unlink("../images/");
    }
    
    $query = "update bestseller
    set `writer`="{$_POST['writer']}", `imgs`="{$_POST['writer']}", `writer`="{$_POST['writer']}", `writer`="{$_POST['writer']}", `writer`="{$_POST['writer']}",
    "
?>