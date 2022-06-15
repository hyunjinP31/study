<?php
    session_start();
    $conn = mysqli_connect('localhost','root','1234','mall');
    $query = "select name from members where id='{$_SESSION['userId']}'";
    $result = mysqli_query($conn, $query);
    $row = mysqli_fetch_array($result);
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GreenBooks</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="/mall/css/style.css">
    <script defer src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
    <script defer src="/mall/JS/js.js"></script>
   
</head>
<body>
    <div id="wrap">
        <header>
            <div id="headerTop" class="inner">
                <ul>
                <li><a href="https://ko-kr.facebook.com/"><img src="/mall/image/facebook.png" alt="facebook"></a></li>
                    <li><a href="https://www.instagram.com/"><img src="/mall/image/insta1.png" alt="insta"></a></li>
                    <li><a href="https://www.youtube.com/"><img src="/mall/image/youtube.png" alt="youtube"></a></li>
                    <li><i class="material-icons">language</i></li>
                </ul>    
                <p>
                    <?php
                        if(isset($_SESSION['userId'])){
                        echo $row[0]."님 환영합니다!";
                        } else {
                        echo "";
                        }
                    ?>  
                </p>
                <ul>
                <li>
                        <?php
                            if(isset($_SESSION['userId'])){
                                echo "<a href='/mall/add_book.php'>도서등록</a>";
                            } else {
                                echo "<a href='/mall/join.php'>회원가입</a>";
                            }
                        ?>    
                    </li>
                    <li>
                        <?php
                            if(isset($_SESSION['userId'])){
                                echo "<a href='/mall/process/logout_process.php'>로그아웃</a>";
                            } else {
                                echo "<a href='/mall/login.php'>로그인</a>";
                            }
                        ?>    
                    </li>
                    <li><a href="/mall/basket.php">장바구니</a></li>
                    <li><a href="/mall/customer_center.php">고객센터</a></li>
                    <li><a href="/mall/tracking.php">주문배송</a></li>
                </ul>
            </div>
            <div id="headerMiddle" class="inner">
                <h1>
                    <a href="/mall/index.php">
                        <img src="/mall/image/logo.png" alt="logo1">
                    </a>
                </h1>
                <div id="search">
                    <div id="border">
                        <form action="/mall/search.php" method="post">
                            <input type="text" name="search">
                            <button type="submit"><i class="material-icons">search</i></button>
                        </form>
                    </div>
                </div>
                <div id="addDiv">
                    <img src="/mall/image/ad.png" alt="add1">
                </div>
            </div>
            <div id="headerBottom">
                <div class="inner">
                    <div id="burger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul>
                    <li><a href="/mall/list/local_list.php?page=1">국내도서</a></li>
                        <li><a href="/mall/list/overseas_list.php?page=1">해외도서</a></li>
                        <li><a href="/mall/list/ebook_list.php?page=1">E-book</a></li>
                        <li><a href="/mall/list/bestseller_list.php?page=1">베스트셀러</a></li>
                        <li><a href="/mall/list/today_list.php?page=1">오늘의 책</a></li>
                        <li><a href="/mall/list/newbook_list.php?page=1">신간추천</a></li>
                    </ul>
                </div>
            </div>
            <div id="scrollTop">
                <a href="#">TOP</a>
            </div>
        </header>