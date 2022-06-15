<?php
    session_start();
    unset($_SESSION['city']);
    session_unset();
    // unset($_SESSION['session1']);
    echo $_SESSION['city'];
    echo $_SESSION['session1'];
?>