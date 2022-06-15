<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/php/bookmenu/css/style.css">
</head>
<body>
    <div id="wrap">
        <header>
            <h1><a href="/php/bookmenu/index.php">Books</a></h1>
            <ul>
                <li><a href="/php/bookmenu/index.php">home</a></li>
                <li>
                <?php
                    if (isset($_SESSION['userId'])){
                        echo "<a href='/php/bookmenu/process/logout_process.php'>로그아웃</a>"; //얘가 a태그로 바로 프로세스로 끌고 가서 세션을 없애고 로그아웃으로 만듦
                    }else {
                        echo "<a href='/php/bookmenu/member/login.php'>로그인</a>";
                    }
                ?>    
                </li>
                <li><a href="/php/bookmenu/member/join.php">회원가입</a></li>
                <li><a href="/php/bookmenu/gallery_create.php">베스트셀러 등록</a></li>
                <li><a href="/php/bookmenu/gallery_board.php">베스트셀러 목록</a></li>
                <li><a href="/php/bookmenu/index.php">도서목록</a></li>
                <li><a href="/php/bookmenu/create.php">도서등록</a></li>
                <li><a href="#">도서검색</a></li>
            </ul>
        </header>

        <div id="contents">