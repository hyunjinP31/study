
            <?php include_once ('include/header.php'); ?>
            <?php
            
                define($total, 0);
                $conn = mysqli_connect('localhost','root','1234','book'); //mysql 연동
                    $query = "select * from books;"; // mysql 구문
                    $result = mysqli_query($conn, $query); //구문 넣어주기

                    $total = mysqli_num_rows($result); //전체 레코드 수
                    $list_num = 5; //한페이지 당 레코드 개수
                    //블럭은 페이지 123이 나오는 게 한 블럭.
                    $page_num = 3; //한블럭 당 페이지 수
                    $page = isset($_GET['page']) ? $_GET['page'] : 1; //get으로 현재 페이지 넘을 받아오면 그 페이지로 가고 아니면(그냥 인덱스만 있으면 1로 줘라)
                    //전체 페이지 수 = 전체 레코드수 / 페이지당 레코드 개수
                    $total_page = ceil($total / $list_num); //소수점 나오면 올림
                    //전체 블럭 수 = 전체 페이지 수 /블럭당 페이지 수
                    $total_block = ceil($total_page / $page_num);
                    //현재 블럭 번호 = 현재 페이지 번호 / 블럭당 페이지 수
                    $now_block = ceil($page / $page_num);
                    //블럭당 시작 페이지 번호 = (해당글의 블럭번호 -1) * 블럭당 페이지 수 + 1
                    $s_pageNum = ($now_block-1) * $page_num + 1;
                    // 데이터가 0개인 경우
                    if($s_pageNum <= 0){
                        $s_pageNum = 1;
                    }
                    //블럭당 마지막 페이지 번호
                    $e_pageNum = $now_block * $page_num;
                    //아지막 페이지 번호가 전체 페이지 수를 넘지 않도록
                    if ($e_pageNum > $total_page){
                        $e_pageNum = $total_page;
                    }
                    //시작 번호
                    $start = ($page-1) * $list_num;
                    //쿼리 작성
                    $sql = "select * from books limit $start, $list_num;";
                    $result2 = mysqli_query($conn, $sql);

                function printList(){
                    global $result2;
                    while ($row = mysqli_fetch_array($result2)){ //구문 넣은 결과 불러와서 배열로 반환하고 while문으로 반복 돌기(배열이 끝날 때 까지 돔)
                        echo "<tr>
                                <td>{$row['id']}</td>
                                <td>{$row['writer']}</td>
                                <td><a href=\"detail.php?id={$row['id']}\">{$row['title']}</a></td>
                                <td>{$row['pub']}</td>
                                <td>{$row['price']}원</td>
                                <td>{$row['bookdate']}</td>
                            </tr>";
                    };
                }
                
            ?>
            <div id="spinnerWrap">
                <div class="spinner">
                    <div class="cube1"></div>
                    <div class="cube2"></div>
                </div>
            </div>
            
            <div id="contents_page" class="inner">
                <h2>도서목록</h2>
                <h3>최신 도서 목록입니다.</h3>
                <table>
                    <tr>
                        <th>아이디</th>
                        <th>글쓴이</th>
                        <th>제목</th>
                        <th>출판사</th>
                        <th>가격</th>
                        <th>출판일</th>
                    </tr>
                   <?php
                    printList();
                   ?>
                </table>
                <p class="paper">
                    <!-- 이전버튼 -->
                    <?php
                        if($page <= 1){ ?>
                        <a href="index.php?page=1">이전</a>
                    <?php 
                    }
                        else { ?>
                        <a href="index.php?page=<?=($page-1)?>">이전</a>
                    <?php
                    }
                    ?>
                    <?php
                        //프린트 페이지라는 변수의 시작은 스타트 페이지 넘이고, 엔드 페이지 보다 같거나 작을 때 까지 1씩 증가함
                        for ($print_page = $s_pageNum; $print_page <= $e_pageNum; $print_page++){
                    ?>
                        <!-- 그렇게 만든 변수를 a태그에 쓸 건데 a태그는 html이라 php끊어줌 그 안의 값은 또 php구문이라 <//?=?>따로 넣어줌 -->
                        <a href="index.php?page=<?=$print_page?>"><?=$print_page?></a>
                    <?php
                        }
                    ?>
                    <?php
                        if($page >= $total_page){
                    ?>
                        <a href="index.php?page=<?=$total_page?>">다음</a>
                    <?php
                        }else {
                    ?>
                        <a href="index.php?page=<?=($page+1)?>">다음</a>
                    <?php
                        }
                    ?>
                </p>
                <div id="searchDiv">
                    <span>검색하기</span>
                    <input type="text" name="search">
                    <button id="search">검색하기</button>
                    <form action="./create.php" method="post" id="inline">
                        <button id="rightBtn">도서등록</button>
                    </form>
                </div>
            </div>

                <script>
                    function hideLoading(){
                        let spinner = document.querySelector('#spinnerWrap');
                        spinner.style.display = "none";
                    }
                    setTimeout(() => {
                        hideLoading();
                    }, 3000);
                </script>

        <?php
            include_once ('include/footer.php');
        ?>
