<?php
    setcookie('cookie1','',time()-3600);
    if(isset($_COOKIE['cookie1'])){
        echo "<br/>쿠키 1은 ".$_COOKIE['cookie1'];
    }else {
        echo "<br/>쿠키 1은 사라짐";
    }
    if(isset($_COOKIE['cookie2'])){
        echo "<br/>쿠키 2는 ".$_COOKIE['cookie2'];
    }else {
        echo "<br/>쿠키 2는 사라짐";
    }
?>