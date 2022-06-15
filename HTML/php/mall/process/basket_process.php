<?php
    session_start();
    $userId = $_SESSION['userId'];
    if(isset($userId)==false){
        ?>
        <script>
            alert('로그인 해주세요');
            history.back();
        </script>
        <?php
    }
    $bookno = $_GET['no'];
    $conn = mysqli_connect('localhost','root','1234','mall');
    $query2 = "insert into basket (id, title, writer, price, imgsrc)
    VALUES ('{$userId}', '{$_POST['title']}', '{$_POST['writer']}', '{$_POST['price']}', '{$_POST['imgsrc']}');";
    $query3 = "select * from members
                inner join basket
                on members.id= basket.id
                where basket.id = '1234';";
    $result2 = mysqli_query($conn, $query3);
    while($row = mysqli_fetch_array($result2)){
        if ($_POST['title'] == $row['title']){
            $query4 = "delete from basket where title='{$_POST['title']}';";
            $result4 = mysqli_query($conn, $query4);
            ?>
            <script>
                alert('이미 장바구니에 담긴 상품입니다.'); //문제점 : 현재 장바구니의 모든 로우를 검색하기 때문에 다른 사람이 담은 애들까지 포함되서 검색이 됨
                history.back();
            </script>
            <?php
        }
    }
    $result = mysqli_query($conn, $query2);
    ?>
        <script>
            alert('장바구니에 담았습니다.');
            history.back();
        </script>
