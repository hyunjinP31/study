<?php
$title = $_POST['title'];
$description = $_POST['desc'];
    file_put_contents('./blogData/'.$title,$description);

    header('Location:Blue_Blog.php');
?>