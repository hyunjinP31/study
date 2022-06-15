<?php
    setcookie('cookie1','abc');
    setcookie('cookie2','123456',time()+100);
    if(isset($_COOKIE['cookie1'])){
        echo "쿠키 1은 ".$_COOKIE['cookie1'];
    }
    if(isset($_COOKIE['cookie2'])){
        echo "<br/>쿠키 2는 ".$_COOKIE['cookie2'];
    }
?>
<p><a href="ex15_cookie_unset.php">쿠키 삭제하기</a></p>