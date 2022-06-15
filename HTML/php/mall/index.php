<?php
    include_once 'include/header.php';
    $conn = mysqli_connect('localhost','root','1234','mall');
    $query = "select * from realbook where best='o' limit 12;";
    $result = mysqli_query($conn, $query);
    function printImg() {
        global $result;

        while( $row = mysqli_fetch_array($result)){
            echo "
            <li>
                <a href='/mall/book_detail.php?no={$row['no']}'><img src='/mall/image/book/{$row['imgsrc']}'></a>
                <a href='/mall/book_detail.php?no={$row['no']}'>
                    <p class='hoverBtn'>자세히보기<i class='material-icons'>keyboard_arrow_right</i></p>
                </a>
            </li>
            ";
        }
    }
    $query2 = 'select * from review_note order by no desc limit 4';
    $result2 = mysqli_query($conn, $query2);
    function printReview() {
        global $result2;
        while($row = mysqli_fetch_array($result2)){
            echo " <li>
                        <a href=\"/mall/book_review_detail.php?no={$row['no']}\">
                            <p id=\"writeNo\">{$row['no']}</p>
                            <p id=\"writeCon\">{$row['title']}</p>
                            <p id=\"writeDate\">{$row['writedate']}</p>
                        </a>
                    </li>";
        }
    }
    $query3 = 'select * from readernote order by no desc limit 4';
    $result3 = mysqli_query($conn, $query3);
    function printReader() {
        global $result3;
        while($row = mysqli_fetch_array($result3)){
            echo " <li>
                        <a href=\"/mall/reader_note_detail.php?no={$row['no']}\">
                            <p id=\"writeNo\">{$row['no']}</p>
                            <p id=\"writeCon\">{$row['title']}</p>
                            <p id=\"writeDate\">{$row['writedate']}</p>
                        </a>
                    </li>";
        }
    }
    $query4 = "select * from realbook where todaybook='o' limit 3;";
    $result4 = mysqli_query($conn, $query4);
    function printToday() {
        global $result4;
        while($row = mysqli_fetch_array($result4)){
            echo "  <div class='toBooks'>
                        <p>{$row['title']}</p> 
                        <div><img src='/mall/image/book/{$row['imgsrc']}'></div>
                        <a href=\"/mall/book_detail.php?no={$row['no']}\">
                            <p>자세히보기<i class='material-icons'>keyboard_arrow_right</i></p>
                        </a>
                    </div>
            ";
        }
    }
    $query5 = "select * from realbook where new='o' limit 6";
    $result5 = mysqli_query($conn, $query5);
    function printNewbook() {
        global $result5;
        while($row = mysqli_fetch_array($result5)){
            echo "
                    <li>
                        <a href='/mall/book_detail.php?no={$row['no']}'>
                            <div class='imgDiv'><img src='/mall/image/book/{$row['imgsrc']}'></div>
                            <p class='hoverBtn'>자세히보기<i class='material-icons'>keyboard_arrow_right</i></p>
                        </a>
                        <p>{$row['title']}</p>
                    </li>
            ";
        }
    }
?>
        <section id="contents">
            <div id="visual">
                <div id="visuWrap" class="inner">
                    <div id="moveDiv">
                        <!-- <div class="slideDiv" style="background: rgb(251, 234, 239);"> -->
                        <div class="slideDiv">
                            <img src="./image/earth.png" alt="vi1">
                            <div class="posiText">
                                <strong>지구를 지켜요</strong>
                                <h2>그린북스와 함께 지구사랑 캠페인</h2>
                                <p>다른 그림 찾으면 1천원 상품권</p>
                            </div>
                        </div>
                        <!-- <div class="slideDiv" style="background: rgb(248, 244, 216);"> -->
                        <div class="slideDiv">
                            <img src="./image/enbooks.png" alt="vi2">
                            <div class="posiText">
                                <strong>세트 특가전</strong>
                                <h2>영어그림책 베스트 모음전</h2>
                                <p>노부영 & 그린북스 단독상품</p>
                            </div>
                        </div>
                        <!-- <div class="slideDiv" style="background: rgb(230, 233, 246);"> -->
                        <div class="slideDiv">
                            <img src="./image/slider1.png" alt="vi3">
                            <div class="posiText">
                                <strong>MD 특별 추천</strong>
                                <h2>내강아지 마음상담소</h2>
                                <p>누적 조회수 3백만! 유튜브 최고의 반려견 콘텐츠</p>
                            </div>
                        </div>
                        <!-- <div class="slideDiv"  style="background: rgb(222, 243, 228);"> -->
                        <div class="slideDiv">
                            <img src="./image/visu4.png" alt="vi4">
                            <div class="posiText">
                                <strong>소장하고 싶은 이야기</strong>
                                <h2>Read Before Netflix</h2>
                                <p>원작도 궁금한 넷플릭스</p>
                            </div>
                        </div> 
                        <!-- <div class="slideDiv" style="background: rgb(218, 236, 240);"> -->
                        <div class="slideDiv">
                            <img src="./image/visu5.png" alt="vi5">
                            <div class="posiText">
                                <strong>그림책 기획전</strong>
                                <h2>엄마, 아빠 나는 자라고 있어요!</h2>
                                <p>칠교문구세트</p>
                            </div>
                        </div>
                    </div>
                    <div id="nav">
                            <span id="prev"><i class="material-icons">keyboard_arrow_left</i></span>
                            <span id="next"><i class="material-icons">keyboard_arrow_right</i></span>
                    </div>
                </div>
            </div>
            <div id="today" class="inner">
                <h2>오늘의 추천 도서</h2>
                <div>
                    <?php printToday(); ?>
                </div>
            </div>
            <div id="banner1">
                <div class="inner">
                    <a href="#">
                        <img src="./image/add1.png" alt="add1">
                    </a>
                </div>
            </div>
            <div id="news" class="inner">
                <div id="newBooks">
                    <h2>추천 신간</h2>
                    <div id="newBooks_wrap">
                        <ul>
                            <?php printNewbook(); ?>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="bestBooks" class="inner">
                <h2>베스트셀러</h2>
                <div id="newBooks_wrap">
                    <ul>
                        <?php
                            printImg();
                        ?>
                    </ul>
                </div>
            </div>
            <div id="board" class="inner">
                <div id="banner2">
                    <a href="/mall/banner2_View.php" id="bannerImg">
                        <img src="./image/add2.png" alt="add2">
                        <div class="bg"></div>
                        <p class="hoverBtn">자세히보기<i class="material-icons">keyboard_arrow_right</i></p>
                    </a>

                </div>
                <div id="review" >
                    <div id="bookReviews">
                        <h3><a href="/mall/book_review.php"><i class="material-icons">book</i>도서 리뷰</a></h3>
                        <ul>
                           <?php printReview(); ?>
                        </ul>
                    </div>
                    <div id="opinions">
                        <h3><a href="/mall/reader_note.php"><i class="material-icons">face</i>독자 게시판</a></h3>
                        <ul>
                            <?php printReader(); ?>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        
        <?php
            include_once 'include/footer.php';
        ?>