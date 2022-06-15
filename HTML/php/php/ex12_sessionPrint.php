<?php
    session_start();
     echo "<h2> 세션 값은 ".$_SESSION['city']." 입니다.</h2>";
?>
<a href="ex13_session_unset.php">삭제</a>
<!-- 세션 삭제 -->