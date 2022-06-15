<?php
    session_start();
    $_SESSION['city'] = "부산";
    $_SESSION['session1'] = "gattaGo";
    echo $_SESSION['city'];
    echo $_SESSION['session1'];
?>