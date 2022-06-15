<?php
    $conn = mysqli_connect('localhost','root','1234','mall');
    $query = "select * from realbook";
    $file_tmp = $_FILES['img']['tmp_name'];
    echo $file_tmp;
    move_uploaded_file($file_tmp, "C://Apache24/htdocs/mall/image/book/".$_FILES['img']['name']);
//post전송으로 넘어온 데이터는 슈퍼글로벌 $_POST 변수가 배열형태로 받아진다
    $query = "
        insert into realbook(title, bookdate, pub, writer, price, imgsrc, textview, Kbook, NKbook, Ebook, best, todaybook, new)
        values(
            '{$_POST['title']}',
            '{$_POST['date']}',
            '{$_POST['pub']}',
            '{$_POST['writer']}',
            '{$_POST['price']}',
            '{$_FILES['img']['name']}',
            '{$_POST['textview']}',
            '{$_POST['Kbook']}',
            '{$_POST['NKbook']}',
            '{$_POST['Ebook']}',
            '{$_POST['best']}',
            '{$_POST['todaybook']}',
            '{$_POST['new']}'
        );
    ";
    
    $result = mysqli_query($conn, $query);
    // header('location:/mall/index.php');
    if($result){
        ?>
            <script>
                alert('새로운 도서를 등록했습니다.');
            </script>
        <?php
        header('location:/mall/index.php');
    } else {
        echo "ㄴㄴ";
    }
?>